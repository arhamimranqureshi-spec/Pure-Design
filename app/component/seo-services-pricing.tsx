"use client";
import { useGeo } from "../context/GeoContext";
import { useRouter } from "next/navigation";

export default function SEOPricingSection() {
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

  // Diamond accent applied to ALL cards
  const sharedAccent = {
    accent: "#F75126",
    accentLight: "rgba(247,81,38,0.08)",
    accentGlow: "rgba(247,81,38,0.3)",
  };

  const plans = [
    {
      title: "Silver",
      tier: "SEO",
      price: "249",
      oldPrice: "0",
      description: "For local businesses just getting started online.",
      ...sharedAccent,
      icon: "🥈",
      features: [
        "Keyword research for up to 10 keywords",
        "On-page optimization (meta tags, headings, URLs)",
        "Google Business Profile setup/optimization",
        "Basic content recommendations",
        "Monthly performance report",
        "Delivered in 2 weeks",
      ],
      popular: false,
    },
    {
      title: "Gold",
      tier: "SEO",
      price: "499",
      oldPrice: "0",
      description: "For growing businesses that need steady traffic & leads.",
      ...sharedAccent,
      icon: "🥇",
      features: [
        "Everything in Silver plus:",
        "Keyword targeting for 25+ keywords",
        "Blog/content strategy (2 posts/month)",
        "Local citations & directory submissions",
        "Google Analytics & Search Console setup",
        "Competitor analysis with actionable insights",
        "Bi-weekly progress calls with project manager",
        "Delivered in 2 weeks, updated monthly",
      ],
      popular: true,
    },
    {
      title: "Platinum",
      tier: "SEO",
      price: "799",
      oldPrice: "0",
      description: "For established businesses targeting multiple regions.",
      ...sharedAccent,
      icon: "💎",
      features: [
        "Everything in Gold plus:",
        "Keyword targeting for 50+ keywords",
        "Advanced on-page SEO (schema markup)",
        "Link-building outreach (quality backlinks)",
        "Landing page creation for service areas",
        "Full technical audit + speed optimization",
        "Dedicated SEO strategist + weekly meetings",
      ],
      popular: false,
    },
    {
      title: "Diamond",
      tier: "SEO",
      price: "Custom Pricing",
      oldPrice: "0",
      description: "For businesses with national or global reach.",
      ...sharedAccent,
      icon: "🚀",
      features: [
        "Everything in Platinum plus:",
        "Multi-language or multi-location SEO",
        "Advanced content marketing campaigns",
        "PR + authority link-building",
        "Conversion rate optimization support",
        "Bespoke dashboards + priority support",
        "Tailored strategy & dedicated team",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <style jsx>{`
        .pricing-wrap {
          width: 100%;
          padding: 80px 16px;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }
        .pricing-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(247,81,38,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(247,81,38,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .pricing-header {
          text-align: center;
          margin-bottom: 64px;
          position: relative;
          z-index: 1;
        }
        .pricing-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #F75126;
          background: rgba(247,81,38,0.08);
          border: 1px solid rgba(247,81,38,0.18);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .pricing-title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 900;
          color: #1a1a2e;
          line-height: 1.15;
          margin: 0 auto 16px;
          max-width: 640px;
        }
        .pricing-title span { color: #F75126; }
        .pricing-sub {
          font-size: 16px;
          color: #6b7280;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1380px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 1100px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px)  { .cards-grid { grid-template-columns: 1fr; } }

        .p-card {
          position: relative;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #e5e7eb;
          padding: 36px 28px 32px;
          display: flex;
          flex-direction: column;
          cursor: default;
          transition:
            transform 0.4s cubic-bezier(.22,1,.36,1),
            box-shadow 0.4s cubic-bezier(.22,1,.36,1),
            border-color 0.3s ease;
          overflow: hidden;
        }
        .p-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--card-accent-light);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: inherit;
          pointer-events: none;
        }
        .p-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 30px 60px -10px var(--card-glow),
            0 0 0 1.5px var(--card-accent);
          border-color: var(--card-accent);
        }
        .p-card:hover::before { opacity: 1; }

        .p-card.is-popular {
          border-color: var(--card-accent);
          box-shadow: 0 8px 40px -8px var(--card-glow);
        }

        .card-blob {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: var(--card-accent);
          opacity: 0.07;
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
        }
        .p-card:hover .card-blob { opacity: 0.14; transform: scale(1.4); }

        .popular-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: var(--card-accent);
          color: #fff;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .card-icon {
          font-size: 32px;
          margin-bottom: 16px;
          display: block;
          line-height: 1;
          transition: transform 0.35s cubic-bezier(.34,1.56,.64,1);
        }
        .p-card:hover .card-icon { transform: scale(1.2) rotate(-5deg); }

        .card-tier {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--card-accent);
          margin-bottom: 4px;
        }
        .card-title {
          font-size: 26px;
          font-weight: 900;
          color: #1a1a2e;
          margin: 0 0 20px;
          line-height: 1.1;
        }

        .price-block {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          margin-bottom: 12px;
        }
        .price-currency {
          font-size: 18px;
          font-weight: 700;
          color: var(--card-accent);
          line-height: 1;
          margin-bottom: 6px;
        }
        .price-amount {
          font-size: 42px;
          font-weight: 900;
          color: #1a1a2e;
          line-height: 1;
          letter-spacing: -2px;
        }
        .price-amount.is-custom {
          font-size: 22px;
          letter-spacing: -0.5px;
        }
        .price-period {
          font-size: 13px;
          color: #9ca3af;
          margin-bottom: 8px;
        }

        .card-divider {
          height: 1.5px;
          background: linear-gradient(90deg, var(--card-accent) 0%, transparent 100%);
          border-radius: 2px;
          margin: 16px 0;
          opacity: 0.25;
          transition: opacity 0.3s;
        }
        .p-card:hover .card-divider { opacity: 0.6; }

        .card-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #374151;
          line-height: 1.5;
        }
        .feature-dot {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--card-accent-light);
          border: 1.5px solid var(--card-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          transition: transform 0.3s ease;
        }
        .p-card:hover .feature-dot { transform: scale(1.1); }
        .feature-dot::after {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--card-accent);
        }

        .card-btn {
          display: block;
          width: 100%;
          padding: 14px 20px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-align: center;
          cursor: pointer;
          border: 2px solid var(--card-accent);
          background: transparent;
          color: var(--card-accent);
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
          z-index: 0;
        }
        .card-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--card-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(.22,1,.36,1);
          z-index: -1;
        }
        .card-btn:hover { color: #fff; transform: translateY(-2px); box-shadow: 0 8px 24px -4px var(--card-glow); }
        .card-btn:hover::before { transform: scaleX(1); }
        .card-btn:active { transform: scale(0.97); }

        .is-popular .card-btn { background: var(--card-accent); color: #fff; }
        .is-popular .card-btn::before { transform: scaleX(1); filter: brightness(1.1); }
        .is-popular .card-btn:hover { box-shadow: 0 12px 30px -6px var(--card-glow); }

        .card-number {
          position: absolute;
          bottom: -10px;
          left: 16px;
          font-size: 90px;
          font-weight: 900;
          color: var(--card-accent);
          opacity: 0.04;
          line-height: 1;
          pointer-events: none;
          transition: opacity 0.4s ease;
          user-select: none;
        }
        .p-card:hover .card-number { opacity: 0.07; }
      `}</style>

      <section className="pricing-wrap">
        <div className="pricing-header">
          <span className="pricing-eyebrow">Transparent Pricing</span>
          <h2 className="pricing-title">
            SEO Packages to Fit <span>Your Needs</span>
          </h2>
          <p className="pricing-sub">
            No hidden fees. No lock-in contracts. Choose the plan that matches your growth stage.
          </p>
        </div>

        <div className="cards-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-card${plan.popular ? " is-popular" : ""}`}
              style={{
                ["--card-accent" as any]: plan.accent,
                ["--card-accent-light" as any]: plan.accentLight,
                ["--card-glow" as any]: plan.accentGlow,
              }}
            >
              <div className="card-blob" />
              <span className="card-number">0{index + 1}</span>
              {plan.popular && <span className="popular-tag">Most Popular</span>}
              <span className="card-icon">{plan.icon}</span>
              <p className="card-tier">{plan.tier}</p>
              <h3 className="card-title">{plan.title}</h3>
              <div className="price-block">
                {plan.price !== "Custom Pricing" && (
                  <span className="price-currency">{currencySymbol}</span>
                )}
                <span className={`price-amount${plan.price === "Custom Pricing" ? " is-custom" : ""}`}>
                  {plan.price === "Custom Pricing" ? "Custom" : plan.price}
                </span>
                {plan.price !== "Custom Pricing" && (
                  <span className="price-period">/mo</span>
                )}
              </div>
              <div className="card-divider" />
              <p className="card-desc">{plan.description}</p>
              <ul className="features">
                {plan.features.map((item, i) => (
                  <li key={i}>
                    <span className="feature-dot" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="card-btn" onClick={() => handleOrder(plan)}>
                {plan.price === "Custom Pricing" ? "Get a Quote →" : "Order Now →"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
