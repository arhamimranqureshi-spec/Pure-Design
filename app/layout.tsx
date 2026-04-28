// 'use client';

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { GeoProvider } from "@/app/context/GeoContext"; // Your GeoProvider if needed

// // Load your Stripe publishable key
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <GeoProvider> {/* Optionally wrap with other providers like GeoProvider */}
//           <Elements stripe={stripePromise}>
//             {children}
//           </Elements>
//         </GeoProvider>
//       </body>
//     </html>
//   );
// }


import Providers from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}