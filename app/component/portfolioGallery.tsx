"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import Circle from "@/public/assets/images/circle.png";
import Header from "@/app/component/header"; // Importing the Header component
import Footer from "../component/footer";

const categories = ["Web Design", "Mobile Apps", "Branding", "Logo"] as const;

type Category = (typeof categories)[number];

type PortfolioItem = {
  cat: Category;
  src: string;
  label: string;
  tag: string;
};

const portfolioItems: PortfolioItem[] = [
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

function PortfolioTabs({
  active,
  onChange,
}: {
  active: Category;
  onChange: (category: Category) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 lg:mb-12 mb-8">
      {categories.map((cat) => {
        const isActive = cat === active;

        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`portfolio-tab relative px-6 py-2.5 rounded-full text-sm font-bold tracking-wide border-2 transition-all duration-300 overflow-hidden
              ${
                isActive
                  ? "bg-[#F75126] border-[#F75126] text-white shadow-[0_8px_24px_rgba(247,81,38,0.35)] scale-105"
                  : "bg-white border-gray-200 text-gray-600 hover:border-[#F75126] hover:text-[#F75126]"
              }`}
          >
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Lightbox toggle function
  const toggleLightbox = () => {
    setIsLightboxOpen(!isLightboxOpen);
  };

  return (
    <>
      <div
        className={`port-card group relative rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#F75126]/30 hover:shadow-[0_20px_50px_rgba(247,81,38,0.15)] transition-all duration-500 cursor-pointer ${
          item.cat === "Web Design" ? "h-[650px] overflow-y-scroll" : "h-[350px]"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden bg-black/5">
          <div className="h-full w-full overflow-hidden">
            <img
              src={item.src}
              alt={item.label || item.tag}
              className={`w-full ${
                item.cat === "Web Design" ? "h-auto group-hover:-translate-y-[60%]" : "h-full"
              } block object-cover transition-transform duration-[9000ms] ease-linear`}
              onClick={toggleLightbox}
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#F75126] block mb-1">
            {item.tag}
          </span>

          {item.label && (
            <span className="font-bold text-white text-base">{item.label}</span>
          )}
        </div>

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

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={toggleLightbox}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on clicking the image
          >
            <img
              src={item.src}
              alt={item.tag}
              className="max-w-full max-h-full object-cover object-center" // Ensure full cover with aspect ratio
            />
            <button
              onClick={toggleLightbox}
              className="absolute top-2 right-2 text-white text-xl bg-transparent border-0"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function PortfolioGrid({ activeCategory }: { activeCategory: Category }) {
  const shownItems = useMemo(() => {
    const filtered = portfolioItems.filter((item) => item.cat === activeCategory);
    return filtered.length > 0 ? filtered : portfolioItems;
  }, [activeCategory]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shownItems.map((item, index) => (
        <PortfolioCard key={`${item.cat}-${item.src}-${index}`} item={item} />
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("Web Design");

  return (
    <> {/* Adding the Header component here */}
      <style jsx global>{`
        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        .float-anim {
          animation: floatY 5s ease-in-out infinite;
        }

        .float-anim-slow {
          animation: floatY 7s ease-in-out infinite;
        }

        .port-card {
          overflow: hidden;
        }
      `}</style>

      <section className="services_sec relative 2xl:px-55 xl:px-20 px-4 mb-20 py-10 overflow-hidden">
        <div className="text-center mb-4">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[rgba(247,81,38,.08)] border border-[rgba(247,81,38,.18)] px-4 py-1.5 rounded-full mb-4">
            Our Work
          </span>

          <h2 className="title2 text-center">
            Explore our{" "}
            <span className="relative inline-block">portfolio</span>
          </h2>
        </div>

        <p className="text lg:my-12 md:my-8 my-4 text-center max-w-2xl mx-auto">
          Get the perfect design in any category. Whatever your business need or
          budget, our team delivers beyond expectations.
        </p>

        <Image
          src={Circle}
          alt="circle"
          width={260}
          height={260}
          loading="lazy"
          className="float-anim xl:w-66 xl:h-66 w-24 h-24 object-cover absolute top-0 xl:-left-33 -left-4 -z-1 circle_img"
        />

        <Image
          src={Circle}
          alt="circle"
          width={260}
          height={260}
          loading="lazy"
          className="float-anim-slow xl:w-66 xl:h-66 w-24 h-24 object-cover absolute top-50 xl:-right-10 -right-6 -z-1 circle_img"
        />

        <PortfolioTabs active={activeCategory} onChange={setActiveCategory} />

        <PortfolioGrid activeCategory={activeCategory} />
      </section>
    </>
  );
}