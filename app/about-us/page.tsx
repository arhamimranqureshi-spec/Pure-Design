"use client";

import React from "react";
import Image from "next/image";
import Header from "../component/header";
import GlobalBanner from "../component/globalBanner";
import PureDesignHub1 from "@/public/assets/images/pureDesignHub_img1.png";
import PureDesignHub2 from "@/public/assets/images/pureDesignHub_img2.png";
import Link from "next/link";
import ContactUs from "../component/contactUs";
import Footer from "../component/footer";
import AboutUsComp from "../component/AboutUsComp";

const AboutUs = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="globalBanner_sec relative overflow-hidden h-full w-full xl:mb-40 lg:mb-20 mb-10 bg-linear-to-b from-[#E5EFFF] from-40% to-[#FB591E] to-100% ">
        <Header />
        <GlobalBanner
          title={
            <>
             Where <span>Creativity</span> Meets Functionality.
            </>
          }
          text=""
          imagePath="/assets/images/about_banner.png"
        />
      </section>

      {/* Pure Design Hub Section */}
      <section className="pureDesignHub_hub relative overflow-hidden h-full w-full xl:mb-40 lg:mb-20 mb-10 2xl:px-55 2xl:py-30 xl:p-30 lg:py-20 py-10 px-4">
         <h2 className="title2 text-center lg:mb-22 md:mb-16 mb-5">
          Welcome to <span>Pure Design Hub <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            >
              <path
                d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6
               c1.4,32.4,52.2,54,142.6,63.7
               c66.2,7.1,212.2,7.5,273.5-8.3
               c64.4-16.6,104.3-57.6,33.8-98.2
               C386.7-4.9,179.4-1.4,126.3,20.7"
                fill="none"
                stroke="#f75126"
                strokeWidth="6"
                strokeLinecap="round"
                className="animated-path"
              />
            </svg></span>
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-10 lg:gap-5 gap-4 lg:mb-0 mb-10">
          {/* Image */}
          <div className="relative w-full xl:h-[500px] md:h-[400px] sm:h-[300px] h-[200px] rounded-[20px] overflow-hidden">
            <Image
              src={PureDesignHub1}
              alt="Pure Design Hub"
              title="Pure Design Hub"
              width={0}
              height={0}
              fill
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-full h-full object-fill object-center"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text mb-4">
              We believe that a website should do more than just exist online—it
              should tell your story, capture attention, and inspire action. At
              Pure Design Hub, our mission is to design digital experiences that
              are clean, modern, and impactful, helping businesses stand out in
              today’s fast-moving digital world.
            </p>
            <p className="text lg:mb-10 mb-5">
              Our team is passionate about blending innovative design with smart
              strategy. Every project we take on is built around your brand
              identity, your audience, and your goals. From elegant portfolios
              to high-performing e-commerce stores, we ensure every website we
              create is responsive, user-friendly, and optimized for success.
            </p>
            <Link
              href="/get-quote"
              className="globalBtn bg-[#F75126] text-white inline-flex"
            >
              Let’s Talk
            </Link>
          </div>
        </div>{" "}
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-10 lg:gap-5 gap-4">
          {/* Text Content */}
          <div className="lg:order-0 order-1">
            <h3 className="title3 !text-[#F75126] mb-2">What we do</h3>
            <p className="text mb-4">
              We are your partner in digital excellence. Our company was founded
              with the vision of empowering businesses through innovative
              solutions. We specialize in providing a wide range of services,
              including web design, mobile app development, branding, content
              writing, social media marketing, and SEO. Our mission is to
              deliver exceptional results that drive growth and exceed
              expectations.
            </p>
            <h3 className="title3 !text-[#F75126] mb-2">Our Approach</h3>
            <p className="text">
              We believe in taking a client-centric approach focused on
              collaboration, creativity, and excellence. We work closely with
              our clients to understand their unique goals and challenges,
              ensuring that our solutions are tailored to meet their specific
              needs. Whether you are a startup looking to establish your brand
              or a large enterprise aiming to optimize your digital presence, we
              have the expertise and passion to help you succeed.
            </p>
          </div>
          {/* Image */}
          <div className="relative w-full xl:h-[450px] md:h-[400px] sm:h-[300px] h-[200px] rounded-[20px] overflow-hidden lg:order-1 order-0">
            <Image
              src={PureDesignHub2}
              alt="Pure Design Hub"
              title="Pure Design Hub"
              width={0}
              height={0}
              fill
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-full h-full object-fill object-center"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutUsComp />

      {/* Contact Section */}
      <ContactUs />

      {/* Footer Sectio */}
      <Footer />
    </>
  );
};

export default AboutUs;
