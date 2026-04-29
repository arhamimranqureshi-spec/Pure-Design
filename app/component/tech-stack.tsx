"use client";
import React from "react";

/* ─── SVG ICONS ─── */
const IcReact = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></svg>;
const IcNext = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 19.5h20L12 2z" /><path d="M12 8v6M9 14l3 3 3-3" /></svg>;
const IcWP = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M17 7.3l-5 13.7-3-7.7-3 7.7-3.7-10" /><path d="M17 7.3c-1.5-1.5-3.5-2.3-5-2.3-1.5 0-3.5.8-5 2.3" /></svg>;
const IcShopify = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 7l-5-2-4 2-4-2-5 2v10l5 2 4-2 4 2 5-2V7z" /></svg>;
const IcNode = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L4.5 6.5v11L12 22l7.5-4.5v-11L12 2z" /><path d="M12 16v-8M9 11l3 3 3-3" /></svg>;
const IcTailwind = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12s-3-3-9-3 9 9 9 9 3-3 9-3-9-9-9-9z" /></svg>;
const IcFlutter = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2L4 12l10 10 7-7-10-10z" /></svg>;
const IcFramer = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h14v7l-7 7-7-7V3z" /></svg>;
const IcGAds = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg>;
const IcFB = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" /></svg>;
const IcInsta = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" /></svg>;
const IcSEO = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 7v4l3 2" /></svg>;
const IcGSC = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12l-10 5-10-5 10-5 10 5zM2 17l10 5 10-5M2 7l10 5 10-5" /></svg>;
const IcAnalytics = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>;
const IcGeneric = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="4" /></svg>;

interface TechItem {
  name: string;
  category: string; 
  Icon: () => JSX.Element;
}

// ─── DYNAMIC DATA SETS ───
const dataSets: Record<string, { title: string; sub: string; rows: TechItem[][] }> = {
  web: {
    title: "Web Development",
    sub: "High-performance websites built with the latest technologies.",
    rows: [
      [
        { name: "Next.js", category: "Framework", Icon: IcNext },
        { name: "React.js", category: "Library", Icon: IcReact },
        { name: "WordPress", category: "CMS", Icon: IcWP },
        { name: "Tailwind CSS", category: "Styling", Icon: IcTailwind },
      ],
      [
        { name: "Node.js", category: "Backend", Icon: IcNode },
        { name: "Shopify", category: "E-Commerce", Icon: IcShopify },
        { name: "PostgreSQL", category: "Database", Icon: IcGeneric },
        { name: "AWS Cloud", category: "Infrastructure", Icon: IcGeneric },
      ]
    ]
  },
  app: {
    title: "App Development",
    sub: "Native and cross-platform mobile experiences for iOS and Android.",
    rows: [
      [
        { name: "Flutter", category: "Hybrid", Icon: IcFlutter },
        { name: "React Native", category: "Hybrid", Icon: IcReact },
        { name: "Swift", category: "iOS", Icon: IcGeneric },
      ],
      [
        { name: "Kotlin", category: "Android", Icon: IcGeneric },
        { name: "Firebase", category: "Backend", Icon: IcGeneric },
        { name: "App Store", category: "Deployment", Icon: IcGeneric },
      ]
    ]
  },
  branding: {
    title: "Brand Designing",
    sub: "Crafting unique visual identities that resonate with your audience.",
    rows: [
      [
        { name: "Illustrator", category: "Vector", Icon: IcGeneric },
        { name: "Photoshop", category: "Design", Icon: IcGeneric },
        { name: "Figma", category: "UI/UX", Icon: IcFramer },
      ],
      [
        { name: "Guidelines", category: "Strategy", Icon: IcGeneric },
        { name: "Typography", category: "Visual", Icon: IcGeneric },
        { name: "Logo Design", category: "Brand", Icon: IcGeneric },
      ]
    ]
  },
  writing: {
    title: "Content Writing",
    sub: "Persuasive and SEO-friendly copy that converts readers into customers.",
    rows: [
      [
        { name: "Copywriting", category: "Creative", Icon: IcGeneric },
        { name: "Technical", category: "Specialized", Icon: IcGeneric },
        { name: "Ghostwriting", category: "Professional", Icon: IcGeneric },
      ],
      [
        { name: "Grammarly", category: "Quality", Icon: IcGeneric },
        { name: "Surfer SEO", category: "Optimization", Icon: IcSEO },
        { name: "Storytelling", category: "Strategy", Icon: IcGeneric },
      ]
    ]
  },
  social: {
    title: "Social Media",
    sub: "Data-driven social media growth and community management.",
    rows: [
      [
        { name: "Meta Ads", category: "Paid Media", Icon: IcFB },
        { name: "Instagram", category: "Growth", Icon: IcInsta },
        { name: "TikTok", category: "Viral", Icon: IcGeneric },
      ],
      [
        { name: "Hootsuite", category: "Management", Icon: IcGeneric },
        { name: "LinkedIn", category: "B2B", Icon: IcGeneric },
        { name: "Canva Pro", category: "Design", Icon: IcGeneric },
      ]
    ]
  },
  seo: {
    title: "SEO Services",
    sub: "Ranking your business on the first page of Google with proven strategies.",
    rows: [
      [
        { name: "Search Console", category: "Audit", Icon: IcGSC },
        { name: "Analytics", category: "Data", Icon: IcAnalytics },
        { name: "Ahrefs", category: "Backlinks", Icon: IcSEO },
      ],
      [
        { name: "Semrush", category: "Keywords", Icon: IcSEO },
        { name: "Technical SEO", category: "Structure", Icon: IcGeneric },
        { name: "Local SEO", category: "Maps", Icon: IcSEO },
      ]
    ]
  }
};

