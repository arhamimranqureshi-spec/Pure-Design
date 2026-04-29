"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Trustpilot from "@/public/assets/images/trustpilot.svg";
import BannerImage1 from "@/public/assets/images/banner_img1.png";
import BannerImage2 from "@/public/assets/images/banner_img2.png";
import BannerBtn1 from "@/public/assets/images/banner_btn1.png";
import BannerBtn2 from "@/public/assets/images/banner_btn2.png";
import BannerBtn3 from "@/public/assets/images/banner_btn3.png";


const HomeBanner = () => {
  return (
    <>
      <div className="relative grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 overflow-hidden 2xl:pl-55 xl:pl-30 lg:pl-14 lg:pr-0 px-4 2xl:py-30 lg:py-20 py-10">
       <div className="bannerLeft flex flex-col lg:order-0 order-1 items-center text-center lg:items-start lg:text-left">

  <h1 className="title1 xl:mb-8 sm:mb-4 mb-2">
    Transforming ideas into <span>impactful digital</span> experiences.
  </h1>

  <p className="text xl:mb-8 sm:mb-4 mb-2">
    pure design hub help businesses grow, connect with their audience, and stand out online.
  </p>

  {/* BUTTON + TRUSTPILOT SAME LINE */}
  <div className="flex items-center justify-center lg:justify-start xl:gap-9 gap-4">

    <Link href="/get-quote" className="globalBtn text-white bg-[#F75126]">
      Lets get Started
    </Link>

    <Link href="">
      <Image
        src={Trustpilot}
        alt="Trustpilot"
        width={0}
        height={0}
        sizes="100vw"
        className="sm:w-auto w-28 h-auto object-cover"
      />
    </Link>

  </div>

</div>
        <div className="bannerRight lg:pl-20 lg:order-1 order-0">
          <Image
            src={BannerImage1}
            title="Banner Image"
            alt="Banner Image"
            width={0}
            height={0}
            sizes="100vw"
            decoding="async"
            loading="lazy"
            className="w-auto h-auto  object-cover object-center absolute lg:left-5 left-12  2xl:top-10 xl:-top-16 lg:-top-10 -top-5 banner_rotateImg banner_rotateImg1"
          />
          <Image
            src={BannerImage2}
            title="Banner Image"
            alt="Banner Image"
            width={0}
            height={0}
            sizes="100vw"
            decoding="async"
            loading="lazy"
            className="md:w-auto md:h-auto w-40 h-40 object-cover object-center absolute 2xl:bottom-34 xl:-bottom-20 md:bottom-0 bottom-2 2xl:left-28 xl:left-16 lg:left-20 md:left-40 left-16 banner_rotateImg banner_rotateImg2"
          />
          <Image
            src={BannerBtn1}
            title="Banner Button"
            alt="Banner Button"
            width={0}
            height={0}
            sizes="100vw"
            decoding="async"
            loading="lazy"
            className="w-auto h-auto object-contain object-center absolute sm:left-1/2 right-12 2xl:top-28 lg:top-10 md:top-0 top-8 banner_rotateImg banner_rotateImg3"
          />
          <Image
            src={BannerBtn2}
            title="Banner Button"
            alt="Banner Button"
            width={0}
            height={0}
            sizes="100vw"
            decoding="async"
            loading="lazy"
            className="w-auto h-auto object-contain object-center absolute 2xl:left-28 md:left-10 left-8 xl:top-1/2 top-30 banner_rotateImg banner_rotateImg4"
          />
          <Image
            src={BannerBtn3}
            title="Banner Button"
            alt="Banner Button"
            width={0}
            height={0}
            sizes="100vw"
            decoding="async"
            loading="lazy"
            className="w-auto h-auto object-contain object-center absolute 2xl:right-40 lg:right-20 md:right-30 right-12 2xl:bottom-58 lg:bottom-24 bottom-20 banner_rotateImg banner_rotateImg5"
          />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
