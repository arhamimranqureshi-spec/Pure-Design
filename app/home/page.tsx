"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Circle from "@/public/assets/images/circle.png";
import TestimonialImg1 from "@/public/assets/images/testimonial_img1.png";
import TestimonialImg2 from "@/public/assets/images/testimonial_img2.png";
import TestimonialImg3 from "@/public/assets/images/testimonial_img3.png";
import TestimonialImg4 from "@/public/assets/images/testimonial_img4.png";
import TestimonialImg5 from "@/public/assets/images/testimonial_img5.png";
import TestimonialImg6 from "@/public/assets/images/testimonial_img6.png";
import Header from "../component/header";
import HomeBanner from "../component/homeBanner";
import Footer from "../component/footer";
import ContactUs from "../component/contactUs";
import AboutUsComp from "../component/AboutUsComp";
import PricingSection from "../component/web-development-pricing";
import TechStack from "../component/tech-stack";





const categories = ["Web Design", "Mobile Apps", "Branding", "Logo"];
/* ─── SVG Icons ─── */
const IcWeb = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M6 8h.01M9 8h.01M12 8h6" /></svg>;
const IcApp = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="17" r="1" /><path d="M9 6h6" /></svg>;
const IcBranding = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
const IcContent = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>;
const IcSocial = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>;
const IcSEO = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>;

