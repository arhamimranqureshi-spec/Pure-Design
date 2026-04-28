"use client";
import Circle from "@/public/assets/images/circle.png";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import ContactUs from "@/app/component/contactUs";
import SEOPricingSection from "@/app/component/seo-services-pricing";
import { useState } from "react";


const SEO_COMP_IMAGE = "/assets/images/service5.png";
const SEOpng = "/assets/images/seo1.png";
const SEO_BG_VECTOR = "assets/images/AI-02.png";
const faqs = [
  { q: "Are seo services worth it in 2026?", a: "Yes, SEO is worth it in 2026 as they help businesses increase organic visibility, attract qualified traffic, and generate long-term leads. With a strategic approach, SEO continues to outperform paid advertising for sustainable growth." },
  { q: "Is SEO for small business worth it for businesses in the USA?", a: "Yes, businesses in the USA can benefit greatly, especially with affordable SEO services for small business that improve local visibility and attract the right audience. It provides steady traffic and leads without depending only on paid marketing." },
  { q: "Can SEO help my local business grow?", a: "Yes, SEO improves your visibility in local searches and Google Maps, helping you reach nearby customers who are ready to take action." },
  { q: "How much do SEO services cost?", a: "The cost varies based on your goals and competition, but there are flexible options, including affordable SEO services for small businesses." },
  { q: "How long does SEO take to show results?", a: "SEO usually takes 3 to 6 months to show noticeable improvements, depending on your competition and current website condition." },
];

// ── Inline SVG icon components ──
const IcStrategy  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>;
const IcKeyword   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>;
const IcOnPage    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>;
const IcTechnical = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/><path d="M16.24 7.76a6 6 0 010 8.49M7.76 7.76a6 6 0 000 8.49"/></svg>;
const IcContent   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
const IcLocal     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IcLink      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>;
const IcReporting = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>;
const IcCustomize = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>;
const IcComms     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
const IcEthical   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
const IcQuality   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IcAccuracy  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IcGrowth    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;

// Industry icons
const IcHome      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>;
const IcShop      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>;
const IcRocket    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IcBriefcase = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>;
const IcShield    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IcUsers     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
const IcUser      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IcTrending  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>;

const industries = [
  { label: "Local Businesses",   Icon: IcHome      },
  { label: "eCommerce Brands",   Icon: IcShop      },
  { label: "Startups",           Icon: IcRocket    },
  { label: "Agencies",           Icon: IcBriefcase },
  { label: "Service Providers",  Icon: IcShield    },
  { label: "Consultants",        Icon: IcUsers     },
  { label: "Personal Brands",    Icon: IcUser      },
  { label: "Growing Companies",  Icon: IcTrending  },
];

const FaqItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-[#1a1a2e] pr-4 text-base">{faq.q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-[#F75126] rotate-180" : "bg-gray-100"}`}>
          <svg className={`w-4 h-4 ${open ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 leading-relaxed text-sm border-t border-gray-100 pt-4 animate-faq-open">{faq.a}</div>}
    </div>
  );
};

const SvgUnderline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
    <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
      fill="none" stroke="#f75126" strokeWidth="6" strokeLinecap="round" className="animated-path" />
  </svg>
);

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        obs.unobserve(el); let start = 0; const duration = 1800;
        const step = (ts: number) => { if (!start) start = ts; const p = Math.min((ts - start) / duration, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    obs.observe(el); return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function SEOServicesNew() {
  const seoServices = [
    { title: "SEO Strategy and Planning",              desc: "Every successful campaign starts with a clear strategy. We begin by understanding your business, your target audience, your competitors, and your goals. This allows us to create SEO Techniques that are aligned with your business needs rather than using generic tactics.",         Icon: IcStrategy  },
    { title: "Keyword Research and Search Intent",     desc: "Ranking for the wrong keywords wastes time and budget. Our Expert SEO teams focus on finding the right keywords your target audience in the USA is actually searching for. We also analyze search intent to make sure your pages match what users expect to find.",                   Icon: IcKeyword   },
    { title: "On Page SEO Optimization",               desc: "The foundation of any optimized website lies in on-page SEO. We focus on improving important elements including titles, headings, content structure, internal linking, image optimization, URLs, and keyword placement.",                                                            Icon: IcOnPage    },
    { title: "Technical SEO Improvements",             desc: "A website may have strong content, but technical issues can still block its performance. Our SEO services include technical audits to identify and fix issues that may affect crawling, indexing, speed, mobile usability, and site structure.",                                       Icon: IcTechnical },
    { title: "Content Optimization and Strategy",      desc: "Content plays a major role in SEO success. We improve existing content and create strategies for new service pages, landing pages, and blog content that support topical relevance and authority.",                                                                                   Icon: IcContent   },
    { title: "Local SEO Services",                     desc: "If your business targets customers in specific cities or service areas, local SEO is essential. This help business in the USA improve local visibility through location-focused optimization, Google Business Profile support, and local landing pages.",                             Icon: IcLocal     },
    { title: "Link Building and Authority Growth",     desc: "Authority matters in search results. Our Off page SEO Services support long-term growth by helping your website earn stronger trust signals through ethical and quality-focused link-building strategies.",                                                                           Icon: IcLink      },
    { title: "SEO Reporting and Performance Tracking", desc: "Transparency is important. We track rankings, traffic patterns, engagement signals, and improvement areas so you can understand how your SEO campaign is progressing. Our SEO services are based on data, not assumptions.",                                                         Icon: IcReporting },
  ];

  const strategySteps = [
    { number: "01", title: "Discovery and Website Review",       desc: "We start by reviewing your website, current performance, competitors, and goals. This helps us understand where your business stands and what improvements are needed first." },
    { number: "02", title: "Research and Opportunity Mapping",   desc: "Next, we identify the most valuable keyword opportunities, service gaps, content needs, and technical issues. This creates the direction for the SEO campaign." },
    { number: "03", title: "Optimization and Implementation",    desc: "We then apply the necessary improvements across your website. This may include on-page updates, technical fixes, content enhancements, and location-focused optimization depending on your needs." },
    { number: "04", title: "Growth and Refinement",              desc: "SEO is not a one-time task. Search behavior changes, competition changes, and websites need continuous refinement. Our SEO service include ongoing review and improvement so your site can stay competitive in the USA market." },
  ];

  const whyChooseUs = [
    { title: "Customize SEO Strategies",      text: "Every plan is tailored to your niche, competition, and business goals in the USA.",                          Icon: IcCustomize },
    { title: "Clean and Clear Communication", text: "Transparent reporting and feedback so you always know your project status.",                                  Icon: IcComms     },
    { title: "Ethical Optimization Methods",  text: "We strictly follow white-hat SEO techniques to ensure long-term site safety.",                               Icon: IcEthical   },
    { title: "Strong Content Quality",        text: "Focusing on content that is useful, clear, original, and aligned with user intent.",                         Icon: IcQuality   },
    { title: "Technical Accuracy",            text: "Precision audits to identify and fix every technical barrier to search performance.",                        Icon: IcAccuracy  },
    { title: "Long-term Business Growth",     text: "We focus on building authority that keeps you profitable for years to come.",                                Icon: IcGrowth    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <style jsx global>{`
        .reveal-up { opacity:0; transform:translateY(40px); transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .reveal-up.in-view { opacity:1; transform:translateY(0); }
        .reveal-left { opacity:0; transform:translateX(-50px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-left.in-view { opacity:1; transform:translateX(0); }
        .reveal-right { opacity:0; transform:translateX(50px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-right.in-view { opacity:1; transform:translateX(0); }
        .reveal-fade { opacity:0; transition:opacity .8s ease; }
        .reveal-fade.in-view { opacity:1; }
        .reveal-scale { opacity:0; transform:scale(.88); transition:opacity .6s ease,transform .6s cubic-bezier(.34,1.56,.64,1); }
        .reveal-scale.in-view { opacity:1; transform:scale(1); }
        .stagger-child>*:nth-child(1){transition-delay:0ms}
        .stagger-child>*:nth-child(2){transition-delay:80ms}
        .stagger-child>*:nth-child(3){transition-delay:160ms}
        .stagger-child>*:nth-child(4){transition-delay:240ms}
        .stagger-child>*:nth-child(5){transition-delay:320ms}
        .stagger-child>*:nth-child(6){transition-delay:400ms}
        .stagger-child>*:nth-child(7){transition-delay:480ms}
        .stagger-child>*:nth-child(8){transition-delay:560ms}
        @keyframes faqOpen{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
        .animate-faq-open{animation:faqOpen .3s ease forwards}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        .float-anim{animation:floatY 5s ease-in-out infinite}
        .float-anim-slow{animation:floatY 7s ease-in-out infinite}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        .shimmer-badge{background:linear-gradient(90deg,rgba(247,81,38,.15) 0%,rgba(247,81,38,.35) 40%,rgba(247,81,38,.15) 100%);background-size:200% auto;animation:shimmer 3s linear infinite}
        @keyframes pulseRing{0%{box-shadow:0 0 0 0 rgba(247,81,38,.45)}70%{box-shadow:0 0 0 14px rgba(247,81,38,0)}100%{box-shadow:0 0 0 0 rgba(247,81,38,0)}}
        .pulse-btn{animation:pulseRing 2.2s ease infinite}
        .animated-path{stroke-dasharray:1500;stroke-dashoffset:1500;animation:drawPath 1.4s ease forwards .3s}
        @keyframes drawPath{to{stroke-dashoffset:0}}
        @keyframes heroSlideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        .hero-line-1{animation:heroSlideUp .7s ease forwards .1s;opacity:0}
        .hero-line-2{animation:heroSlideUp .7s ease forwards .3s;opacity:0}
        .hero-line-3{animation:heroSlideUp .7s ease forwards .5s;opacity:0}
        .hero-line-4{animation:heroSlideUp .7s ease forwards .7s;opacity:0}
        .hero-form{animation:heroSlideUp .8s ease forwards .4s;opacity:0}

        /* SVG icon box — service cards */
        .svc-icon-box{width:52px;height:52px;border-radius:14px;background:rgba(247,81,38,.07);display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:background .3s ease,transform .35s cubic-bezier(.34,1.56,.64,1)}
        .svc-icon-box svg{width:24px;height:24px;color:#F75126;transition:color .3s ease,transform .3s ease}
        .group:hover .svc-icon-box{background:#F75126;transform:scale(1.08) rotate(-4deg)}
        .group:hover .svc-icon-box svg{color:#fff}

        /* SVG icon box — why choose us cards */
        .why-icon-box{width:46px;height:46px;border-radius:12px;background:rgba(247,81,38,.08);display:flex;align-items:center;justify-content:center;margin-bottom:16px;transition:background .3s ease,transform .3s ease}
        .why-icon-box svg{width:20px;height:20px;color:#F75126;transition:color .3s ease}
        .group:hover .why-icon-box{background:#F75126;transform:scale(1.05)}
        .group:hover .why-icon-box svg{color:#fff}

        /* SVG icon box — industry cards */
        .ind-icon-box{width:50px;height:50px;border-radius:50%;background:rgba(247,81,38,.07);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;transition:background .3s ease,transform .35s cubic-bezier(.34,1.56,.64,1)}
        .ind-icon-box svg{width:22px;height:22px;color:#F75126;transition:color .3s ease}
        .group:hover .ind-icon-box{background:#F75126;transform:scale(1.18) rotate(-6deg)}
        .group:hover .ind-icon-box svg{color:#fff}
      `}</style>

      <ScrollRevealInit />
      <Header />

      {/* ── HERO ── */}
      <section className=" pt-24 bg-gradient-to-br from-[#1E2B3A] via-[#2D3E50] to-[#1E2B3A] text-white py-16 px-4 md:px-20 lg:pt-24 lg:pb-40 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-[#F75126] opacity-[0.08] blur-[120px] rounded-full animate-pulse"/>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-[#2470ff] opacity-[0.05] blur-[150px] rounded-full"/>
        <div className="max-w-[1400px] mx-auto z-10 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="hero-line-1 inline-block px-4 py-1.5 shimmer-badge border border-[#F75126]/20 rounded-full">
                <span className="text-[#F75126] text-sm font-bold tracking-wider uppercase">Strategic Growth 2026</span>
              </div>
              <h1 className="hero-line-2 text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
                SEO Services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">in USA</span>
              </h1>
              <p className="hero-line-3 text-gray-300 text-xl md:text-2xl mb-12 max-w-xl leading-relaxed font-light">
                Increase your website's authority and rankings with consistent results from our <span className="text-white font-semibold">tested SEO strategy.</span>
              </p>
              <div className="hero-line-4 flex flex-wrap items-center gap-10 pt-4">
                <Link href="/get-quote" className="pulse-btn bg-[#F75126] text-white px-12 py-6 rounded-full font-bold text-lg hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all flex items-center gap-3 group">
                  Get Free Proposal
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                  </svg>
                </Link>
                <Link href="tel:+1234567890" className="flex items-center gap-3 font-bold text-xl hover:text-[#F75126] transition-all group">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-full group-hover:bg-[#F75126]/20 group-hover:border-[#F75126]/30 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F75126" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                  </div>
                  Schedule a Call
                </Link>
              </div>
            </div>
            <div className="hero-form bg-white/95 backdrop-blur-md rounded-[40px] p-8 md:p-14 text-[#2D3E50] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20 relative">
              <div className="absolute -top-6 -left-6 bg-[#F75126] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">FREE AUDIT</div>
              <h3 className="text-4xl font-black mb-2">Book a Free</h3>
              <h3 className="text-4xl font-black text-[#F75126] mb-12">Consultation</h3>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input type="text" id="name" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Full Name" required/>
                    <label htmlFor="name" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Email" required/>
                    <label htmlFor="email" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Email</label>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input type="tel" id="number" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Number" required/>
                    <label htmlFor="number" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Number</label>
                  </div>
                  <div className="relative group">
                    <input type="text" id="project" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Project Need"/>
                    <label htmlFor="project" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Describe Your Project Need.</label>
                  </div>
                </div>
                <button type="submit" className="w-full bg-[#F75126] text-white font-bold py-6 rounded-2xl text-xl hover:bg-[#E0441D] hover:shadow-[0_20px_40px_rgba(247,81,38,0.3)] transition-all mt-6 active:scale-[0.98]">Schedule A Call</button>
                <p className="text-center text-xs text-gray-400 mt-8 font-medium">By submitting this form, you agree to our <Link href="/privacypolicy" className="text-[#F75126] hover:underline">Privacy Policy</Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABLE GROWTH ── */}
<section className="relative py-24 px-6 md:px-20 max-w-[1440px] mx-auto overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute -bottom-20 -right-40 z-0 opacity-20 pointer-events-none w-[80%] md:w-[80%] lg:w-[70%] aspect-square rotate-[-12deg]">
        <div className="relative w-full h-full scale-125 origin-bottom-right">
          <Image 
            src="/assets/images/AI-02.png" 
            alt="Design Element" 
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-[2px] bg-[#F75126]"></span>
          <h3 className="text-[#F75126] font-bold uppercase tracking-[0.25em] text-sm">Strategic SEO</h3>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1] uppercase relative z-20">
          Grow Your Business with Result-Driven 
          <span className="text-[#F75126] block mt-2"> SEO Services</span>
        </h2>

        <div className="space-y-8 text-gray-800 leading-relaxed text-lg md:text-xl relative z-20">
          <p className="max-w-3xl">Pure Design Hub provides professional SEO services in USA for businesses that want more visibility, better rankings, and qualified traffic.</p>
          <div className="grid md:grid-cols-2 gap-8 py-6">
            <div className="border-l-4 border-[#F75126] pl-6 bg-white/60 backdrop-blur-sm p-4 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-tight">Sustainable Growth</h4>
              <p className="text-base text-gray-600">Focusing on long-term authority rather than short-term tricks.</p>
            </div>
            <div className="border-l-4 border-[#F75126] pl-6 bg-white/60 backdrop-blur-sm p-4 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-tight">Custom Strategies</h4>
              <p className="text-base text-gray-600">Tailored consulting to match your specific niche and market.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <button className="relative z-30 bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-[#F75126] transition-all duration-300 shadow-xl">
            Get a Free Audit
          </button>
        </div>
      </div>
    </section>
      {/* ── WHY SEO MATTERS ── */}
      <section className="bg-[#f9f9f9] py-20 px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <h2 className="title2 mb-6">Why SEO Matters for <span className="text-[#F75126]">Businesses in the USA</span></h2>
            <p className="text text-gray-600 mb-6">The online market in the USA is highly competitive. People search every day for products, services, and solutions, and most of them click on businesses that appear on the first page of Google.</p>
            <p className="text text-gray-600 mb-6">Professional SEO service help businesses improve their online visibility and attract users who are already searching for what they offer.</p>
            <p className="text text-gray-600 mb-6 font-semibold">With the right strategy, SEO can help your business:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["increase organic traffic","improve keyword rankings","generate better quality leads","build trust and authority","reduce dependency on paid ads","create long-term digital growth"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 reveal-up" style={{ transitionDelay: `${i*80}ms` }}>
                  <span className="w-5 h-5 rounded-full bg-[#F75126]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#F75126]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <p className="text text-gray-600 mt-6">Professional SEO service help businesses improve their online visibility and attract users who are already searching for what they offer.</p>
          </div>
          <div className="reveal-right bg-[#272D4E] p-10 rounded-[40px] text-white relative h-[450px] overflow-hidden">
            <Image src={SEOpng} alt="Targeted Traffic SEO" fill className="object-cover rounded-[30px] hover:scale-105 transition-transform duration-700"/>
          </div>
        </div>
      </section>

      {/* ── SEO SERVICES GRID ── */}
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto text-center mb-16 reveal-up">
          <h2 className="title2 mb-4 uppercase text-[#272D4E]">Our SEO <span className="text-[#F75126]">Services Include</span></h2>
          <p className="text max-w-2xl mx-auto text-gray-500">We provide specialized SEO techniques aligned with your business needs rather than using generic tactics.</p>
        </div>
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-6 stagger-child">
          {seoServices.map((s, i) => (
            <div key={i} className="reveal-up bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 hover:border-[#F75126]/20">
              <div className="svc-icon-box"><s.Icon/></div>
              <h3 className="font-bold text-xl mb-3 text-[#272D4E] group-hover:text-[#F75126] transition-colors">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 bg-[#0B0D17] text-white px-4">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="reveal-up text-3xl md:text-5xl font-bold mb-6">Over <span className="text-[#F75126]">68,000 Searches</span> On Google Every Second!</h2>
          <p className="reveal-up text-gray-400 mb-12">Is your brand visible for the terms that matter most to your business?</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-child">
            {[{val:95,suffix:"%",label:"First Page Rank"},{val:78,suffix:"%",label:"Traffic Increase"},{val:62,suffix:"%",label:"Conversion Lift"},{val:100,suffix:"%",label:"White Hat SEO"}].map((stat,i) => (
              <div key={i} className="reveal-up">
                <div className="text-4xl md:text-5xl font-bold text-[#F75126] mb-2"><AnimatedCounter target={stat.val} suffix={stat.suffix}/></div>
                <div className="text-gray-400 font-semibold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="reveal-up title2 text-center mb-4 uppercase">Why Choose <span className="text-[#F75126]">Pure Design Hub</span> for SEO Services</h2>
          <p className="reveal-up text max-w-6xl mx-auto text-gray-500 text-center mb-8">Pure Design Hub understands that businesses do not just want rankings. They want measurable business growth. That is why Our SEO services are designed to improve visibility, build authority, and convert traffic into real results.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-child">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="reveal-up p-8 bg-[#f9f9f9] rounded-3xl border border-gray-100 hover:border-[#F75126] hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
                <div className="why-icon-box"><item.Icon/></div>
                <h4 className="font-bold text-xl text-[#272D4E] mb-3 group-hover:text-[#F75126] transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-600 max-w-3xl mx-auto reveal-up">We combine strategy, content, and optimization into one clear process. This allows businesses in the USA to build a stronger digital presence without depending only on paid marketing.</p>
        </div>
      </section>

      {/* ── SEO PROCESS ── */}
      <section className="relative py-20 bg-[#F9F9F9] 2xl:px-55 xl:px-40 lg:px-20 px-4 xl:mb-40 lg:mb-20 mb-10 overflow-hidden">
        <h2 className="reveal-up title2 text-center lg:mb-6 mb-4">
          Our SEO{" "}<span className="relative inline-block">Process<SvgUnderline/></span>
        </h2>
        <p className="reveal-up text text-center lg:mb-16 mb-8 max-w-2xl mx-auto">Our proven 4-step SEO framework delivers consistent, measurable results. Every campaign follows a structured process refined through years of experience.</p>
        <Image src={Circle} alt="circle" width={0} height={0} sizes="100vw" loading="lazy" className="float-anim xl:w-66 xl:h-66 w-24 h-24 object-cover absolute top-0 xl:-left-33 -left-4 -z-1 circle_img"/>
        <Image src={Circle} alt="circle" width={0} height={0} sizes="100vw" loading="lazy" className="float-anim-slow xl:w-66 xl:h-66 w-24 h-24 object-cover absolute bottom-0 xl:-right-10 -right-6 -z-1 circle_img"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-child">
          {strategySteps.map((s, i) => (
            <div key={i} className="reveal-up relative rounded-2xl p-6 border-2 transition-all duration-300 group hover:-translate-y-2 border-gray-100 bg-white shadow-sm hover:border-[#F75126] hover:bg-[#F75126]/5 hover:shadow-lg">
              <div className="text-6xl font-black text-[#F75126]/10 absolute top-3 right-4 leading-none select-none transition-all duration-300 group-hover:text-[#F75126]/20 group-hover:scale-110">{s.number}</div>
              <div className="text-[#F75126] font-bold text-xs mb-2 tracking-widest uppercase">Step {s.number}</div>
              <h3 className="font-bold text-xl text-[#272D4E] mb-2 group-hover:text-[#F75126] transition-colors">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO BENEFITS ── */}
      <section className="services_sec 2xl:px-55 xl:px-40 lg:px-20 px-4 xl:mb-40 lg:mb-20 mb-10">
        <h2 className="reveal-up title2 text-center lg:mb-6 mb-4">
          Who Can Benefit from Our{" "}<span className="relative inline-block">SEO Services<SvgUnderline/></span>
        </h2>
        <p className="reveal-up text text-center lg:mb-16 mb-8 max-w-4xl mx-auto">Whether your business is new or already established, the right SEO strategy can help create better search visibility and stronger lead generation.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 stagger-child">
          {industries.map((ind, i) => (
            <div key={i} className="reveal-up bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-2 hover:border-[#F75126]/30 transition-all duration-300 group cursor-default">
              <div className="ind-icon-box"><ind.Icon/></div>
              <div className="text-sm font-bold text-[#1a1a2e] group-hover:text-[#F75126] transition-colors">{ind.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REAL BUSINESS GROWTH ── */}
      <section className="py-20 bg-[#272D4E] text-white px-4 md:px-20 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h2 className="reveal-up text-3xl md:text-5xl font-bold mb-6">SEO Services Focused on <span className="text-[#F75126]">Real Business Growth</span></h2>
          <p className="reveal-up text-gray-300 max-w-8xl mx-auto mb-12 text-lg">
            The goal of SEO should never be traffic alone. It should be qualified traffic that supports real business outcomes.
            <br/>When your website is optimized correctly, it becomes easier for users to find you, trust you, and contact you.
          </p>
          <div className="reveal-scale bg-white/5 p-12 rounded-[50px] border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-wider">Let Pure Design Hub Help You Rank Higher</h4>
            <p className="text-gray-400 mb-8 text-lg">If you're looking for affordable SEO services, we are ready to help you to improve your search presence with a strategy built for long-term growth.</p>
            <Link href="/get-quote" className="pulse-btn bg-[#F75126] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#F75126] transition-all inline-block shadow-2xl">Contact Us Today</Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#F75126] rounded-full blur-[100px]"/>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F75126] rounded-full blur-[120px]"/>
        </div>
      </section>

      {/* ── PRICING ── */}
      <div className="py-20 reveal-up"><SEOPricingSection/></div>

      {/* ── FAQs ── */}
      <section className="2xl:px-55 xl:px-40 lg:px-20 px-4 xl:mb-40 lg:mb-20 mb-10">
        <h2 className="reveal-up title2 text-center lg:mb-6 mb-4">
          Search Engine Optimization{" "}<span className="relative inline-block">FAQs<SvgUnderline/></span>
        </h2>
        <p className="reveal-up text text-center lg:mb-16 mb-8">Everything you need to know about our SEO services.</p>
        <div className="w-full space-y-3">
          {faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i}/>)}
        </div>
      </section>

      <ContactUs/>
      <Footer/>
    </main>
  );
}

function ScrollRevealInit() {
  useEffect(() => {
    const classes = ["reveal-up","reveal-left","reveal-right","reveal-fade","reveal-scale"];
    const allEls: Element[] = [];
    classes.forEach(cls => allEls.push(...Array.from(document.querySelectorAll(`.${cls}`))));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    allEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
