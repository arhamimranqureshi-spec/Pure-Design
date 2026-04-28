"use client";
import { useState } from "react";
import { useGeo } from "@/app/context/GeoContext";
import { useRouter } from "next/navigation";

export default function MasterPricingSection() {
  const { currencySymbol } = useGeo();
  const router = useRouter();
  
  // Tab State
  const [activeTab, setActiveTab] = useState("Web Development");

  const handleOrder = (plan: any) => {
    sessionStorage.setItem(
      "checkoutData",
      JSON.stringify({
        category: activeTab,
        title: plan.title,
        price: plan.price,
        description: plan.description || plan.features[0],
        currency: currencySymbol,
      })
    );
    router.push("/checkout");
  };

  const sharedAccent = {
    accent: "#F75126",
    accentLight: "rgba(247,81,38,0.08)",
    accentGlow: "rgba(247,81,38,0.3)",
  };

  const allPlans: any = {
    "Web Development": [
      { title: "Silver", tier: "Dev", price: "249", oldPrice: "399", icon: "🥈", popular: false, features: ["3 custom pages", "Mobile-optimized", "Appointment booking", "10 days delivery"] },
      { title: "Gold", tier: "Dev", price: "499", oldPrice: "699", icon: "🥇", popular: true, features: ["5 custom pages", "SEO-ready blog", "Everything in Silver", "Unlimited revisions"] },
      { title: "Platinum", tier: "Dev", price: "799", oldPrice: "1099", icon: "💎", popular: false, features: ["7+ custom pages", "Admin panel", "Advanced SEO", "1 month support"] },
      { title: "Diamond", tier: "E-Com", price: "1499", oldPrice: "1999", icon: "🚀", popular: false, features: ["Unlimited pages", "Shopping cart", "Payment gateway", "Admin panel"] },
    ],
    "App Development": [
      { title: "Basic", tier: "App", price: "2,560", oldPrice: "4,160", icon: "📱", popular: false, features: ["Up to 7 Features", "Wireframing", "UI/UX Design", "App Store Publishing", "Native iOS or Android"] },
      { title: "Standard", tier: "App", price: "4,160", oldPrice: "6,450", icon: "⚙️", popular: true, features: ["Up to 10 Features", "Firebase Integration", "In-App Purchase", "Push Notifications", "Live Chat API"] },
      { title: "Professional", tier: "App", price: "10,000", oldPrice: "18,000", icon: "🏢", popular: false, features: ["Up to 25 Features", "Admin Panel", "Payment Gateways", "Audio/Video Streaming", "3 Month Support"] },
    ],
    "Branding": [
      { title: "Startup", tier: "Brand", price: "99", oldPrice: "117", icon: "🎨", popular: false, features: ["Business Card", "Letterhead", "Email Signature", "Social Banners", "Logo Watermark"] },
      { title: "Classic", tier: "Brand", price: "139", oldPrice: "247", icon: "🌟", popular: false, features: ["Everything in Startup", "Favicon Design", "T-Shirt Design", "Cap/Hat Design", "Invoice Design"] },
      { title: "Premium", tier: "Brand", price: "249", oldPrice: "498", icon: "🏆", popular: true, features: ["Everything in Classic", "Bag Design", "Signage Design", "Flyer Design", "Premium Concepts"] },
      { title: "Unlimited", tier: "Brand", price: "299", oldPrice: "598", icon: "♾️", popular: false, features: ["Car Wrap Design", "PPT Design", "Menu Design", "Mug Design", "Unlimited Assets"] },
    ],
    "Social Media": [
      { title: "Small Business", tier: "SMM", price: "349", oldPrice: "0", icon: "📱", popular: false, features: ["12 Posts Per Month", "FB & Instagram", "Cosmetics Setup", "Monthly Report"] },
      { title: "Medium Business", tier: "SMM", price: "699", oldPrice: "0", icon: "📈", popular: true, features: ["24 Posts Per Month", "Ads Management", "Community Mgmt", "Reputation Mgmt"] },
      { title: "Large Business", tier: "SMM", price: "1499", oldPrice: "0", icon: "🚀", popular: false, features: ["36 Posts Per Month", "All Platforms", "Chatbot Integration", "SEO Blog Posts"] },
    ],
    "SEO": [
      { title: "Silver", tier: "SEO", price: "249", oldPrice: "0", icon: "🔍", popular: false, features: ["10 Keywords", "On-page SEO", "GBP Optimization", "Monthly Report"] },
      { title: "Gold", tier: "SEO", price: "499", oldPrice: "0", icon: "🥇", popular: true, features: ["25+ Keywords", "Blog Strategy", "Competitor Analysis", "Bi-weekly Calls"] },
      { title: "Platinum", tier: "SEO", price: "799", oldPrice: "0", icon: "💎", popular: false, features: ["50+ Keywords", "Schema Markup", "Link Building", "Technical Audit"] },
    ],
    "Content Writing": [
      { title: "Starter", tier: "Writing", price: "499", oldPrice: "1,119", icon: "✍️", popular: false, features: ["5 Pages Copy", "300 Words/Page", "SEO Friendly", "100% Original Content"] },
      { title: "Professional", tier: "Writing", price: "849", oldPrice: "2,119", icon: "📝", popular: true, features: ["10 Pages Copy", "Unlimited Revisions", "Meta Details", "Approval Assurance"] },
      { title: "Article/Blog", tier: "Writing", price: "129", oldPrice: "319", icon: "📄", popular: false, features: ["1 Fresh Article", "400 Words", "Keyword Optimized", "30 Days Warranty"] },
    ]
  };

  const categories = Object.keys(allPlans);

  return (
    <>
      <style jsx>{`
        .pricing-wrap { width: 100%; padding: 80px 16px; background: #fafafa; position: relative; overflow: hidden; }
        .pricing-wrap::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(247,81,38,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(247,81,38,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
        
        .header-section { text-align: center; margin-bottom: 50px; position: relative; z-index: 10; }
        .pricing-eyebrow { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #F75126; background: rgba(247,81,38,0.08); border: 1px solid rgba(247,81,38,0.18); padding: 6px 16px; border-radius: 100px; margin-bottom: 20px; }

        .tabs-container { display: flex; justify-content: center; gap: 12px; margin-bottom: 40px; flex-wrap: wrap; position: relative; z-index: 10; }
        .tab-btn { padding: 12px 24px; border-radius: 50px; border: 1.5px solid #e5e7eb; background: #fff; color: #6b7280; font-weight: 700; cursor: pointer; transition: 0.3s cubic-bezier(.22,1,.36,1); font-size: 14px; }
        .tab-btn.active { background: #F75126; color: #fff; border-color: #F75126; box-shadow: 0 10px 20px -5px rgba(247,81,38,0.4); transform: translateY(-2px); }

        .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; max-width: 1400px; margin: 0 auto; position: relative; z-index: 1; }
        
        .p-card { position: relative; background: #fff; border-radius: 24px; border: 1.5px solid #e5e7eb; padding: 40px 28px; display: flex; flex-direction: column; transition: transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s cubic-bezier(.22,1,.36,1), border-color 0.3s ease; overflow: hidden; }
        .p-card::before { content: ''; position: absolute; inset: 0; background: var(--card-accent-light); opacity: 0; transition: opacity 0.4s ease; border-radius: inherit; pointer-events: none; }
        .p-card:hover { transform: translateY(-12px); border-color: var(--card-accent); box-shadow: 0 30px 60px -10px var(--card-glow), 0 0 0 1.5px var(--card-accent); }
        .p-card:hover::before { opacity: 1; }

        .card-blob { position: absolute; top: -40px; right: -40px; width: 110px; height: 110px; border-radius: 50%; background: var(--card-accent); opacity: 0.07; transition: 0.4s ease; pointer-events: none; }
        .p-card:hover .card-blob { opacity: 0.14; transform: scale(1.4); }

        .popular-tag { position: absolute; top: 20px; right: 20px; background: var(--card-accent); color: #fff; font-size: 10px; font-weight: 800; padding: 4px 12px; border-radius: 100px; letter-spacing: 0.1em; text-transform: uppercase; z-index: 2; }
        .card-icon { font-size: 36px; margin-bottom: 16px; display: block; transition: transform 0.35s cubic-bezier(.34,1.56,.64,1); }
        .p-card:hover .card-icon { transform: scale(1.2) rotate(-5deg); }

        .card-tier { font-size: 10px; font-weight: 700; color: var(--card-accent); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 4px; }
        .card-title { font-size: 26px; font-weight: 900; color: #1a1a2e; margin: 0 0 20px; line-height: 1.1; }
        
        .price-block { display: flex; align-items: flex-end; gap: 4px; margin-bottom: 12px; }
        .price-currency { font-size: 18px; font-weight: 700; color: var(--card-accent); margin-bottom: 6px; }
        .price-amount { font-size: 42px; font-weight: 900; color: #1a1a2e; letter-spacing: -1px; line-height: 1; }
        .old-price { font-size: 15px; color: #9ca3af; text-decoration: line-through; margin-left: 8px; margin-bottom: 8px; font-weight: 500; }

        .card-divider { height: 1.5px; background: linear-gradient(90deg, var(--card-accent) 0%, transparent 100%); margin: 20px 0; opacity: 0.2; }

        .features { list-style: none; padding: 0; margin: 0 0 30px; flex: 1; display: flex; flex-direction: column; gap: 12px; }
        .features li { display: flex; align-items: flex-start; gap: 10px; font-size: 13.5px; color: #4b5563; line-height: 1.5; }
        .feature-dot { flex-shrink: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--card-accent-light); border: 1.5px solid var(--card-accent); display: flex; align-items: center; justify-content: center; margin-top: 2px; }
        .feature-dot::after { content: ''; width: 5px; height: 5px; background: var(--card-accent); border-radius: 50%; }

        .card-btn { position: relative; width: 100%; padding: 15px; border-radius: 14px; font-weight: 700; cursor: pointer; border: 2px solid var(--card-accent); background: transparent; color: var(--card-accent); transition: 0.3s; z-index: 1; overflow: hidden; }
        .card-btn::before { content: ''; position: absolute; inset: 0; background: var(--card-accent); transform: scaleX(0); transform-origin: left; transition: transform 0.35s cubic-bezier(.22,1,.36,1); z-index: -1; }
        .card-btn:hover { color: #fff; transform: translateY(-2px); box-shadow: 0 10px 20px var(--card-glow); }
        .card-btn:hover::before { transform: scaleX(1); }
        .is-popular .card-btn { background: var(--card-accent); color: #fff; }

        .card-number { position: absolute; bottom: -10px; left: 16px; font-size: 90px; font-weight: 900; color: var(--card-accent); opacity: 0.04; line-height: 1; pointer-events: none; user-select: none; }
      `}</style>

      <section className="pricing-wrap">
        <div className="header-section">
          <span className="pricing-eyebrow">Flexible Plans</span>
          <h2 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#1a1a2e'}}>
            Solutions for <span style={{color: '#F75126'}}>Every Stage</span>
          </h2>
          <p style={{color: '#6b7280', marginTop: '10px', fontSize: '16px'}}>Pick a plan that aligns with your business goals.</p>
        </div>

        <div className="tabs-container">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="cards-grid">
          {allPlans[activeTab].map((plan: any, index: number) => (
            <div 
              key={index} 
              className={`p-card ${plan.popular ? "is-popular" : ""}`}
              style={{
                ["--card-accent" as any]: sharedAccent.accent,
                ["--card-accent-light" as any]: sharedAccent.accentLight,
                ["--card-glow" as any]: sharedAccent.accentGlow,
              }}
            >
              <div className="card-blob" />
              <span className="card-number">0{index + 1}</span>
              {plan.popular && <span className="popular-tag">Most Popular</span>}
              
              <span className="card-icon">{plan.icon}</span>
              <p className="card-tier">{plan.tier}</p>
              <h3 className="card-title">{plan.title}</h3>
              
              <div className="price-block">
                <span className="price-currency">{currencySymbol}</span>
                <span className="price-amount">{plan.price}</span>
                {plan.oldPrice !== "0" && (
                  <span className="old-price">{currencySymbol}{plan.oldPrice}</span>
                )}
              </div>

              <div className="card-divider" />
              
              <ul className="features">
                {plan.features.map((feat: string, i: number) => (
                  <li key={i}><div className="feature-dot" />{feat}</li>
                ))}
              </ul>

              <button className="card-btn" onClick={() => handleOrder(plan)}>
                Order Now →
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}