/* ─── SVG Underline ─── */
const SvgUnderline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
    <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
      fill="none" stroke="#f75126" strokeWidth="6" strokeLinecap="round" className="animated-path" />
  </svg>
);

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        obs.unobserve(el); let start = 0;
        const step = (ts: number) => { if (!start) start = ts; const p = Math.min((ts - start) / 1800, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    obs.observe(el); return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Scroll Reveal ─── */
function ScrollRevealInit() {
  useEffect(() => {
    const classes = ["reveal-up", "reveal-left", "reveal-right", "reveal-fade", "reveal-scale"];
    const allEls: Element[] = [];
    classes.forEach(cls => allEls.push(...Array.from(document.querySelectorAll(`.${cls}`))));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    allEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}

/* ─── Portfolio Tabs ─── */
function PortfolioTabs({ categories, active, onChange }: { categories: string[]; active: string; onChange: (c: string) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 lg:mb-12 mb-8">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button key={cat} onClick={() => onChange(cat)}
            className={`portfolio-tab relative px-6 py-2.5 rounded-full text-sm font-bold tracking-wide border-2 transition-all duration-300 overflow-hidden
              ${isActive ? "bg-[#F75126] border-[#F75126] text-white shadow-[0_8px_24px_rgba(247,81,38,0.35)] scale-105" : "bg-white border-gray-200 text-gray-600 hover:border-[#F75126] hover:text-[#F75126]"}`}>
            {!isActive && <span className="tab-fill absolute inset-0 bg-[#F75126] opacity-0 transition-opacity duration-300 rounded-full -z-10" />}
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════
   PORTFOLIO HOVER-SCROLL CARDS
══════════════════════════════════════ */
const portfolioItems = [
  { cat: "Web Design", src: "/assets/images/Portfolio/portfolio_img1.png", label: " ", tag: "Web Design" },
  { cat: "Web Design", src: "/assets/images/Portfolio/portfolio_img2.png", label: " ", tag: "Web Design" },
  { cat: "Web Design", src: "/assets/images/Portfolio/portfolio_img3.png", label: " ", tag: "Web Design" },
  { cat: "Web Design", src: "/assets/images/Portfolio/portfolio_img4.png", label: " ", tag: "Web Design" },
  { cat: "Web Design", src: "/assets/images/Portfolio/portfolio_img5.png", label: " ", tag: "Web Design" },
  { cat: "Web Design", src: "/assets/images/Portfolio/portfolio_img6.png", label: " ", tag: "Web Design" },
  { cat: "Web Design", src: "/assets/images/Portfolio/portfolio_img7.png", label: " ", tag: "Web Design" },
  { cat: "Web Design", src: "/assets/images/Portfolio/portfolio_img8.png", label: " ", tag: "Web Design" },
  { cat: "Web Design", src: "/assets/images/Portfolio/portfolio_img9.png", label: " ", tag: "Web Design" },

  { cat: "Mobile Apps", src: "/assets/images/App/app_img1.png", label: "", tag: "Mobile App" },
  { cat: "Mobile Apps", src: "/assets/images/App/app_img2.png", label: "", tag: "Mobile App" },
  { cat: "Mobile Apps", src: "/assets/images/App/app_img3.png", label: "", tag: "Mobile App" },
  { cat: "Mobile Apps", src: "/assets/images/App/app_img4.png", label: "", tag: "Mobile App" },
  { cat: "Mobile Apps", src: "/assets/images/App/app_img5.png", label: "", tag: "Mobile App" },
  { cat: "Mobile Apps", src: "/assets/images/App/app_img6.png", label: "", tag: "Mobile App" },
  { cat: "Mobile Apps", src: "/assets/images/App/app_img7.png", label: "", tag: "Mobile App" },
  { cat: "Mobile Apps", src: "/assets/images/App/app_img8.png", label: "", tag: "Mobile App" },
  { cat: "Mobile Apps", src: "/assets/images/App/app_img9.png", label: "", tag: "Mobile App" }, 





  { cat: "Branding", src: "/assets/images/Portfolio/Branding/branding_img1.png", label: "", tag: "Branding" },
  { cat: "Branding", src: "/assets/images/Portfolio/Branding/branding_img2.png", label: "", tag: "Branding" },
  { cat: "Branding", src: "/assets/images/Portfolio/Branding/branding_img3.png", label: "", tag: "Branding" },
  { cat: "Branding", src: "/assets/images/Portfolio/Branding/branding_img4.png", label: "", tag: "Branding" },
  { cat: "Branding", src: "/assets/images/Portfolio/Branding/branding_img5.png", label: "", tag: "Branding" },
  { cat: "Branding", src: "/assets/images/Portfolio/Branding/branding_img6.png", label: "", tag: "Branding" },
  { cat: "Branding", src: "/assets/images/Portfolio/Branding/branding_img7.png", label: "", tag: "Branding" },
  { cat: "Branding", src: "/assets/images/Portfolio/Branding/branding_img8.png", label: "", tag: "Branding" },
  { cat: "Branding", src: "/assets/images/Portfolio/Branding/branding_img9.png", label: "", tag: "Branding" },
  { cat: "Logo", src: "/assets/images/portfolio/logo1.png", label: "Vanta Group", tag: "Logo" },
];

function PortfolioCard({ item }: { item: typeof portfolioItems[0] }) {
  return (
  <div className="port-card group relative rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#F75126]/30 hover:shadow-[0_20px_50px_rgba(247,81,38,0.15)] transition-all duration-500 cursor-pointer h-[650px]">

    {/* IMAGE WRAPPER */}
    <div className="absolute inset-0 overflow-hidden bg-black/5">

      <div className="h-full w-full overflow-hidden">

        <img
          src={item.src}
          alt={item.label}
          className="w-full h-auto block object-cover transition-transform duration-[9000ms] ease-linear group-hover:-translate-y-[60%]"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
            if (el.parentElement) {
              (el.parentElement as HTMLElement).style.background =
                "linear-gradient(135deg,#1a2040,#2d3568)";
            }
          }}
        />

      </div>
    </div>

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* LABEL */}
    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
      <span className="text-[10px] font-bold tracking-widest uppercase text-[#F75126] block mb-1">
        {item.tag}
      </span>
      <span className="font-bold text-white text-base">
        {item.label}
      </span>
    </div>

    {/* ZOOM ICON */}
    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F75126] flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
        />
      </svg>
    </div>

  </div>
)}
function PortfolioSec({ activeCategory }: { activeCategory: string }) {
  const filtered = portfolioItems.filter(p => p.cat === activeCategory);
  const shown = filtered.length > 0 ? filtered : portfolioItems;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shown.map((item, i) => <PortfolioCard key={i} item={item} />)}
    </div>
  );
}

/* ══════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════ */
interface Testimonial {
  id: number; name: string; role: string; company: string; rating: number;
  text: string; videoUrl: string; avatarImg: typeof TestimonialImg1; initials: string; avatarBg: string;
}

