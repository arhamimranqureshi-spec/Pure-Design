"use client";

import Image from "next/image";
import CheckIcon from "@/public/assets/images/check.png"; // Replace with actual icon
import { useRouter } from "next/navigation";


import { useGeo } from "../context/GeoContext";
import Link from "next/link";

export default function AppDevelopmentPricingSection() {
  const { currencySymbol } = useGeo();
  const router = useRouter();

  const handleOrder = (plan: any) => {
    sessionStorage.setItem(
      "checkoutData",
      JSON.stringify({
        title: plan.title,
        price: plan.price,
        description: plan.description,
        currency: currencySymbol,
      })
    );

    router.push("/checkout");
  };

  const plans = [
    {
      title: "Basic Package",
      price: "2,560",
      oldPrice: "4,160",
      description: "Ideal for businesses looking for basic app development and branding.",
      features: [
        "50% Upfront to get started with the work immediately",
        "No. of Features Up to 7",
        "Wireframing",
        "Intuitive UI/UX (Custom App Design)",
        "Social Media Integration",
        "App Testing",
        "Publishing on App Store",
        "Paid bug support (350/m)",
        "Native iOS OR Android app",
      ],
      popular: false,
    },
    {
      title: "Standard Package",
      price: "4,160",
      oldPrice: "6,450",
      description: "For businesses looking for more features and extended support.",
      features: [
        "50% Upfront to get started with the work immediately",
        "No. of Features Up to 10",
        "Wireframing",
        "Intuitive UI/UX (Custom App Design)",
        "Social Media Integration",
        "App Testing",
        "Ads Network Integration",
        "Firebase Integration",
        "In-App Purchase",
        "Publishing on App Store",
        "1 Month free bug support",
        "Native iOS OR Android app",
        "Cross-Platform (Hybrid) On Demand",
        "Push Notifications",
        "Messaging API Integration (Live Chat)",
        "Google Maps Integration",
        "Web APIs and Online Database",
        "CrashAnalytics Integration",
      ],
      popular: false,
    },
    {
      title: "Professional Package",
      price: "10,000",
      oldPrice: "18,000",
      description: "For enterprises that need extensive features and long-term support.",
      features: [
        "25% Upfront to get started with the work immediately",
        "No. of Features Up to 25",
        "Wireframing",
        "Intuitive UI/UX (Custom App Design)",
        "Social Media Integration",
        "App Testing",
        "Ads Network Integration",
        "Firebase Integration",
        "In-App Purchase",
        "Publishing on App Store",
        "App Store Optimization",
        "3 Month free bug support",
        "Native iOS OR Android app",
        "Cross-Platform (Hybrid) On Demand",
        "Push Notifications",
        "Messaging API Integration (Live Chat)",
        "Regular App Update",
        "Google Maps Integration",
        "Admin Panel",
        "Data Import/Export",
        "Web APIs and Online Database",
        "Picture Gallery/Product Display/Showcase Services On Demand",
        "Product Categories/Sub Categories",
        "CrashAnalytics Integration",
        "Audio/Video Streaming",
        "Payment Gateways Integration",
        "Shopping Cart",
        "3rd Party APIs Integrations",
      ],
      popular: false,
    },
  ];

  return (
    <section className="pricing-section w-full py-20 flex flex-col items-center">
      <h2 className="title2 text-center mb-16">
        Our Packages to Fit <span>Your Needs</span>
      </h2>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full max-w-[1400px]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card relative bg-white rounded-[25px] shadow-md p-10 pt-16 text-center {
              plan.popular ? "popular-card" : ""
            }`}
          >
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <h3 className="plan-title">{plan.title}</h3>

            <div className="price mb-4">
              <span className="old-price line-through text-black-400 mr-2">{currencySymbol}{plan.oldPrice}</span>
              <span className="current-price text-2xl font-bold">{currencySymbol}{plan.price}</span>
            </div>

            <p className="body_content mb-6">{plan.description}</p>

            <ul className="features-list text-left mt-4 space-y-2 max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-black-300 scrollbar-track-black-100 p-2">
              {plan.features.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text">
                  {/* Optionally, you can include a checkmark icon */}
                  {/* <Image src={CheckIcon} alt="check" className="w-5 h-5" /> */}
                  {item}
                </li>
              ))}
            </ul>

            {/* <button className="pricing-btn mt-6">Order Now</button> */}
            {/* <Link
              href="/get-quote" className="pricing-btn mt-6">
              Order Now
            </Link> */}
            {/* <Link
              href={{
                pathname: "/checkout",
                query: {
                  title: plan.title,
                  price: plan.price,
                  currency: currencySymbol,
                  description: plan.description,
                },
              }}
              className="pricing-btn mt-6"
              >
              Order Now
            </Link> */}
            <button
              onClick={() => handleOrder(plan)}
              className="pricing-btn mt-6"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