const catColors: Record<string, string> = {
Framework: "text-blue-400",
  Library: "text-cyan-400",
  CMS: "text-green-400",
  Styling: "text-sky-400",
  Backend: "text-purple-400",
  "E-Commerce": "text-yellow-400",
  Database: "text-indigo-400",
  Infrastructure: "text-gray-400",

  // App
  Hybrid: "text-pink-400",
  iOS: "text-slate-300",
  Android: "text-emerald-400",
  Deployment: "text-orange-400",

  // Branding
  Vector: "text-rose-400",
  Design: "text-fuchsia-400",
  "UI/UX": "text-violet-400",
  Strategy: "text-amber-400",
  Visual: "text-lime-400",
  Brand: "text-red-400",

  // Writing
  Creative: "text-pink-300",
  Specialized: "text-indigo-300",
  Professional: "text-gray-300",
  Quality: "text-green-300",
  Optimization: "text-orange-300",

  // Social
  "Paid Media": "text-blue-500",
  Growth: "text-pink-400",
  Viral: "text-red-500",
  Management: "text-teal-400",
  B2B: "text-blue-300",

  // SEO
  Audit: "text-yellow-500",
  Data: "text-teal-400",
  Backlinks: "text-orange-500",
  Keywords: "text-purple-500",
  Structure: "text-gray-400",
  Maps: "text-green-500",
};

// ─── HELPER COMPONENTS ───
function TechBadge({ item }: { item: TechItem }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-white/5 border border-white/[0.08] rounded-full px-5 py-3 hover:bg-[#F75126]/5 hover:border-[#F75126]/30 transition-all duration-300 group">
      <span className="w-5 h-5 text-[#F75126] flex-shrink-0">
        <item.Icon />
      </span>
      <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
        {item.name}
      </span>
      <span className={`text-[10px] font-semibold hidden sm:block ${catColors[item.category] || "text-gray-500"}`}>
        {item.category}
      </span>
    </div>
  );
}

const TechStack = ({ type = "web" }: { type?: "web" | "app" | "branding" | "writing" | "social" | "seo" }) => {
  const currentData = dataSets[type] || dataSets.web;

  return (
    <section className="py-20 bg-[#0B0D17] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 mb-14 text-center">
        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[#F75126]/10 border border-[#F75126]/20 px-4 py-1.5 rounded-full mb-4">
          Technologies & Tools
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-bold text-white leading-tight">
          Built with {" "}<span className="relative inline-block">Industry-Leading Tools</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">
          {currentData.sub}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {currentData.rows.map((row, idx) => (
          <div key={idx} className="relative overflow-hidden flex">
            {/* Animation Row */}
            <div 
              className={`flex gap-4 whitespace-nowrap ${idx % 2 === 0 ? "tech-scroll-left" : "tech-scroll-right"}`}
              style={{ animationDuration: "35s" }}
            >
              {[...row, ...row, ...row, ...row].map((item, i) => (
                <TechBadge key={`${item.name}-${i}`} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;