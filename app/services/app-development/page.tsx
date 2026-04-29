"use client";
import Circle from "@/public/assets/images/circle.png";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import ContactUs from "@/app/component/contactUs";
import PricingSection from "@/app/component/web-development-pricing";
import { useState } from "react";
import TechStack from "@/app/component/tech-stack"
import IndustriesSection from "@/app/component/IndustriesSection";
/* ── Image paths (replace placeholders with real assets) ── */
const WEB_HERO_IMG  = "/assets/images/web-dev-hero.png";   /* hero right side image  */
const WEB_WHY_IMG   = "/assets/images/web-dev-why.png";    /* why web dev matters     */
const WEB_BG_VECTOR = "/assets/images/AI-02.png";          /* bg decorative vector   */

/* ── FAQs ── */
const faqs = [
  { q: "How long does it take to develop a mobile app?",             a: "Development timelines depend on the complexity of your app. Simple apps may take 8–12 weeks, while more complex apps can take 4–6 months." },
  { q: "Do you develop apps for both iOS and Android?", a: "Yes, we provide iOS, Android, and cross-platform development to reach users on all devices." },
  { q: "Will I own the app and source code?",         a: "Absolutely. You will have full ownership of the app and all associated intellectual property." },
  { q: "Do you offer post-launch support?",            a: "Yes, we provide ongoing maintenance, updates, and performance optimization to keep your app secure and up-to-date." },
  ];

/* ── Inline SVG Icons — Services ── */
const IcCustom    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>;
const IcBusiness  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>;
const IcResponsive= () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>;
const IcLanding   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
const IcRedesign  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const IcSpeed     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IcUX        = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>;
const IcMaintain  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>;

/* ── SVG Icons — Why Choose Us ── */
const IcCustomize = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>;
const IcDesign    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IcMobile    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1"/><path d="M9 6h6"/></svg>;
const IcUserFocus = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
const IcTech      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IcGrowth    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;

/* ── Industry icons ── */
const IcHome      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>;
const IcRocket    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IcBriefcase = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>;
const IcShield    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IcUsers     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
const IcUser      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IcTrending  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>;
const IcRefresh   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>;

const industries = [
  { label: "Startups ",          Icon: IcHome      },
  { label: "Small & Medium Businesses ",                  Icon: IcRocket    },
  { label: "Enterprises",                  Icon: IcBriefcase },
  { label: "Agencies",         Icon: IcShield    },
  { label: "E-commerce Brands",  Icon: IcUsers},
];

/* ── SVG Underline ── */
const SvgUnderline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
    <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
      fill="none" stroke="#f75126" strokeWidth="6" strokeLinecap="round" className="animated-path" />
  </svg>
);

/* ── Animated Counter ── */
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

/* ── FAQ Item ── */
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

/* ── Scroll Reveal ── */
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

