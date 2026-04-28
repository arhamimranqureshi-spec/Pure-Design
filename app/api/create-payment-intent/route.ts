import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const CRM_BASE_URL = 'https://dev.pixelperfektsolutions.com';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { amount, payment_method, billing_details } = data;

        // 1. Get Country and Currency
        const ip = req.headers.get('x-forwarded-for') || 'UNKNOWN';
        let currency = 'gbp';
        let currency_id = 22;

        try {
            const ipRes = await fetch(`https://ipwhois.app/json/${ip.split(',')[0]}`);
            const ipData = await ipRes.json();
            if (ipData.country === 'United States') {
                currency = 'usd';
                currency_id = 21;
            }
        } catch (e) {
            console.error("IP check failed:", e);
        }

        // 2. CRM Login
        const loginRes = await fetch(`${CRM_BASE_URL}/api/v1/auth/login`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                email: 'mosib.alee123@gmail.com',
                password: '12345678',
            }).toString(),
        });
        const loginData = await loginRes.json();
        const token = loginData?.data?.token;

        if (!token) throw new Error("CRM Login failed");

        // 3. Create/Retrieve Client
        let last_ClientId;
        const clientPayload = {
            name: `${billing_details.firstName} ${billing_details.lastName}`,
            email: billing_details.email,
            mobile: billing_details.phone,
            company_name: billing_details.companyName || '',
            address: billing_details.address,
            email_notifications: 0,
            password: '12345678',
            brand_id: 10,
            sendMail: 'no',
        };

        const clientRes = await fetch(`${CRM_BASE_URL}/api/v1/client`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clientPayload),
        });
        let res = await clientRes.json();

        if (res.error) {
            // Handle existing client with unique prefix logic as in PHP
            const retryClientPayload = {
                ...clientPayload,
                email: `remove${Math.floor(Math.random() * 100)}_${billing_details.email}`,
            };
            const retryClientRes = await fetch(`${CRM_BASE_URL}/api/v1/client`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(retryClientPayload),
            });
            res = await retryClientRes.json();
            last_ClientId = res?.data?.id;
        } else {
            last_ClientId = res?.data?.id;
        }

        if (!last_ClientId) throw new Error("Client creation failed");

        // 4. Get last Invoice Number
        const invNumRes = await fetch(`${CRM_BASE_URL}/api/v1/invoice/lastInvoiceNumber`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        const invNumber = await invNumRes.text();

        // 5. Create Invoice
        const currentDate = new Date().toISOString().split('T')[0];
        const dueDate = new Date(Date.now() + 86400000).toISOString().split('T')[0]; // +1 day

        const invoicePayload = {
            invoice_number: invNumber,
            issue_date: currentDate,
            due_date: dueDate,
            sub_total: amount,
            total: amount,
            currency_id: currency_id,
            client_id: last_ClientId,
            status: 'unpaid',
            allowed_payment_modes: '["stripe"]',
            added_from: 699,
            sale_agent: 699,
            brand_id: 10,
            item_name: [billing_details.packageName],
            item_summary: [billing_details.description || 'Package Purchase'],
            cost_per_item: [amount],
            quantity: [1],
            amount: [amount],
        };

        const invoiceRes = await fetch(`${CRM_BASE_URL}/api/v1/invoice`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invoicePayload),
        });
        const invoiceData = await invoiceRes.json();
        const last_InvoiceId = invoiceData?.data?.id;

        if (!last_InvoiceId) throw new Error("Invoice creation failed");

        // 6. Stripe Payment (Confirm)
        let paymentIntent;
        try {
            paymentIntent = await stripe.paymentIntents.create({
                amount: amount * 100,
                currency: currency,
                payment_method: payment_method,
                automatic_payment_methods: {
                    enabled: true,
                    allow_redirects: 'never',
                },
                confirm: true,
                receipt_email: billing_details.email,
                metadata: {
                    pkgTitle: billing_details.packageName,
                },
            });

            // 7. Success logic - update CRM stripe-pay
            const dataPayment = {
                invoice_id: last_InvoiceId,
                transaction_id: paymentIntent.id,
                customer_id: last_ClientId,
                status: 1, // success
                fname: billing_details.firstName,
                lname: billing_details.lastName,
                email: billing_details.email,
                mobile: billing_details.phone,
                address: billing_details.address,
                cname: billing_details.companyName || '',
                country_id: billing_details.country,
                state: billing_details.state,
                city: billing_details.city,
                zcode: billing_details.zipCode,
                response: paymentIntent,
            };

            const stripePayRes = await fetch(`${CRM_BASE_URL}/api/v1/stripe-pay`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataPayment),
            });
            const stripePayData = await stripePayRes.json();

            return NextResponse.json({ status: 200, message: "Payment Successful", stripeResponse: stripePayData, paymentIntent });

        } catch (err: any) {
            // 8. Decline/Error logic - log to CRM
            const dataPaymentDecline = {
                invoice_id: last_InvoiceId,
                transaction_id: '',
                customer_id: last_ClientId,
                status: 0, // decline
                fname: billing_details.firstName,
                lname: billing_details.lastName,
                email: billing_details.email,
                mobile: billing_details.phone,
                address: billing_details.address,
                cname: billing_details.companyName || '',
                country_id: billing_details.country,
                state: billing_details.state,
                city: billing_details.city,
                zcode: billing_details.zipCode,
                response: err.message,
            };

            await fetch(`${CRM_BASE_URL}/api/v1/stripe-pay`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataPaymentDecline),
            });

            return NextResponse.json({ status: 500, message: err.message }, { status: 500 });
        }

    } catch (err: any) {
        console.error("General API error:", err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
