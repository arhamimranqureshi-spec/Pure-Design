"use client";

import Image from "next/image";
import CheckIcon from "@/public/assets/images/check.png"; // Replace with actual icon
import { useGeo } from "../context/GeoContext";
import { useRouter } from "next/navigation";

export default function ContentWrititngPricingSection() {
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
      title: "Basic Plan",
      price: "249",
      oldPrice: "415",
      description: "Ideal for those who need essential professional copywriting services for their website.",
      features: [
        "1 Page Professional Copywriting Service",
        "Creative & Well-Written by 1 Professional Copywriter",
        "Industry Specified Expert Copywriter",
        "300 Words Per Page",
        "5 Revisions",
        "3 to 4 Business Days Rotation",
        "According To Your Exact Requirements",
        "Proofing by our in-house experts",
        "100% Original Content",
        "100% Approval Assurance",
        "30 Days Refund Warranty",
      ],
      popular: false,
    },
    {
      title: "Starter Plan",
      price: "499",
      oldPrice: "1,119",
      description: "For businesses looking for more comprehensive copywriting services for their site.",
      features: [
        "5 Pages Professional Copywriting Service",
        "Creative & Well-Written by 2 Professional Copywriters",
        "Industry Specified Expert Copywriters",
        "300 Words Per Page",
        "10 Revisions",
        "5 to 7 Business Days Rotation",
        "According To Your Exact Requirements",
        "Proofing by our in-house experts",
        "FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description.",
        "SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner",
        "100% Original Content",
        "100% Approval Assurance",
        "30 Days Refund Warranty",
      ],
      popular: false,
    },
    {
      title: "Professional Plan",
      price: "849",
      oldPrice: "2,119",
      description: "For businesses requiring professional, high-volume content creation.",
      features: [
        "10 Pages Professional Copywriting Service",
        "Creative & Well-Written by 2 Professional Copywriters",
        "Industry Specified Expert Copywriters",
        "300 Words Per Page",
        "Unlimited Revisions",
        "7 to 10 Business Days Rotation",
        "According To Your Exact Requirements",
        "Proofing by our in-house experts",
        "FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description.",
        "SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner",
        "100% Original Content",
        "100% Approval Assurance",
        "30 Days Refund Warranty",
      ],
      popular: false,
    },
    {
      title: "Identity Plan",
      price: "1,849",
      oldPrice: "4,619",
      description: "For large projects with multiple pages and high-quality content tailored to your needs.",
      features: [
        "Up to 20 Pages Professional Copywriting Service",
        "Creative & Well-Written by 3 Professional Copywriters",
        "Industry Specified Expert Copywriters",
        "300 Words Per Page",
        "Unlimited Revisions",
        "7 to 10 Business Days Rotation",
        "According To Your Exact Requirements",
        "Proofing by our in-house experts",
        "FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description.",
        "SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner",
        "100% Original Content",
        "100% Approval Assurance",
        "30 Days Refund Warranty",
      ],
      popular: false,
    },
    {
      title: "Article Plan",
      price: "149",
      oldPrice: "369",
      description: "For businesses needing single-page articles with professional, SEO-optimized writing.",
      features: [
        "1 Creative, Fresh & Well-Written Article",
        "By 1 Professional Copywriter",
        "Industry Specified Expert Copywriter",
        "400 Words Per Page",
        "3 to 5 Business Days Rotation",
        "5 Revisions",
        "According To Your Exact Requirements",
        "Written on Your Specified Topic/Keyword",
        "Proofing by our in-house experts",
        "Free Submission on any article marketing directories/blog (If required)",
        "SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner",
        "100% Original Content",
        "100% Approval Assurance",
        "30 Days Refund Warranty",
      ],
      popular: false,
    },
    {
      title: "Blog Plan",
      price: "129",
      oldPrice: "319",
      description: "For businesses looking for regular blog articles to engage and attract more visitors.",
      features: [
        "1 Creative, Fresh & Well-Written Article",
        "By 1 Professional Copywriter",
        "Industry Specified Expert Copywriter",
        "400 Words Per Page",
        "3 to 5 Business Days Rotation",
        "5 Revisions",
        "According To Your Exact Requirements",
        "Written on Your Specified Topic/Keyword",
        "Proofing by our in-house experts",
        "Free Submission on any article marketing directories/blog (If required)",
        "SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner",
        "100% Original Content",
        "100% Approval Assurance",
        "30 Days Refund Warranty",
      ],
      popular: false,
    },
  ];

  return (
    <section className="pricing-section w-full py-20 flex flex-col items-center">
      <h2 className="title2 text-center mb-16">
        Our Copywriting Packages to Fit <span>Your Needs</span>
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
                  {/* Optionally, you can display a check icon */}
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
