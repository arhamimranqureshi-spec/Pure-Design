'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/logo.svg";

interface CheckoutProps {
  packageName: string;
  price: number;
  currency: string;
  description: string;
}

export default function CheckoutPage({
  packageName,
  price,
  currency,
  description,
}: CheckoutProps) {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    companyName: "",
    country: "US",
    state: "",
    city: "",
    zipCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.state || !formData.city || !formData.zipCode || !phone) {
      setError("Please fill in all required fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!stripe || !elements) return;

    if (!validateForm()) return;

    try {
      setLoading(true);

      // Create PaymentMethod on client
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("CardElement not loaded");

      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: phone,
            address: {
                line1: formData.address,
                city: formData.city,
                state: formData.state,
                postal_code: formData.zipCode,
                country: formData.country,
            }
        },
      });

      if (pmError) {
        setError(pmError.message || "Card verification failed");
        setLoading(false);
        return;
      }

      // Call backend with PaymentMethod ID and full details
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: price,
          payment_method: paymentMethod.id,
          billing_details: {
              ...formData,
              phone,
              packageName,
              description,
          },
        }),
      });

      const data = await response.json();

      if (data.status === 200) {
          setSuccess("Payment successful and recorded in CRM!");
          console.log("Full server response:", data);
      } else {
          setError(data.message || "Payment or CRM integration failed");
      }

      setLoading(false);

    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during payment.");
      setLoading(false);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between xl:pt-6 pt-4 px-4 lg:px-6 xl:px-14 relative shadow-sm pb-4">
        <Link href="/" className="logo">
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={60}
            className="w-auto h-auto object-cover object-center"
          />
        </Link>
        <button onClick={() => router.back()} className="text-sm font-semibold text-gray-600 hover:text-[#F75126] flex items-center gap-1">
          &larr; Back
        </button>
      </header>

      <section className="checkout-section max-w-6xl mx-auto px-4 lg:px-6 py-10 mb-16">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 mt-6">
        {/* LEFT – FORM */}
        <div>
          <div className="bg-[#0b1043] text-white rounded-t-md px-4 py-2 flex items-center gap-2 font-semibold">
            <span className="bg-white text-[#0b1043] w-6 h-6 flex items-center justify-center rounded text-sm">1</span>
            Payment Details
          </div>
          <form
            onSubmit={handleSubmit}
            className="border border-t-0 border-gray-200 rounded-b-md p-6 space-y-4 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleInputChange} className="border border-gray-300 rounded p-2.5 w-full outline-none focus:border-blue-500" />
              <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleInputChange} className="border border-gray-300 rounded p-2.5 w-full outline-none focus:border-blue-500" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} className="border border-gray-300 rounded p-2.5 w-full outline-none focus:border-blue-500" />
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={phone => setPhone(phone)}
                inputStyle={{ width: '100%', height: '46px' }}
                placeholder="Enter phone number"
              />
            </div>

            <input type="text" name="address" placeholder="Address" required value={formData.address} onChange={handleInputChange} className="border border-gray-300 rounded p-2.5 w-full outline-none focus:border-blue-500" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleInputChange} className="border border-gray-300 rounded p-2.5 w-full outline-none focus:border-blue-500" />
              <select name="country" value={formData.country} onChange={handleInputChange} className="border border-gray-300 rounded p-2.5 w-full outline-none focus:border-blue-500" required>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" name="state" placeholder="State" required value={formData.state} onChange={handleInputChange} className="border border-gray-300 rounded p-2.5 w-full outline-none focus:border-blue-500" />
              <input type="text" name="city" placeholder="City" required value={formData.city} onChange={handleInputChange} className="border border-gray-300 rounded p-2.5 w-full outline-none focus:border-blue-500" />
              <input type="text" name="zipCode" placeholder="Zip Code" required value={formData.zipCode} onChange={handleInputChange} className="border border-gray-300 rounded p-2.5 w-full outline-none focus:border-blue-500" />
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Payment Information</h3>
              <div className="flex gap-2 mb-4">
                 <span className="px-2 py-1 border rounded text-xs font-bold text-blue-800">VISA</span>
                 <span className="px-2 py-1 border rounded text-xs font-bold text-red-600">MasterCard</span>
                 <span className="px-2 py-1 border rounded text-xs font-bold text-blue-500">AMEX</span>
                 <span className="px-2 py-1 border rounded text-xs font-bold text-orange-500">Discover</span>
              </div>
              
              <label className="block text-sm text-gray-700 mb-1">Credit or Debit Card</label>
              <div className="border border-gray-300 rounded p-3 bg-white focus-within:border-blue-500">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                    hidePostalCode: true,
                  }}
                />
              </div>
            </div>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            {success && <p className="text-green-600 text-sm mt-2">{success}</p>}

            <button
              disabled={!stripe || loading}
              className="mt-6 w-full bg-[#6a32a1] hover:bg-[#522480] transition-colors text-white font-semibold py-3 rounded-md"
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </form>
        </div>

        {/* RIGHT – INVOICE */}
        <div>
          <div className="bg-[#0b1043] text-white rounded-t-md px-4 py-2 flex items-center gap-2 font-semibold">
            <span className="bg-white text-[#0b1043] w-6 h-6 flex items-center justify-center rounded text-sm">2</span>
            Billing Invoice
          </div>
          <div className="border border-t-0 border-gray-200 rounded-b-md p-0 shadow-sm">
            <div className="p-4 space-y-3 pb-6 border-b border-dashed border-gray-300">
              <h4 className="font-semibold text-lg">{packageName || "Package Item"}</h4>
              
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Item Price</span>
                <span>{currency}{price || "0.00"}</span>
              </div>
              
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Total ({currency === '$' ? 'USD' : currency === '£' ? 'GBP' : 'Local'})</span>
                <span>{currency}{price || "0.00"}</span>
              </div>
              
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Discount</span>
                <span>-</span>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <input type="text" placeholder="Enter Coupon Code" className="border border-gray-300 rounded p-2.5 w-full outline-none focus:border-blue-500 text-sm" />
              <button className="w-full bg-[#2470ff] hover:bg-blue-600 transition-colors text-white font-semibold py-2.5 rounded text-sm">
                Apply Coupon
              </button>

              <div className="flex items-center justify-between mt-6 pt-4">
                <span className="border border-gray-300 text-gray-500 px-3 py-1 rounded text-xs font-bold uppercase">
                  Secured CHECKOUT
                </span>
                <span className="bg-[#4d5162] text-white px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1">
                  Powered by <strong className="text-sm font-bold tracking-tight">stripe</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    </>
  );
}
