"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../component/header";
import Accordion from "../component/Accordion";
import ContactUs from "../component/contactUs";
import Footer from "../component/footer";
import TestimonialSlider from "../component/testimonial";
import TestimonialImg1 from "@/public/assets/images/testimonial_img1.png";
import TestimonialImg2 from "@/public/assets/images/testimonial_img2.png";
import TestimonialImg3 from "@/public/assets/images/testimonial_img3.png";
import TestimonialImg4 from "@/public/assets/images/testimonial_img4.png";
import TestimonialImg5 from "@/public/assets/images/testimonial_img5.png";
import TestimonialImg6 from "@/public/assets/images/testimonial_img6.png";
import Link from "next/link";
import Circle from "@/public/assets/images/circle.png";

const faqItems = [
  {
    id: 1,
    question: "What services does PureDesignHub offer?",
    answer:
      "We provide SEO, web development, app development, branding, logo design, content writing, and social media marketing.",
  },
  {
    id: 2,
    question: "How can SEO help my business?",
    answer:
      "SEO improves your website’s visibility on search engines, drives targeted traffic, and increases leads or sales."
  },
  {
    id: 3,
    question: "Do you build custom websites?",
    answer:
      "Yes, we design responsive, user-friendly websites tailored to your business needs and audience.",
  },
  {
    id: 4,
    question: "Can you develop mobile apps for my business?",
    answer:
      "Absolutely. We create apps for iOS and Android that enhance user experience and engagement.",
  },
  {
    id: 5,
    question: "How do you handle branding and logo design?",
    answer:
      "We analyze your business, target audience, and market to create a consistent and memorable brand identity.",
  },
  {
    id: 6,
    question: "What types of content writing do you offer?",
    answer:
      "We create website content, blogs, articles, product descriptions, and other materials that engage your audience.",
  },
  {
    id: 7,
    question: "Can you manage my social media accounts?",
    answer:
      "Yes, we offer social media marketing, including strategy, posting, and engagement to grow your online presence.",
  },
  {
    id: 8,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope, but we provide clear deadlines and regular updates throughout.",
  },
  {
    id: 9,
    question: "Do you offer ongoing SEO and digital marketing services?",
    answer:
      "Yes, we provide continuous SEO, content, and social media services to maintain and grow your online presence.",
  },
  {
    id: 10,
    question: "How do I get started with PureDesignHub?",
    answer:
      "Simply contact us via our website, and we’ll discuss your needs and create a custom plan.",
  },
  {
    id: 11,
    question: "Do you work with businesses outside the U.S.?",
    answer:
      "While our main focus is the U.S., we can work with international clients depending on project requirements.",
  },
  {
    id: 12,
    question: "Will I own the designs and content you create?",
    answer:
      "Yes, all content, websites, logos, and designs are fully owned by the client once delivered.",
  },
    {
    id: 13,
    question: "How do you ensure my website ranks higher in search engines?",
    answer:
      "We use proven SEO strategies, including keyword research, on-page optimization, technical SEO, and quality content creation.",
  },
    {
    id: 14,
    question: "Can you redesign my existing website or brand?",
    answer:
      "Yes, we offer complete redesigns and rebranding services to modernize and improve your online presence.",
  },
    {
    id: 15,
    question: "What makes PureDesignHub different from other agencies?",
    answer:
      "We combine creativity, technical expertise, and a results-driven approach to deliver digital solutions tailored to your goals.",
  },
];

export default function FAQS() {
  return (
    <>
      {/* Banner Section */}
      <section className="simple_banner relative overflow-hidden h-full w-full">
        <Header />
        <div className="2xl:p-60 xl:p-20 lg:py-10 py-10 px-4 text-center absolute left-1/2 top-1/2 -translate-1/2 w-full">
          <h1 className={`title1 lg:mb-8 sm:mb-4 mb-2`}>
            Frequently <span>Asked Question</span>
          </h1>
          <p className="text sm:mb-8 mb-4">
            Find answers to common questions about our services, processes, and how we help businesses grow online effectively.
          </p>
          <Link
            href=""
            className="globalBtn bg-[#F75126] text-white inline-flex"
          >
            Lets get Started
          </Link>
        </div>
      </section>

      {/* Accordion Section */}
      <main className="faqs_accordion relative 2xl:px-70 xl:px-40 lg:px-10 px-4 xl:mb-40 lg:mb-20 mb-10 h-full w-full">
        <Accordion items={faqItems} />
         <Image
          src={Circle}
          title="circle"
          alt="circle"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="w-66 h-66 object-cover object-center absolute -bottom-50 -left-40 z-2 circle_img"
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
          className="w-66 h-66 object-cover object-center absolute -bottom-70 -right-10 z-2 circle_img"
        />
      </main>
      {/* Testimonial Section */}
      <section className="testimonial_sec relative overflow-hidden h-full w-full bg-gradient-to-b from-white via-[#F75126]/12 to-white z-1 xl:px-100 lg:px-60 md:px-20 px-4 xl:py-40 lg:py-20 py-10 xl:mb-40 lg:mb-20 mb-10">
        <h3 className="title2 xl:mb-26 lg:mb-10 mb-5 text-center">
          What people say about Pure Design Hub
        </h3>
        <main className="relative z-10 p-2">
          <div className="absolute top-5 right-[-10%] w-[214px] h-[100px] bg-[url('/assets/images/verticalDotsRed.png')] bg-no-repeat bg-contain bg-center z-[-1]" />
          <div className="absolute -bottom-10 left-[-10%] w-[214px] h-[100px] bg-[url('/assets/images/verticalDotsGreen.png')] bg-no-repeat bg-contain bg-center z-[-1]" />
          <TestimonialSlider />
        </main>

        <Image
          src={TestimonialImg1}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          decoding="async"
          loading="lazy"
          className="xl:w-34 xl:h-34 w-20 h-20 object-cover object-center absolute xl:left-80 left-20 xl:top-56 lg:top-10 top-0 testimonial_img"
        />
        <Image
          src={TestimonialImg2}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-23.5 xl:h-23.5 w-12 h-12 object-cover object-center absolute xl:right-80 right-20 xl:top-60 lg:top-12 top-4 testimonial_img"
        />
        <Image
          src={TestimonialImg3}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-23.5 xl:h-23.5 w-12 h-12 object-cover object-center absolute xl:left-15 left-10 xl:top-100 lg:top-60 top-full testimonial_img"
        />
        <Image
          src={TestimonialImg4}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-38.5 xl:h-38.5 w-24 h-24 object-cover object-center absolute xl:right-30 right-10 xl:top-100 lg:top-60 top-full testimonial_img"
        />
        <Image
          src={TestimonialImg5}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-26 xl:h-26 w-16 h-16 object-cover object-center absolute xl:left-50 left-20 xl:bottom-10 lg:bottom-4 bottom-0 testimonial_img"
        />
        <Image
          src={TestimonialImg6}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="w-22 h-22 object-cover object-center absolute xl:right-50 lg:right-20 lg:bottom-0 -bottom-5 testimonial_img"
        />
      </section>

      {/* Contact Section */}
      <ContactUs />

      {/* Footer Sectio */}
      <Footer />
    </>
  );
}
