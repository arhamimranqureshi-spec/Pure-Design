"use client";

import React, { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "@/public/assets/images/left_arrow.svg";
import ArrowRight from "@/public/assets/images/right_arrow.svg";

type ImageItem = {
  src: string;
  category: string[];
  alt?: string;
};

const images: ImageItem[] = [
  {
    src: "/assets/images/portfolio_img1.png",
    category: ["E-Store"],
  },
  {
    src: "/assets/images/portfolio_img2.png",
    category: ["E-Store"],
  },
  {
    src: "/assets/images/portfolio_img3.png",
    category: ["E-Store"],
  },
  {
    src: "/assets/images/portfolio_img4.png",
    category: ["E-Store"],
  },
  { src: "/assets/images/portfolio_img5.png", category: ["E-Store", "Logo"] },
  { src: "/assets/images/portfolio_img6.png", category: ["E-Store", "Logo"] },
  {
    src: "/assets/images/portfolio_img7.png",
    category: ["E-Store", "Web Design"],
  },
  { src: "/assets/images/portfolio_img8.png", category: ["E-Store", "Logo"] },
  {
    src: "/assets/images/portfolio_img9.png",
    category: ["E-Store", "Web Design"],
  },
  {
    src: "/assets/images/branding_img1.png",
    category: ["Branding"],
  },
  {
    src: "/assets/images/branding_img2.png",
    category: ["Branding"],
  },
  {
    src: "/assets/images/branding_img3.png",
    category: ["Branding"],
  },
  {
    src: "/assets/images/branding_img4.png",
    category: ["Branding"],
  },
  { src: "/assets/images/branding_img5.png", category: ["Branding"] },
  { src: "/assets/images/branding_img6.png", category: ["Branding"] },
  {
    src: "/assets/images/branding_img7.png",
    category: ["Branding"],
  },
  { src: "/assets/images/branding_img8.png", category: ["Branding"] },
  {
    src: "/assets/images/branding_img9.png",
    category: ["Branding"],
  },
   {
    src: "/assets/images/app_img1.png",
    category: ["Mobile Apps"],
  },
  {
    src: "/assets/images/app_img2.png",
    category: ["Mobile Apps"],
  },
  {
    src: "/assets/images/app_img3.png",
    category: ["Mobile Apps"],
  },
  {
    src: "/assets/images/app_img4.png",
    category: ["Mobile Apps"],
  },
  { src: "/assets/images/app_img5.png", category: ["Mobile Apps"] },
  { src: "/assets/images/app_img6.png", category: ["Mobile Apps"] },
  {
    src: "/assets/images/app_img7.png",
    category: ["Mobile Apps"],
  },
  { src: "/assets/images/app_img8.png", category: ["Mobile Apps"] },
  {
    src: "/assets/images/app_img9.png",
    category: ["Mobile Apps"],
  },
];

interface PortfolioGalleryProps {
  /** If omitted, the gallery shows all images */
  activeCategory?: string;
}

export default function PortfolioGallery({
  activeCategory,
}: PortfolioGalleryProps) {
  useEffect(() => {
    NativeFancybox.bind("[data-fancybox='gallery']");
    return () => NativeFancybox.unbind("[data-fancybox='gallery']");
  }, []);

  const filteredImages = activeCategory
    ? images.filter((img) => img.category.includes(activeCategory))
    : images; // ← show all when no category

  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-15 lg:gap-5 gap-4">
        {filteredImages.map((img, idx) => (
          <Link
            key={idx}
            href={img.src}
            data-fancybox="gallery"
            data-caption={img.alt || img.category.join(", ")}
          >
            <Image
              src={img.src}
              alt={img.alt || img.category.join(", ")}
              title={img.category.join(", ")}
              width={0}
              height={0}
              loading="lazy"
              sizes="100vw"
              className={`w-full ${activeCategory =="E-Store" ? '2xl:h-155' : '2xl:h-120' }  lg:h-100 md:h-80 h-60 object-cover object-top rounded hover:scale-102 transition-transform duration-300 shadow-sm`}
            />
          </Link>
        ))}
      </div>
      {/* Footer buttons same as before */}
      <div className="flex justify-center items-center gap-10 xl:mt-20 md:mt-10 mt-5">
        <Link href="/portfolio" className="globalBtn text-white bg-[#F75126]">
          See More
        </Link>
        <div className="flex items-center gap-5">
          <button>
            <Image src={ArrowLeft} alt="Back" className="w-9 h-3.5" />
          </button>
          <button>
            <Image src={ArrowRight} alt="Next" className="w-13 h-5.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
