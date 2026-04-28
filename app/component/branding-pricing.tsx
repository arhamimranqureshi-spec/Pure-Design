"use client";

import Image from "next/image";
import CheckIcon from "@/public/assets/images/check.png"; // Replace with actual icon
import { useGeo } from "../context/GeoContext";
import { useRouter } from "next/navigation";

export default function BrandingPricingSection() {
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
      title: "Startup Package",
      price: "99",
      oldPrice: "117",
      description: "Ideal for small businesses or individuals looking for essential branding and design.",
      features: [
        "Business Card Design",
        "Letterhead Design",
        "Envelope Design",
        "MS Word Letterhead",
        "Email Signature Design",
        "Invoice Design",
        "Facebook Banner Design",
        "Youtube Banner Design",
        "Twitter Banner Design",
        "Linkedin Banner Design",
        "Logo Watermark",
      ],
      popular: false,
    },
    {
      title: "Classic Package",
      price: "139",
      oldPrice: "247",
      description: "For businesses looking for more comprehensive branding and social media presence.",
      features: [
        "Business Card Design",
        "Letterhead Design",
        "Envelope Design",
        "MS Word Letterhead",
        "Email Signature Design",
        "Invoice Design",
        "Facebook Banner Design",
        "Youtube Banner Design",
        "Twitter Banner Design",
        "Linkedin Banner Design",
        "Logo Watermark",
        "Favicon Design",
        "Polo/T-Shirt Design",
        "Cap/Hat Design",
      ],
      popular: false,
    },
    {
      title: "Premium Package",
      price: "249",
      oldPrice: "498",
      description: "For established businesses needing an extensive set of branded materials and designs.",
      features: [
        "Business Card Design",
        "Letterhead Design",
        "Envelope Design",
        "MS Word Letterhead",
        "Email Signature Design",
        "Invoice Design",
        "Facebook Banner Design",
        "Youtube Banner Design",
        "Twitter Banner Design",
        "Linkedin Banner Design",
        "Logo Watermark",
        "Favicon Design",
        "Polo/T-Shirt Design",
        "Cap/Hat Design",
        "Bag Design",
        "Signage Design",
        "Flyer Design",
      ],
      popular: false,
    },
    {
      title: "Unlimited Package",
      price: "299",
      oldPrice: "598",
      description: "For businesses needing unlimited branding options with extensive marketing material designs.",
      features: [
        "Business Card Design",
        "Letterhead Design",
        "Envelope Design",
        "MS Word Letterhead",
        "Email Signature Design",
        "Invoice Design",
        "Facebook Banner Design",
        "Youtube Banner Design",
        "Twitter Banner Design",
        "Linkedin Banner Design",
        "Logo Watermark",
        "Favicon Design",
        "Polo/T-Shirt Design",
        "Cap/Hat Design",
        "Bag Design",
        "Signage Design",
        "Flyer Design",
        "Car Wrap/Vinyl Design",
        "PPT Design",
        "Magnet Design",
        "Door Sign Design",
        "Menu Design",
        "Mug/Cup Design",
      ],
      popular: false,
    },
  ];

  return (
    <section className="pricing-section w-full py-20 flex flex-col items-center">
      <h2 className="title2 text-center mb-16">
        Our Packages to Fit <span>Your Budget</span>
      </h2>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 w-full max-w-[1400px]">
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
                  {/* If you want to display check icon */}
                  {/* <Image src={CheckIcon} alt="check" className="w-5 h-5" /> */}
                  {item}
                </li>
              ))}
            </ul>

            <button onClick={() => handleOrder(plan)} className="pricing-btn mt-6">Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