const testimonialData: Testimonial[] = [
  { id: 1, name: "Michael Thompson", role: "CEO", company: "FreshCart Global", rating: 5, text: "Pure Design Hub completely transformed our online presence. Our revenue increased by 340% within three months of the redesign. Absolutely exceptional work from start to finish!", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", avatarImg: TestimonialImg1, initials: "MT", avatarBg: "bg-[#F75126]" },
  { id: 2, name: "Amina Khalid", role: "Founder", company: "WellnessFirst", rating: 5, text: "The mobile app they built for us was delivered ahead of schedule and exceeded all expectations. The UI is gorgeous and our users absolutely love using it every single day.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", avatarImg: TestimonialImg2, initials: "AK", avatarBg: "bg-[#272D4E]" },
  { id: 3, name: "James Wu", role: "Marketing Director", company: "NexusLabs", rating: 5, text: "Their SEO strategy brought us from page 5 to position 1 for our main keywords in under 4 months. Pure Design Hub is the real deal — worth every single penny we invested.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", avatarImg: TestimonialImg3, initials: "JW", avatarBg: "bg-[#F75126]" },
  { id: 4, name: "Sara Malik", role: "COO", company: "BuildFlow Inc.", rating: 5, text: "From branding to social media management, they handled everything flawlessly. Our brand recognition has skyrocketed and our engagement metrics are through the roof. Incredible team!", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", avatarImg: TestimonialImg4, initials: "SM", avatarBg: "bg-[#272D4E]" },
  { id: 5, name: "David Chen", role: "Product Lead", company: "CloudPath Systems", rating: 5, text: "Tight deadline, complex product. Pure Design Hub delivered a world-class app on time, under budget, and with zero compromises on quality. I would not work with anyone else.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", avatarImg: TestimonialImg5, initials: "DC", avatarBg: "bg-[#F75126]" },
  { id: 6, name: "Zara Siddiqui", role: "Growth Director", company: "VantaGroup", rating: 5, text: "The content strategy and SEO work was truly transformational. Organic traffic up 280% in 6 months. These people genuinely understand digital growth like no one else.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", avatarImg: TestimonialImg6, initials: "ZS", avatarBg: "bg-[#272D4E]" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-[#F75126]" : "text-gray-200"}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function VideoModal({ url, onClose }: { url: string; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-[#F75126] transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe src={`${url}?autoplay=1&rel=0`} className="absolute inset-0 w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen title="Testimonial Video" />
        </div>
      </div>
    </div>
  );
}

/* LEFT content  |  RIGHT portrait video */
function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const items = [
    testimonialData[current],
    testimonialData[(current + 1) % testimonialData.length],
  ];

  return (
    <>
      {videoOpen && (
        <VideoModal url={activeVideo} onClose={() => setVideoOpen(false)} />
      )}

      {/* 🔥 GRID FOR 2 TESTIMONIALS */}
      <div className="grid lg:grid-cols-2 gap-6">

        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border-2 border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            style={{ minHeight: "480px" }}
          >

            {/* ── LEFT ── */}
            <div className="flex-1 flex flex-col justify-between p-8 md:p-12 lg:p-14 relative">
              <span className="absolute top-6 right-8 text-[8rem] font-black text-[#F75126]/5">
                "
              </span>

              <div>
                <span className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase text-[#F75126] bg-[rgba(247,81,38,.08)] border border-[rgba(247,81,38,.2)] px-4 py-1.5 rounded-full mb-8">
                  Client Review
                </span>

                <div className="mb-5">
                  <StarRating count={item.rating} />
                </div>

                <blockquote className="text-[#272D4E] mb-8 text-lg font-medium">
                  "{item.text}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full ${item.avatarBg} flex items-center justify-center`}>
                    <span className="text-sm font-black text-white">
                      {item.initials}
                    </span>
                  </div>

                  <div>
                    <div className="font-bold text-[#272D4E]">
                      {item.name}
                    </div>
                    <div className="text-sm text-[#F75126]">
                      {item.role}
                    </div>
                    <div className="text-xs text-gray-400">
                      {item.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT VIDEO ── */}
            <div className="w-full lg:w-[300px] relative bg-[#0B0D17] flex items-center justify-center p-6">

              <div
                className="relative w-full max-w-[200px] cursor-pointer group"
                style={{ aspectRatio: "9/16" }}
                onClick={() => {
                  setActiveVideo(item.videoUrl);
                  setVideoOpen(true);
                }}
              >
                <div className="absolute inset-0 rounded-[28px] overflow-hidden">
                  <Image
                    src={item.avatarImg}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* PLAY */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#F75126] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}

      </div>

      {/* CONTROLS */}
      <div className="flex items-center justify-center gap-6 mt-10">

        {/* PREV */}
        <button
          onClick={() =>
            setCurrent(
              (c) =>
                (c - 2 + testimonialData.length) %
                testimonialData.length
            )
          }
          className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#F75126] hover:bg-[#F75126] hover:text-white text-gray-400"
        >
          ‹
        </button>

        {/* NEXT */}
        <button
          onClick={() =>
            setCurrent((c) => (c + 2) % testimonialData.length)
          }
          className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#F75126] hover:bg-[#F75126] hover:text-white text-gray-400"
        >
          ›
        </button>
      </div>
    </>
  );
}

/* ══════════════════════════════════════
   TECH STACK — 3-ROW CAROUSEL
══════════════════════════════════════ */


/* ══════════════════════════════════════
   HOME
══════════════════════════════════════ */
const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Web Design");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { title: "Website Development", text: "Build fast, responsive, and user-friendly websites that drive engagement and convert visitors into customers.", imagePath: "/assets/images/service1.png", slug: "/services/web-development", Icon: IcWeb },
    { title: "App Development", text: "Create intuitive mobile apps that enhance user experience, retention, and long-term growth for your business.", imagePath: "/assets/images/service2.png", slug: "/services/app-development", Icon: IcApp },
    { title: "Branding Design", text: "Craft a strong brand identity that resonates with your audience and stands out in a competitive market.", imagePath: "/assets/images/branding_body.png", slug: "/services/branding-design", Icon: IcBranding },
    { title: "Content Writing", text: "Compelling, SEO-optimized content that tells your story, builds authority, and drives meaningful engagement.", imagePath: "/assets/images/service3.png", slug: "/services/content-writing", Icon: IcContent },
    { title: "Social Media Marketing", text: "Strategic social campaigns that grow your audience, build community, and convert followers into loyal customers.", imagePath: "/assets/images/service4.png", slug: "/services/social-media-marketing", Icon: IcSocial },
    { title: "SEO Services", text: "Dominate search rankings with proven SEO strategies that bring qualified traffic and sustainable organic growth.", imagePath: "/assets/images/service5.png", slug: "/services/seo-services", Icon: IcSEO },
  ];
  const stats = [
    { val: 500, suffix: "+", label: "Projects Delivered" },
    { val: 98, suffix: "%", label: "Client Satisfaction" },
    { val: 8, suffix: "+", label: "Years Experience" },
    { val: 150, suffix: "+", label: "Happy Clients" },
  ];
  const process = [
    { step: "01", title: "Discovery Call", desc: "We start with a free consultation to understand your goals, audience, and vision. No jargon — just clarity." },
    { step: "02", title: "Strategy & Planning", desc: "Our team builds a custom roadmap tailored to your project — timelines, deliverables, and success metrics." },
    { step: "03", title: "Design & Development", desc: "We design, build, and iterate with your feedback at every stage so the final product feels exactly right." },
    { step: "04", title: "Launch & Growth", desc: "We don't just deliver and disappear. Post-launch support, analytics, and ongoing growth is part of the deal." },
  ];
  const faqs = [
    { q: "How long does a website project take?", a: "Most websites are delivered within 2–4 weeks depending on complexity. We always provide a clear timeline upfront." },
    { q: "Do you offer ongoing support after launch?", a: "Yes. We offer monthly maintenance and support packages so your site stays fast, secure, and up to date." },
    { q: "Can you help with both design and marketing?", a: "Absolutely — Pure Design Hub is a full-service agency. We handle everything from branding to SEO under one roof." },
    { q: "What industries do you work with?", a: "We've worked across e-commerce, healthcare, real estate, SaaS, local services, and more. Every niche is welcome." },
    { q: "Is there a minimum project budget?", a: "We have flexible packages for startups and small businesses, all the way up to enterprise solutions. Let's talk." },
  ];

  return (
    <>
      <style jsx global>{`
        .reveal-up    { opacity:0; transform:translateY(40px);  transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1); }
        .reveal-left  { opacity:0; transform:translateX(-50px); transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-right { opacity:0; transform:translateX(50px);  transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1); }
        .reveal-fade  { opacity:0; transition:opacity .8s ease; }
        .reveal-scale { opacity:0; transform:scale(.88); transition:opacity .6s ease,transform .6s cubic-bezier(.34,1.56,.64,1); }
        .reveal-up.in-view,.reveal-left.in-view,.reveal-right.in-view,.reveal-fade.in-view { opacity:1; transform:translate(0); }
        .reveal-scale.in-view { opacity:1; transform:scale(1); }

        .stagger-child>*:nth-child(1){transition-delay:0ms}
        .stagger-child>*:nth-child(2){transition-delay:90ms}
        .stagger-child>*:nth-child(3){transition-delay:180ms}
        .stagger-child>*:nth-child(4){transition-delay:270ms}
        .stagger-child>*:nth-child(5){transition-delay:360ms}
        .stagger-child>*:nth-child(6){transition-delay:450ms}

        .animated-path{stroke-dasharray:1500;stroke-dashoffset:1500;animation:drawPath 1.4s ease forwards .3s}
        @keyframes drawPath{to{stroke-dashoffset:0}}

        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        .float-anim{animation:floatY 5s ease-in-out infinite}
        .float-anim-slow{animation:floatY 7s ease-in-out infinite}

        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        .shimmer-badge{background:linear-gradient(90deg,rgba(247,81,38,.15) 0%,rgba(247,81,38,.35) 40%,rgba(247,81,38,.15) 100%);background-size:200% auto;animation:shimmer 3s linear infinite}

        @keyframes pulseRing{0%{box-shadow:0 0 0 0 rgba(247,81,38,.45)}70%{box-shadow:0 0 0 14px rgba(247,81,38,0)}100%{box-shadow:0 0 0 0 rgba(247,81,38,0)}}
        .pulse-btn{animation:pulseRing 2.2s ease infinite}

        .svc-icon-box{width:52px;height:52px;border-radius:14px;background:rgba(247,81,38,.07);display:flex;align-items:center;justify-content:center;margin-bottom:18px;transition:background .3s ease,transform .35s cubic-bezier(.34,1.56,.64,1)}
        .svc-icon-box svg{width:24px;height:24px;color:#F75126;transition:color .3s ease}
        .svc-card:hover .svc-icon-box{background:#F75126;transform:scale(1.08) rotate(-4deg)}
        .svc-card:hover .svc-icon-box svg{color:#fff}

        .grid-bg::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(247,81,38,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(247,81,38,.03) 1px,transparent 1px);background-size:60px 60px;pointer-events:none}

        @keyframes faqOpen{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
        .faq-body{animation:faqOpen .25s ease forwards}

        .stat-card{transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease}
        .stat-card:hover{transform:translateY(-4px);border-color:rgba(247,81,38,.3)!important;box-shadow:0 12px 32px rgba(247,81,38,.12)!important}

        .t-img{transition:transform .4s ease}
        .t-img:hover{transform:scale(1.08)}

        /* ══ PORTFOLIO HOVER-SCROLL ══
           Fixed height container. Image starts at top.
           On hover it transitions object-position to bottom — 
           creating a smooth scroll-down reveal of the full page screenshot. */
        .port-card { overflow:hidden; }
        .port-img-wrap { width:100%; height:100%; overflow:hidden; position:relative; }
        .port-img {
          width:100%;
          height:300%;          /* tall enough to scroll */
          object-fit:cover;
          object-position:top center;
          display:block;
          transition:object-position 0s;
        }
        .port-card:hover .port-img {
          object-position:bottom center;
          transition:object-position 1s cubic-bezier(0.25,0.46,0.45,0.94);
        }
          .bannerLeft{
            justify-content:center !important;
          }

        /* ══ TECH CAROUSELS ══ */
        @keyframes techScrollLeft  { 0%{transform:translateX(0)}   100%{transform:translateX(-50%)} }
        @keyframes techScrollRight { 0%{transform:translateX(-50%)} 100%{transform:translateX(0)}   }
        .tech-scroll-left  { display:flex; gap:12px; animation:techScrollLeft  linear infinite; width:max-content; }
        .tech-scroll-left:hover  { animation-play-state:paused; }
        .tech-scroll-right { display:flex; gap:12px; animation:techScrollRight linear infinite; width:max-content; }
        .tech-scroll-right:hover { animation-play-state:paused; }
      `}</style>

      <ScrollRevealInit />

      {/* BANNER */}
      <section className=" banner_sec relative overflow-hidden h-full w-full bg-[linear-gradient(90deg,_rgba(251,89,30,0.08)_0%,_rgba(229,239,255,0.26)_84%,_rgba(229,239,255,0)_100%)] z-1">
        <Header />
        <HomeBanner />
      </section>

      {/* STATS */}
      <section className="py-12 px-4 md:px-20 bg-[#0B0D17] relative overflow-hidden xl:mb-20 lg:mb-14 mb-10">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-20 w-48 h-48 bg-[#F75126] rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-[#F75126] rounded-full blur-[100px]" />
        </div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 stagger-child relative z-10">
          {stats.map((s, i) => (
            <div key={i} className="stat-card reveal-up text-center border border-white/5 rounded-2xl py-8 px-4 cursor-default">
              <div className="text-4xl md:text-5xl font-black text-[#F75126] mb-2"><AnimatedCounter target={s.val} suffix={s.suffix} /></div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services_sec 2xl:px-55 xl:px-40 lg:px-20 px-4 xl:mb-20 lg:mb-20 mb-10">
        <div className="reveal-up text-center lg:mb-16 mb-8">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[rgba(247,81,38,.08)] border border-[rgba(247,81,38,.18)] px-4 py-1.5 rounded-full mb-4">What We Offer</span>
          <h2 className="title2 text-center">Providing expert <span className="relative inline-block">services</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-child">
          {services.map((svc, i) => (
            <div key={i} className="svc-card reveal-up group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#F75126]/20 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image src={svc.imagePath} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-7">
                <div className="svc-icon-box"><svc.Icon /></div>
                <h3 className="font-bold text-xl text-[#272D4E] mb-2 group-hover:text-[#F75126] transition-colors">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{svc.text}</p>
                <Link href={svc.slug} className="inline-flex items-center gap-2 text-sm font-bold text-[#F75126] hover:gap-3 transition-all duration-200">
                  Read More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14 reveal-up">
          <Link href="/services" className="pulse-btn inline-flex items-center gap-3 bg-[#F75126] text-white px-10 py-5 rounded-full font-bold text-base hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all">
            View All Services <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <AboutUsComp />

      {/* HOW WE WORK */}
      <section className="py-20 px-4 md:px-20 bg-[#ffffff] grid-bg relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal-up text-center mb-16">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[rgba(247,81,38,.08)] border border-[rgba(247,81,38,.18)] px-4 py-1.5 rounded-full mb-4">Our Workflow</span>
            <h2 className="title2">How We <span className="relative inline-block">Work</span></h2>
            <p className="text text-gray-500 max-w-xl mx-auto mt-4">A simple, transparent 4-step process that takes you from idea to a live, growing product.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-child">
            {process.map((p, i) => (
              <div key={i} className="reveal-up group relative bg-white rounded-2xl p-7 border-2 border-gray-100 hover:border-[#F75126] hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <span className="absolute top-4 right-5 text-6xl font-black text-[#F75126]/6 select-none leading-none">{p.step}</span>
                <div className="inline-flex items-center gap-2 bg-[#F75126]/8 border border-[#F75126]/20 rounded-full px-3 py-1 mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#F75126] inline-block" />
                  <span className="text-[11px] font-bold text-[#F75126] uppercase tracking-wider">Step {p.step}</span>
                </div>
                <h3 className="font-bold text-lg text-[#272D4E] mb-2 group-hover:text-[#F75126] transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#f9f9f9] py-20 px-4 md:px-20 xl:mb-20 lg:mb-14 mb-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal-up text-center mb-16">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[rgba(247,81,38,.08)] border border-[rgba(247,81,38,.18)] px-4 py-1.5 rounded-full mb-4">Our Edge</span>
            <h2 className="title2">Why <span className="text-[#F75126]">Pure Design Hub?</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 stagger-child">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>, label: "100% White Hat" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, label: "On-Time Delivery" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, label: "Expert Team" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>, label: "Affordable Pricing" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>, label: "24/7 Support" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>, label: "Proven Results" },
            ].map((item, i) => (
              <div key={i} className="reveal-up group flex flex-col items-center text-center p-6 bg-[#f9f9f9] rounded-2xl border border-gray-100 hover:border-[#F75126]/30 hover:-translate-y-1 hover:shadow-md hover:bg-white transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-full bg-[rgba(247,81,38,.07)] flex items-center justify-center mb-3 group-hover:bg-[#F75126] transition-colors duration-300">
                  <span className="w-5 h-5 text-[#F75126] group-hover:text-white transition-colors [&>svg]:w-full [&>svg]:h-full">{item.icon}</span>
                </div>
                <p className="text-xs font-bold text-[#272D4E] group-hover:text-[#F75126] transition-colors">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO — hover scroll */}
      <section className="services_sec relative 2xl:px-55 xl:px-20 px-4 mb-20 overflow-hidden">
        <div className="reveal-up text-center mb-4">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[rgba(247,81,38,.08)] border border-[rgba(247,81,38,.18)] px-4 py-1.5 rounded-full mb-4">Our Work</span>
          <h2 className="title2 text-center">Explore our <span className="relative inline-block">portfolio</span></h2>
        </div>
        <p className="text lg:my-12 md:my-8 my-4 text-center max-w-2xl mx-auto reveal-up">
          Get the perfect design in any category. Whatever your business need or budget, our team delivers beyond expectations.
        </p>
        <Image src={Circle} alt="circle" width={0} height={0} sizes="100vw" loading="lazy" className="float-anim xl:w-66 xl:h-66 w-24 h-24 object-cover absolute top-0 xl:-left-33 -left-4 -z-1 circle_img" />
        <Image src={Circle} alt="circle" width={0} height={0} sizes="100vw" loading="lazy" className="float-anim-slow xl:w-66 xl:h-66 w-24 h-24 object-cover absolute top-50 xl:-right-10 -right-6 -z-1 circle_img" />
        <PortfolioTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
        <PortfolioSec activeCategory={activeCategory} />
      </section>

      {/* TECH STACK */}
    
      {/* CTA BANNER */}
      <section className="py-20 px-4 md:px-20 bg-[#272D4E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#F75126] rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F75126] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <span className="reveal-up inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[rgba(247,81,38,.12)] border border-[rgba(247,81,38,.25)] px-4 py-1.5 rounded-full mb-6">Ready to Grow?</span>
          <h2 className="reveal-up text-3xl md:text-4xl font-black text-white mb-6 leading-tight">Let's Build Something <span className="text-[#F75126]">Extraordinary</span> Together</h2>
          <p className="reveal-up text-gray-300 text-lg max-w-2xl mx-auto mb-10">From websites to full digital marketing strategies — Pure Design Hub is your one-stop partner for online growth.</p>
          <div className="reveal-up flex flex-wrap items-center justify-center gap-6">
            <Link href="/get-quote" className="pulse-btn bg-[#F75126] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all inline-flex items-center gap-3">
              Get a Free Quote <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
            <Link href="/portfolio" className="border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:border-[#F75126] hover:text-[#F75126] transition-all inline-flex items-center gap-2">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial_sec relative overflow-hidden h-full w-full bg-gradient-to-b from-white via-[#F75126]/12 to-white z-1 xl:px-20 lg:px-10 md:px-8 px-4 xl:py-20 lg:py-10 py-20">
        <div className="reveal-up text-center xl:mb-16 lg:mb-10 mb-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[rgba(247,81,38,.08)] border border-[rgba(247,81,38,.18)] px-4 py-1.5 rounded-full mb-4">Client Reviews</span>
          <h3 className="title2 text-center">What people say about <span className="text-[#F75126]">Pure Design Hub</span></h3>
          <p className="text text-gray-500 max-w-lg mx-auto mt-4">Real stories from real clients — watch their experience with us.</p>
        </div>
        <main className="relative z-10 p-2">
          <div className="absolute top-5 right-[-10%] w-[214px] h-[100px] bg-[url('/assets/images/verticalDotsRed.png')] bg-no-repeat bg-contain bg-center z-[-1]" />
          <div className="absolute -bottom-10 left-[-10%] w-[214px] h-[100px] bg-[url('/assets/images/verticalDotsGreen.png')] bg-no-repeat bg-contain bg-center z-[-1]" />
          <TestimonialSlider />
        </main>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-20 bg-[#F9F9F9] grid-bg relative overflow-hidden">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal-up text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[rgba(247,81,38,.08)] border border-[rgba(247,81,38,.18)] px-4 py-1.5 rounded-full mb-4">FAQ</span>
            <h2 className="title2">Got <span className="relative inline-block">Questions?</span></h2>
            <p className="text text-gray-500 max-w-md mx-auto mt-3">Everything you need to know about working with Pure Design Hub.</p>
          </div>
          <div className="space-y-3 stagger-child">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal-up bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#1a1a2e] pr-4">{faq.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-[#F75126] rotate-180" : "bg-gray-100"}`}>
                    <svg className={`w-4 h-4 ${openFaq === i ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </button>
                {openFaq === i && <div className="faq-body px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal-up">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F75126] text-white px-8 py-4 rounded-full font-bold hover:shadow-[0_12px_30px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all">
              Talk to Us <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