/* ════════════════════════════════════════
   PAGE COMPONENT
════════════════════════════════════════ */
export default function WebDevelopmentServices() {

  const webServices = [
    { title: "iOS App Development",        desc: "Our iOS app development services ensure your app runs smoothly on iPhones and iPads. Using Swift and Objective-C, we build secure, high-performance apps that comply with Apple’s strict standards.", Icon: IcCustom   },
    { title: "Android App Development",     desc: "We develop native Android apps using Java and Kotlin that perform efficiently across a wide range of devices. Our apps are feature-rich, scalable, and robust, ensuring a seamless user experience.", Icon: IcBusiness  },
    { title: "Cross-Platform App Development",        desc: "For businesses looking to target both iOS and Android users, we provide cross-platform development using Flutter or React Native. This approach saves development time and costs while delivering a consistent and high-quality user experience.", Icon: IcResponsive },
    { title: "MVP (Minimum Viable Product) Development",          desc: "For startups, we offer MVP development services to validate app ideas quickly and cost-effectively. We focus on essential features to test your concept, gather user feedback, and guide further development.", Icon: IcLanding   },
    { title: "App Maintenance & Support",         desc: "We provide ongoing maintenance and support to ensure your app remains secure, compatible, and optimized.", Icon: IcRedesign  }, ];

  const processSteps = [
    { number: "01", title: "Discovery & Planning", desc: "We begin by gaining a deep understanding of your business goals, target audience, and market landscape in the USA. Our team conducts consultations, analyzes competitors, and researches industry trends to uncover opportunities. This phase ensures a clear roadmap with app features, budget, timeline, and feasibility validation, reducing costly mistakes later." },
    { number: "02", title: "Design & Prototyping",      desc: "Our designers create intuitive, visually appealing, and user-centric interfaces that align with your brand identity. Wireframes and interactive prototypes map out navigation and functionality, allowing you to test the app flow early. This step ensures the final design resonates with your audience and minimizes revisions during development." },
    { number: "03", title: "Development",              desc: "Using modern technologies and frameworks, our developers build robust, scalable, and secure mobile applications. We handle front-end and back-end development, API integrations, and performance optimization. Transparent communication throughout ensures your app is delivered on time and aligned with your vision." },
    { number: "04", title: "Testing & Quality Assurance",                  desc: "We perform rigorous testing to guarantee your app is reliable, secure, and bug-free. Functional, performance, usability, and compatibility tests ensure it works flawlessly across devices. Security testing protects user data while usability checks enhance engagement, giving your users a seamless experience." },
    { number: "05", title: "Launch",               desc: "Our team manages the full launch process to ensure your app reaches the App Store and Google Play Store smoothly. We optimize listings, track analytics, and implement strategies to drive early downloads and engagement. This ensures your app enters the market confidently and captures attention from day one." },
    { number: "06", title: "Post-Launch Support",               desc: "Launching is only the start of your app’s journey. We provide ongoing updates, performance optimization, bug fixes, and analytics monitoring. Continuous improvements and scaling support keep your app secure, competitive, and aligned with evolving user needs, ensuring long-term success." },

  ];

  const whyChooseUs = [
    { title: "Experienced Developers",          text: "Our team is proficient in the latest mobile technologies and frameworks, delivering apps that are robust, scalable, and high-performing.",               Icon: IcCustomize },
    { title: "Custom Solutions",         text: "Every app we build is tailored to your specific business needs and designed to engage your target audience effectively.",               Icon: IcDesign    },
    { title: "End-to-End Service",        desc: "From initial design and development to launch and ongoing support, we manage the full lifecycle to provide a seamless experience.",  Icon: IcMobile, text: "All websites we build are fully responsive — looking and working perfectly across all devices and screen sizes." },
    { title: "Transparent Process",     text: "We maintain clear timelines, defined milestones, and consistent communication so you’re always in the loop. ",                     Icon: IcUserFocus },
    { title: "Post-Launch Support",    text: "Our commitment continues after launch with updates, performance monitoring, and improvements that keep your app competitive.",            Icon: IcTech      },
  ];

  return (
    <main className="min-h-screen bg-white">
      <style jsx global>{`
        /* ── Reveal animations ── */
        .reveal-up    { opacity:0; transform:translateY(40px);  transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .reveal-up.in-view    { opacity:1; transform:translateY(0); }
        .reveal-left  { opacity:0; transform:translateX(-50px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-left.in-view  { opacity:1; transform:translateX(0); }
        .reveal-right { opacity:0; transform:translateX(50px);  transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-right.in-view { opacity:1; transform:translateX(0); }
        .reveal-fade  { opacity:0; transition:opacity .8s ease; }
        .reveal-fade.in-view  { opacity:1; }
        .reveal-scale { opacity:0; transform:scale(.88); transition:opacity .6s ease,transform .6s cubic-bezier(.34,1.56,.64,1); }
        .reveal-scale.in-view { opacity:1; transform:scale(1); }

        /* ── Stagger ── */
        .stagger-child>*:nth-child(1){transition-delay:0ms}
        .stagger-child>*:nth-child(2){transition-delay:80ms}
        .stagger-child>*:nth-child(3){transition-delay:160ms}
        .stagger-child>*:nth-child(4){transition-delay:240ms}
        .stagger-child>*:nth-child(5){transition-delay:320ms}
        .stagger-child>*:nth-child(6){transition-delay:400ms}
        .stagger-child>*:nth-child(7){transition-delay:480ms}
        .stagger-child>*:nth-child(8){transition-delay:560ms}

        /* ── Misc ── */
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

        /* ── Icon boxes ── */
        .svc-icon-box{width:52px;height:52px;border-radius:14px;background:rgba(247,81,38,.07);display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:background .3s ease,transform .35s cubic-bezier(.34,1.56,.64,1)}
        .svc-icon-box svg{width:24px;height:24px;color:#F75126;transition:color .3s ease}
        .group:hover .svc-icon-box{background:#F75126;transform:scale(1.08) rotate(-4deg)}
        .group:hover .svc-icon-box svg{color:#fff}

        .why-icon-box{width:46px;height:46px;border-radius:12px;background:rgba(247,81,38,.08);display:flex;align-items:center;justify-content:center;margin-bottom:16px;transition:background .3s ease,transform .3s ease}
        .why-icon-box svg{width:20px;height:20px;color:#F75126;transition:color .3s ease}
        .group:hover .why-icon-box{background:#F75126;transform:scale(1.05)}
        .group:hover .why-icon-box svg{color:#fff}

        .ind-icon-box{width:50px;height:50px;border-radius:50%;background:rgba(247,81,38,.07);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;transition:background .3s ease,transform .35s cubic-bezier(.34,1.56,.64,1)}
        .ind-icon-box svg{width:22px;height:22px;color:#F75126;transition:color .3s ease}
        .group:hover .ind-icon-box{background:#F75126;transform:scale(1.18) rotate(-6deg)}
        .group:hover .ind-icon-box svg{color:#fff}

        /* ── placeholder image ── */
        .img-placeholder{background:linear-gradient(135deg,#1a2040 0%,#2d3568 50%,#1e3060 100%);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:rgba(255,255,255,.3);font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
        .img-placeholder svg{opacity:.25;width:48px;height:48px}
        @keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scrollRight {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-scroll-left {
  animation: scrollLeft 40s linear infinite;
}

.animate-scroll-right {
  animation: scrollRight 40s linear infinite;
}

/* Optional: Animation pauses on hover */
.group:hover .animate-scroll-left,
.group:hover .animate-scroll-right {
  animation-play-state: paused;
}
      `}</style>

      <ScrollRevealInit />
      <Header />

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="pt-24 bg-gradient-to-br from-[#1E2B3A] via-[#2D3E50] to-[#1E2B3A] text-white py-16 px-4 md:px-20 lg:pt-24 lg:pb-40 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-[#F75126] opacity-[0.08] blur-[120px] rounded-full animate-pulse"/>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-[#2470ff] opacity-[0.05] blur-[150px] rounded-full"/>
        <div className="max-w-[1400px] mx-auto z-10 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="hero-line-1 inline-block px-4 py-1.5 shimmer-badge border border-[#F75126]/20 rounded-full">
                <span className="text-[#F75126] text-sm font-bold tracking-wider uppercase">Professional App Solutions 2026</span>
              </div>
              <h1 className="hero-line-2 text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
               Mobile App Development <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Services in USA</span>
              </h1>
              <p className="hero-line-3 text-gray-300 text-xl md:text-2xl mb-12 max-w-xl leading-relaxed font-light">
                Build <span className="text-white font-semibold"> Powerful, User-Friendly Mobile Apps </span> That Drive Business Growth.
              </p>
              <div className="hero-line-4 flex flex-wrap items-center gap-10 pt-4">
                <Link href="/get-quote" className="pulse-btn bg-[#F75126] text-white px-12 py-6 rounded-full font-bold text-lg hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all flex items-center gap-3 group">
                  Get Free Proposal
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                  </svg>
                </Link>
                <Link href="tel:+1234567890" className="flex items-center gap-3 font-bold text-xl hover:text-[#F75126] transition-all group">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-full group-hover:bg-[#F75126]/20 group-hover:border-[#F75126]/30 transition-all">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F75126" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                  </div>
                  Schedule a Call
                </Link>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="hero-form bg-white/95 backdrop-blur-md rounded-[40px] p-8 md:p-14 text-[#2D3E50] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20 relative">
              <div className="absolute -top-6 -left-6 bg-[#F75126] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">FREE CONSULTATION</div>
              <h3 className="text-4xl font-black mb-2">Book a Free</h3>
              <h3 className="text-4xl font-black text-[#F75126] mb-12">Web Audit</h3>
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
                    <label htmlFor="project" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Describe Your Project Need</label>
                  </div>
                </div>
                <button type="submit" className="w-full bg-[#F75126] text-white font-bold py-6 rounded-2xl text-xl hover:bg-[#E0441D] hover:shadow-[0_20px_40px_rgba(247,81,38,0.3)] transition-all mt-6 active:scale-[0.98]">Schedule A Call</button>
                <p className="text-center text-xs text-gray-400 mt-8 font-medium">By submitting this form, you agree to our <Link href="/privacypolicy" className="text-[#F75126] hover:underline">Privacy Policy</Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          INTRO — Grow Your Business
      ══════════════════════════════════ */}
      <section className="relative py-24 px-6 md:px-20 max-w-[1440px] mx-auto overflow-hidden bg-white">
        {/* bg vector */}
        <div className="absolute -bottom-20 -right-40 z-0 opacity-20 pointer-events-none w-[80%] md:w-[80%] lg:w-[70%] aspect-square rotate-[-12deg]">
          <div className="relative w-full h-full scale-125 origin-bottom-right">
            <Image src={WEB_BG_VECTOR} alt="Design Element" fill className="object-contain object-right-bottom" priority/>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[#F75126]"/>
            <h3 className="text-[#F75126] font-bold uppercase tracking-[0.25em] text-sm">Professional App Development</h3>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1] uppercase relative z-20">
            Grow Your Business with
            <span className="text-[#F75126] block mt-2">Professional App Development Services</span>
          </h2>
          <div className="space-y-8 text-gray-800 leading-relaxed text-lg md:text-xl relative z-20">
            <p className="max-w-3xl">At PureDesignHub, we provide professional <strong>mobile app development services</strong> in the <strong>USA</strong> for businesses looking to expand their digital presence, engage customers, and drive measurable results. In today’s mobile-first world, a high-quality app is no longer optional—it’s essential for businesses that want to stay competitive and connect with users effectively.</p>  
            <p className="max-w-3xl">Our services are designed for startups, agencies, e-commerce brands, service providers, and growing companies. We focus on creating custom, scalable, and user-centric mobile applications that not only perform well but also deliver long-term business value.</p>
            <p className="max-w-3xl">We don’t treat mobile app development as a one-size-fits-all solution. Every business has unique goals, audiences, and technical requirements. That’s why our mobile app services are fully customized to align with your niche, market, and objectives in the USA.</p>
          </div>
          <div className="mt-12">
            <Link href="/get-quote" className="relative z-30 inline-block bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-[#F75126] transition-all duration-300 shadow-xl">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY WEB DEV MATTERS
      ══════════════════════════════════ */}
      <section className="bg-[#f9f9f9] py-20 px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <h2 className="title2 mb-6">Why Mobile App Development Matters for <span className="text-[#F75126]">Businesses in the USA</span></h2>
            <p className="text text-gray-600 mb-6">The mobile app market in the USA is highly competitive. Consumers expect fast, intuitive, and reliable apps, and businesses that fail to provide these experiences risk losing customers to competitors.</p>
            <p className="text text-gray-600 mb-6 font-semibold">With the right mobile app strategy, your business can:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Increase customer engagement and retention","Generate new revenue streams through in-app purchases or subscriptions","Enhance brand visibility and credibility","Gather valuable user insights to improve products and services","Reduce dependency on traditional marketing channels"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 reveal-up" style={{ transitionDelay:`${i*80}ms` }}>
                  <span className="w-5 h-5 rounded-full bg-[#F75126]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#F75126]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <p className="text text-gray-600 mt-6">A professional mobile app can transform your business by creating a direct and interactive connection with your customers, improving loyalty, and driving measurable growth.</p>
          </div>

          {/* Image / Placeholder */}
          <div className="reveal-right rounded-[40px] overflow-hidden relative h-[450px]">
            <div className="img-placeholder w-full h-full rounded-[40px]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              <span>App Development Image</span>
              <span style={{fontSize:'.65rem',opacity:.5}}>Replace with: {WEB_WHY_IMG}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════ */}
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto text-center mb-16 reveal-up">
          <h2 className="title2 mb-4 uppercase text-[#272D4E]">Our Mobile App Development <span className="text-[#F75126]">Services Include</span></h2>
          <p className="text max-w-2xl mx-auto text-gray-500">We offer a full spectrum of mobile app development services tailored for USA businesses:</p>
        </div>
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 lg:grid-cols-3 gap-6 stagger-child">
          {webServices.map((s, i) => (
            <div key={i} className="reveal-up bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 hover:border-[#F75126]/20">
              <div className="svc-icon-box"><s.Icon/></div>
              <h3 className="font-bold text-xl mb-3 text-[#272D4E] group-hover:text-[#F75126] transition-colors">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS BAR
      ══════════════════════════════════ */}
      <section className="py-20 bg-[#0B0D17] text-white px-4">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="reveal-up text-3xl md:text-5xl font-bold mb-6">Over <span className="text-[#F75126]">6.5 Billion Smartphone</span> Users Worldwide!</h2>
          <p className="reveal-up text-gray-400 mb-12">Is your website built to stand out, convert visitors, and grow your business?</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-child">
            {[
              { val:98,  suffix:"%", label:"Client Satisfaction"  },
              { val:300, suffix:"+", label:"Apps Developed" },
              { val:8,   suffix:"+", label:"Years Experience"      },
              { val:100, suffix:"%", label:"User-Centric Design"     },
            ].map((stat,i) => (
              <div key={i} className="reveal-up">
                <div className="text-4xl md:text-5xl font-bold text-[#F75126] mb-2"><AnimatedCounter target={stat.val} suffix={stat.suffix}/></div>
                <div className="text-gray-400 font-semibold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════ */}
      <section className="py-20 bg-white px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="reveal-up title2 text-center mb-4 uppercase">Why Choose <span className="text-[#F75126]">Pure Design Hub</span> for Mobile App Development</h2>
          <p className="reveal-up text max-w-6xl mx-auto text-gray-500 text-center mb-8">When businesses invest in mobile app development, they’re looking for more than just code—they need a trusted technology partner who understands their vision, market, and growth objectives. At PureDesignHub, we take a strategy-first approach to every project, ensuring your app is not only fully functional but also aligns perfectly with your business goals and user expectations in the competitive US market.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-child">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="reveal-up p-8 bg-[#f9f9f9] rounded-3xl border border-gray-100 hover:border-[#F75126] hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
                <div className="why-icon-box"><item.Icon/></div>
                <h4 className="font-bold text-xl text-[#272D4E] mb-3 group-hover:text-[#F75126] transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-600 max-w-3xl mx-auto reveal-up">By combining technical expertise with a user-centered approach, PureDesignHub ensures your mobile app delivers more than just functionality—it creates an outstanding user experience, strengthens your brand authority, and drives measurable business growth.</p>
        </div>
      </section>

      {/* ══════════════════════════════════
          PROCESS
      ══════════════════════════════════ */}
      <section className="relative py-20 bg-[#F9F9F9] 2xl:px-55 xl:px-40 lg:px-20 px-4  overflow-hidden">
        <Image src={Circle} alt="circle" width={0} height={0} sizes="100vw" loading="lazy" className="float-anim xl:w-66 xl:h-66 w-24 h-24 object-cover absolute top-0 xl:-left-33 -left-4 -z-1 circle_img"/>
        <Image src={Circle} alt="circle" width={0} height={0} sizes="100vw" loading="lazy" className="float-anim-slow xl:w-66 xl:h-66 w-24 h-24 object-cover absolute bottom-0 xl:-right-10 -right-6 -z-1 circle_img"/>

        <h2 className="reveal-up title2 text-center lg:mb-6 mb-4">
          Mobile App Development{" "}<span className="relative inline-block">Process</span>
        </h2>
        <p className="reveal-up text text-center lg:mb-16 mb-8 max-w-2xl mx-auto">We follow a structured, transparent process that ensures every app is high-quality, scalable, and user-centric.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 stagger-child">
          {processSteps.map((s, i) => (
            <div key={i} className="reveal-up relative rounded-2xl p-6 border-2 transition-all duration-300 group hover:-translate-y-2 border-gray-100 bg-white shadow-sm hover:border-[#F75126] hover:bg-[#F75126]/5 hover:shadow-lg">
              <div className="text-6xl font-black text-[#F75126]/10 absolute top-3 right-4 leading-none select-none transition-all duration-300 group-hover:text-[#F75126]/20 group-hover:scale-110">{s.number}</div>
              <div className="text-[#F75126] font-bold text-xs mb-2 tracking-widest uppercase">Step {s.number}</div>
              <h3 className="font-bold text-xl text-[#272D4E] mb-2 group-hover:text-[#F75126] transition-colors">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
        <TechStack type="app"/>
      {/* ══════════════════════════════════
          WHO BENEFITS
      ══════════════════════════════════ */}
      <section className="services_sec 2xl:px-55 xl:px-40 lg:px-20 px-4   py-20">
        <h2 className="reveal-up title2 text-center lg:mb-6 mb-4">
          Who Can Benefit from Our {" "}<span className="relative inline-block">Mobile App Development Services</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 stagger-child">
          {industries.map((ind, i) => (
            <div key={i} className="reveal-up bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-2 hover:border-[#F75126]/30 transition-all duration-300 group cursor-default">
              <div className="ind-icon-box"><ind.Icon/></div>
              <div className="text-sm font-bold text-[#1a1a2e] group-hover:text-[#F75126] transition-colors">{ind.label}</div>
            </div>
          ))}
          
        </div>
        <p className="reveal-up text text-center lg:mt-16  max-w-4xl mx-auto">No matter your industry, a professional mobile app can boost engagement, streamline operations, and increase revenue</p>
        
      </section>
      <IndustriesSection type="mobile"/>

      {/* ══════════════════════════════════
          REAL BUSINESS GROWTH CTA
      ══════════════════════════════════ */}
      <section className="py-20 bg-[#272D4E] text-white px-4 md:px-20 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h2 className="reveal-up text-3xl md:text-5xl font-bold mb-6">Mobile Apps Focused on <span className="text-[#F75126]">Real Business Growth</span></h2>
          <p className="reveal-up text-gray-300 max-w-8xl mx-auto mb-12 text-lg">
            We design mobile apps that deliver measurable business outcomes, not just downloads.<br/>
            When your app is built correctly, it becomes a powerful digital asset that strengthens your brand, engages customers, and drives results.
          </p>
          <div className="reveal-scale bg-white/5 p-12 rounded-[50px] border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-wider">Get Started with PureDesignHub Mobile App Development</h4>
            <p className="text-gray-400 mb-8 text-lg">If you’re ready to turn your app idea into a reality, PureDesignHub is your trusted mobile app development partner in the USA. We focus on high-quality, scalable, and engaging apps that meet your business objectives.
Contact us today for a free consultation, and let’s create a mobile app that delights users and drives measurable growth.
</p>
            <Link href="/get-quote" className="pulse-btn bg-[#F75126] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#F75126] transition-all inline-block shadow-2xl">Contact Us Today</Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#F75126] rounded-full blur-[100px]"/>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F75126] rounded-full blur-[120px]"/>
        </div>
      </section>

      {/* ══════════════════════════════════
          PRICING
      ══════════════════════════════════ */}
      {/* ══════════════════════════════════
          FAQs
      ══════════════════════════════════ */}
      <section className="2xl:px-55 xl:px-40 lg:px-20 px-4 xl:my-20 lg:my-10 my-5">
        <h2 className="reveal-up title2 text-center lg:mb-6 mb-4">
         Mobile App Development Services{" "}<span className="relative inline-block">FAQs<SvgUnderline/></span>
        </h2>
        <p className="reveal-up text text-center lg:mb-16 mb-8">Everything you need to know about our Mobile App development services.</p>
        <div className="w-full space-y-3">
          {faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i}/>)}
        </div>
      </section>

      <ContactUs/>
      <Footer/>
    </main>
  );
}
