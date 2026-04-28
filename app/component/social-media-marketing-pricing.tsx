"use client";

import Image from "next/image";
import CheckIcon from "@/public/assets/images/check.png"; // Replace with actual icon
import { useGeo } from "../context/GeoContext";
import { useRouter } from "next/navigation";

export default function SocialMediaMarketingPricingSection() {
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
      title: "Small Business Package",
      price: "349.00",
      oldPrice: "0", // No old price for this package
      description: "For small businesses looking to get started with social media marketing.",
      features: [
        "Prior Analysis",
        "Social Media Strategy",
        "Social Media Audit",
        "Social Recommendations",
        "Content Plan Creation",
        "12 Posts Per Month",
        "5 Graphic Social Posts",
        "03 Stories / Highlights",
        "02 Carousel Posts",
        "Social Platforms Supported: Facebook, Instagram",
        "Monthly Social Posts Scheduling",
        "Social Pages Cosmetics (Cover Photo, About Section, Display Picture, etc.)",
        "Facebook Business Manager Setup",
        "Facebook Pixel Integration",
        "Daily Monitoring Of Social Assets",
        "Daily Monitoring Of Boosted Posts",
        "Dedicated Project Manager",
        "24 HR Support, 5 Days A Week",
        "Monthly Progress Report",
      ],
      popular: false,
    },
    {
      title: "Medium Business Package",
      price: "699.00",
      oldPrice: "0", // No old price for this package
      description: "For medium-sized businesses that need a stronger social media presence.",
      features: [
        "Prior Analysis",
        "Social Media Strategy",
        "Social Media Audit",
        "Social Recommendations",
        "Content Plan Creation",
        "24 Posts Per Month",
        "10 Graphic Social Posts",
        "05 Stories / Highlights",
        "03 Carousel Posts",
        "Social Platforms Supported: Facebook, Instagram, Twitter",
        "Social Community Management (Query + Comment Responses)",
        "Social Pages Cosmetics (Cover Photo, About Section, Display Picture, etc.)",
        "Facebook Business Manager Setup",
        "Facebook Pixel Integration",
        "Daily Monitoring Of Social Assets",
        "Daily Monitoring Of Boosted Posts",
        "Reputation Management (Reviews, Q/A)",
        "Facebook Shop Setup",
        "Spam Monitoring",
        "Social Ads Management (2 Platforms)",
        "2 Social Ad Platforms, 2 Campaigns per Month, 5 Adsets per Month",
        "Dedicated Ads Expert",
        "Dedicated Project Manager",
        "24 HR Support, 5 Days A Week",
        "Monthly Progress Report",
      ],
      popular: false,
    },
    {
      title: "Large Business Package",
      price: "1499.00",
      oldPrice: "0", // No old price for this package
      description: "For large businesses needing a comprehensive social media and ad management solution.",
      features: [
        "Prior Analysis",
        "Social Media Strategy",
        "Social Media Audit",
        "Social Recommendations",
        "Content Plan Creation",
        "36 Posts Per Month",
        "20 Graphic Social Posts",
        "10 Stories / Highlights",
        "07 Carousel Posts",
        "03 GIFS Post",
        "02 Articles / SEO Blog Posts",
        "Social Platforms Supported: Facebook, Instagram, Linkedin, Twitter, Pinterest",
        "Social Community Management (Query + Comment Responses)",
        "Social Pages Cosmetics (Cover Photo, About Section, Display Picture, etc.)",
        "Facebook Business Manager Setup",
        "Facebook Pixel Integration",
        "Daily Monitoring Of Social Assets",
        "Daily Monitoring Of Boosted Posts",
        "Reputation Management (Reviews, Q/A)",
        "Facebook Shop Setup",
        "Target Page Likes & Followers",
        "Chatbot Integration",
        "Spam Monitoring",
        "Social Ads Management (All Platforms)",
        "Unlimited Campaigns per Month, Unlimited Adsets per Month",
        "All Ad Objectives Supported",
        "Detailed Campaign Monitoring",
        "Daily Campaign Optimization",
        "Ad Spend (Budget Required)",
        "Dedicated Ads Expert",
        "Dedicated Project Manager",
        "24 HR Support, 5 Days A Week",
        "Monthly Progress Report",
      ],
      popular: false,
    },
  ];

  return (
    <section className="pricing-section w-full py-20 flex flex-col items-center">
      <h2 className="title2 text-center mb-16">
        Our Social Media Marketing Packages to Fit <span>Your Business</span>
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
              <span className="old-price line-through text-black-400 mr-2">{currencySymbol}{plan.oldPrice !== '0' ? plan.oldPrice : ''}</span>
              <span className="current-price text-2xl font-bold">{currencySymbol}{plan.price}</span>
              {plan.oldPrice && plan.oldPrice !== '0' && <span className="discount">/month</span>}
            </div>

            <p className="body_content mb-6">{plan.description}</p>

            <ul className="features-list text-left mt-4 space-y-2 max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-black-300 scrollbar-track-black-100 p-2">
              {plan.features.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text">
                  {/* If you want to display a check icon */}
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
