"use client";

import React from "react";

type IndustryItem = {
  name: string;
  icon: React.ReactNode;
};

/* ================= ICON SIZE ================= */
const iconClass = "w-20 h-20";

/* ================= ICONS ================= */

const LocalBizIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass}>
    <path d="M32 10c8 0 14 6 14 14 0 10-14 26-14 26S18 34 18 24c0-8 6-14 14-14z" />
    <circle cx="32" cy="24" r="4" />
  </svg>
);

const StartupsIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass}>
    <path d="M32 8l8 16-8 4-8-4 8-16z" />
    <path d="M28 28v12l4 4 4-4V28" />
    <circle cx="32" cy="44" r="2" />
  </svg>
);

const AgencyIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass}>
    <rect x="10" y="18" width="44" height="28" rx="4" />
    <path d="M18 46v6M46 46v6" />
    <path d="M22 26h20M22 32h20" />
  </svg>
);

const ServiceProviderIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass}>
    <circle cx="32" cy="22" r="8" />
    <path d="M16 52c2-10 10-14 16-14s14 4 16 14" />
  </svg>
);

const ConsultantIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass}>
    <circle cx="22" cy="22" r="6" />
    <circle cx="42" cy="22" r="6" />
    <path d="M12 52c2-8 8-10 10-10s8 2 10 10M32 42c2-8 8-10 10-10s8 2 10 10" />
  </svg>
);

const PersonalBrandIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass}>
    <circle cx="32" cy="20" r="6" />
    <path d="M20 54c2-10 8-14 12-14s10 4 12 14" />
  </svg>
);

const GrowthIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass}>
    <path d="M12 52h40" />
    <rect x="16" y="36" width="6" height="16" />
    <rect x="28" y="28" width="6" height="24" />
    <rect x="40" y="20" width="6" height="32" />
  </svg>
);

const UpgradeIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass}>
    <path d="M32 10v34" />
    <path d="M24 22l8-8 8 8" />
    <rect x="18" y="46" width="28" height="6" rx="2" />
  </svg>
);

/* ================= DATA (FIXED 8 ITEMS) ================= */

const industries: IndustryItem[] = [
  { name: "Local Businesses", icon: LocalBizIcon },
  { name: "Startups", icon: StartupsIcon },
  { name: "Agencies", icon: AgencyIcon },
  { name: "Service Providers", icon: ServiceProviderIcon },
  { name: "Consultants", icon: ConsultantIcon },
  { name: "Personal Brands", icon: PersonalBrandIcon },
  { name: "Growing Companies", icon: GrowthIcon },
  { name: "Website Upgrade Seekers", icon: UpgradeIcon },
];

/* ================= COMPONENT ================= */

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <style>{`
        .industries-section {
          background: #fff;
          padding: 80px 40px;
          font-family: 'Segoe UI', sans-serif;
        }

        .industries-header {
          text-align: center;
          margin-bottom: 60px;
        }


        .industries-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 1100px;
          margin: auto;
          border-top: 1px solid #e2e8f0;
          border-left: 1px solid #e2e8f0;
        }

        .industry-card {
          padding: 40px 20px;
          border-right: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          text-align: center;
          cursor: pointer;
          transition: 0.25s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .industry-card:hover {
          background: #F75126;
          color: #fff;
        }

        .industry-name {
          font-weight: 600;
          font-size: 14px;
        }

        .industry-card svg {
          display: block;
        }

        @media (max-width: 900px) {
          .industries-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="industries-header">
         <h2 className="reveal-up title2 text-center lg:mb-6 mb-4">
          Proven{" "}<span className="relative inline-block">Expertise</span>Across Fields
        </h2>
          <p className="reveal-up text text-center lg:mb-16 mb-8 max-w-4xl mx-auto">
          We deliver customized digital solutions across multiple industries.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((item) => (
          <div key={item.name} className="industry-card">
            {item.icon}
            <div className="industry-name">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}