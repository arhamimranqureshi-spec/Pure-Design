"use client";

import React from "react";
import Image from "next/image";
import Header from "../component/header";
import GlobalBanner from "../component/globalBanner";
import PureDesignHub1 from "@/public/assets/images/pureDesignHub_img1.png";
import PureDesignHub2 from "@/public/assets/images/pureDesignHub_img2.png";
import Link from "next/link";
import ContactUsComp from "../component/contactUs";
import Footer from "../component/footer";
import Circle from "@/public/assets/images/circle.png";

const ContactUs = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="globalBanner_sec relative overflow-hidden h-full w-full xl:mb-40 lg:mb-20 mb-10 bg-linear-to-b from-[#E5EFFF] from-40% to-[#FB591E] to-100% ">
        <Header />
        <GlobalBanner
          title={
            <>
              Let’s Talk About <span>Digital Goals</span>
            </>
          }
          text="we convert your digital goals and turn them into strategies that grow your brand, increase visibility, and deliver measurable results online."
          imagePath="/assets/images/contact_banner.png"
        />
      </section>

      {/* Contact Section */}
      <section className="contactpage_sec relative xl:pb-40 lg:pb-20 pb-10 overflow-hidden">
        <ContactUsComp
          title={
            <>
              Get in touch any time{" "}
              <span>
                for any help!{" "}
                <svg
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
                </svg>
              </span>
            </>
          }
          text=""
          imagePath="/assets/images/contactFormImg.png"
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
          className="xl:w-154 xl:h-154 w-66 h-66 object-cover object-center absolute -bottom-60 xl:-right-28 -right-10 -z-1 circle_img"
        />
      </section>

      {/* We Are Here Section */}
      <section
        className="weHere_sec md:mb-10 mb-4 2xl:px-55 xl:px-40 lg:px-20 px-4
"
      >
        <div className="max-w-80 2xl:pt-55 md:pt-40 pt-10">
          <h2 className="title2 md:mb-12 mb-4">
            We are here
            <span>
              to help you{" "}
            </span>
          </h2>
          <Link href="/get-quote" className="globalBtn text-white bg-[#F75126] inline-flex">
            Lets get Started
          </Link>
        </div>
        <Image
          src={Circle}
          title="circle"
          alt="circle"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-116 xl:h-116 w-66 h-66 object-cover object-center absolute -bottom-16 xl:-left-58 -left-32 -z-1 circle_img"
        />
      </section>

      {/* Footer Sectio */}
      <Footer />
    </>
  );
};

export default ContactUs;
