"use client";

import React from "react";

type IndustryItem = {
  name: string;
  icon: React.ReactNode;
};

// 🔥 Default icon (tum chaaho to replace kar sakte ho later)
const defaultIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14">
    <circle cx="32" cy="32" r="20" />
  </svg>
);

// 🔥 Type-based data
const industriesData: Record<string, IndustryItem[]> = {
  mobile: [
    "Startups",
    "Small & Medium Businesses",
    "Enterprises",
    "Agencies",
    "E-commerce Brands",
  ].map((name) => ({ name, icon: defaultIcon })),

  web: [
    "Local Businesses",
    "Startups",
    "Agencies",
    "Service Providers",
    "Consultants",
    "Personal Brands",
    "Growing Companies",
    "Website Upgrade Seekers",
  ].map((name) => ({ name, icon: defaultIcon })),

  brand: [
    "Startups",
    "Small & Medium Businesses",
    "Enterprises",
    "Agencies",
    "E-commerce Brands",
  ].map((name) => ({ name, icon: defaultIcon })),

  content: [
    "Startups",
    "Small & Medium Businesses",
    "Enterprises",
    "Agencies",
    "E-commerce Brands",
  ].map((name) => ({ name, icon: defaultIcon })),

  marketing: [
    "Healthcare",
    "eCommerce",
    "Real Estate",
    "FinTech",
    "Travel & Tourism",
    "Education",
    "Tech & SaaS",
    "Logistics",
    "Retail & Lifestyle",
  ].map((name) => ({ name, icon: defaultIcon })),

  seo: [
    "Local Businesses",
    "eCommerce Brands",
    "Startups",
    "Agencies",
    "Service Providers",
    "Consultants",
    "Personal Brands",
    "Growing Companies",
  ].map((name) => ({ name, icon: defaultIcon })),
};

type Props = {
  type: keyof typeof industriesData;
};

export default function IndustriesSection({ type }: Props) {
  const industries = industriesData[type] || [];

  return (
    <section className="industries-section">
      <style>{`
        .industries-section {
          background: #ffffff;
          padding: 80px 40px;
          font-family: 'Segoe UI', sans-serif;
        }

        .industries-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .industries-header h2 {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #1a2e44;
          margin: 0 0 16px 0;
          line-height: 1.2;
        }

        .industries-header h2 span {
          color: #f47c20;
        }

        .industries-header p {
          font-size: 16px;
          color: #555;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 1100px;
          margin: 0 auto;
          border-top: 1px solid #e2e8f0;
          border-left: 1px solid #e2e8f0;
        }

        .industry-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          border-right: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease;
          gap: 16px;
          text-align: center;
        }

        .industry-card:hover {
          background: #f47c20;
        }

        .industry-card:hover .industry-icon,
        .industry-card:hover .industry-name {
          color: #ffffff;
        }

        .industry-icon {
          color: #1a2e44;
          transition: color 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .industry-name {
          font-size: 15px;
          font-weight: 600;
          color: #1a2e44;
          line-height: 1.4;
          transition: color 0.25s ease;
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

          .industries-section {
            padding: 50px 20px;
          }
        }
      `}</style>

      <div className="industries-header">
        <h2>
          Proven <span>Expertise</span> Across Diverse Fields
        </h2>
        <p>
          Our diverse industry experience enables us to offer valuable insights and deliver
          effective, customized solutions to our clients.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((industry) => (
          <div key={industry.name} className="industry-card">
            <div className="industry-icon">{industry.icon}</div>
            <span className="industry-name">{industry.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}