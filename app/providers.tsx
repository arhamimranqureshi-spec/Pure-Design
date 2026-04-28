"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { GeoProvider } from "@/app/context/GeoContext";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <GeoProvider>
            <Elements stripe={stripePromise}>
                {children}
            </Elements>
        </GeoProvider>
    );
}
