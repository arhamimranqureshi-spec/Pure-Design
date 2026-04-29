import Image from "next/image";
import React from "react";
import Link from "next/link";
import AboutImg1 from "@/public/assets/images/about_img1.png";
import AboutImg2 from "@/public/assets/images/about_img2.png";
import Circle from "@/public/assets/images/circle.png";
import SmallCircle from "@/public/assets/images/smallCircle.png";
import VerticalDots from "@/public/assets/images/vertical_dots.png";
import HorizontalDots from "@/public/assets/images/horizontal_dots.png";

export default function AboutUs() {
  return (
    <>
      <section className="about_sec relative 2xl:px-55 xl:px-40  lg:px-20 px-4 py-10">
        <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-4 relative mb-14">
          <div className="md:w-[430px] w-50 md:h-[548px] h-70 shrink-0 relative z-1">
            <Image
              src={AboutImg1}
              title="Who We Are"
              alt="Who We Are"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <Image
              src={Circle}
              title="circle"
              alt="circle"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-100 h-100 object-cover object-center absolute -bottom-10 -left-20 -z-1 about_side_img"
            />
            <Image
              src={SmallCircle}
              title="circle"
              alt="circle"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-[65px] h-[65px] object-cover object-center absolute top-24 -left-12 -z-1 about_side_img"
            />
            <Image
              src={VerticalDots}
              title="circle"
              alt="circle"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-[214px] h-[472px] object-cover object-center absolute -bottom-1/2 -translate-y-1/3 -left-16 -z-1 about_side_img"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <h3 className="title3 !text-white text-center lg:text-left">
              Driven by passion, defined by excellence.
            </h3>
            <p className="text !text-white mb-6 text-center lg:text-left">
              PureDesignHub brings ideas to life with work that feels thoughtful
              and dependable. Every project gets careful attention, clear
              communication, and a steady focus on what helps clients grow. The
              goal is simple: deliver smart digital solutions that make
              businesses stronger and help them stand out.{" "}
            </p>
            <Link
              href="/about-us"
              className="pulse-btn bg-[#000000] mx-auto lg:mx-0 text-white px-8 py-4 rounded-full font-semibold text-base inline-block w-fit hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all items-center gap-3 group"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center md:gap-10 gap-5 relative">
          <div className="flex flex-col gap-2 lg:order-0 order-1">
            <h3 className="title3 !text-white text-center lg:text-left">
              From concept to creation, we make it real.
            </h3>
            <p className="text !text-white mb-6 text-center lg:text-left">
              we turning ideas into practical digital solutions. Our team
              listens, plans, and builds with care so clients get results they
              can trust. Whether it’s a new brand, a custom site, or a full
              strategy, we create work that supports real growth and clear
              goals.
            </p>
           <Link
              href="/about-us"
              className="pulse-btn bg-[#000000] mx-auto lg:mx-0 text-white px-8 py-4 rounded-full font-semibold text-base inline-block w-fit hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all items-center gap-3 group"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-[430px] w-50 md:h-[548px] h-70 shrink-0 relative z-1 lg:order-1 order-0">
            <Image
              src={AboutImg2}
              title="Who We Are"
              alt="Who We Are"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <Image
              src={Circle}
              title="circle"
              alt="circle"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-66 h-66 object-cover object-center absolute -top-5 -right-24 -z-1 about_side_img"
            />
            <Image
              src={SmallCircle}
              title="circle"
              alt="circle"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-[65px] h-[65px] object-cover object-center absolute top-0 left-30 -z-1 about_side_img"
            />
            <Image
              src={HorizontalDots}
              title="circle"
              alt="circle"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-[472px] h-[214px] object-cover object-center absolute top-1/2 -translate-y-1/2 -right-30 -z-1 about_side_img"
            />
          </div>
        </div>
      </section>
    </>
  );
}
