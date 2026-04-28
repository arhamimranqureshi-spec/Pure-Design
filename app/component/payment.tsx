"use client";
import React from "react";
import Image from "next/image";
import Header from "../component/header";
import GlobalBanner from "../component/globalBanner";
import Circle from "@/public/assets/images/circle.png";
import CardImg1 from "@/public/assets/images/card_img1.png";
import CardImg2 from "@/public/assets/images/card_img2.png";
import Link from "next/link";
import Footer from "../component/footer";

const NewContactPage = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="globalBanner_sec relative overflow-hidden h-full w-full xl:mb-40 lg:mb-20 mb-10 bg-linear-to-b from-[#E5EFFF] from-40% to-[#FB591E] to-100%">
        <Header />
        <GlobalBanner
          title={
            <>
              Reach Out for <span>Digital Support</span>
            </>
          }
          text="We provide personalized solutions to grow your brand, boost visibility, and achieve measurable online results."
          imagePath="/assets/images/contact_banner.png"
        />
      </section>

      {/* Cards Section */}
      <section className="cards_sec relative xl:py-40 lg:py-20 py-10 px-4 flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* Card 1 */}
        <div className="card bg-white shadow-xl rounded-2xl p-6 relative max-w-sm w-full flex flex-col items-center text-center">
          {/* <Image src={CardImg1} alt="Card 1" width={150} height={150} className="mb-6" /> */}
          <h3 className="text-xl font-semibold mb-2">Step 1: Consultation</h3>
          <p className="text-gray-600">
            Share your goals and requirements with us. We will analyze and suggest the best strategy.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-white shadow-xl rounded-2xl p-6 relative max-w-sm w-full flex flex-col items-center text-center">
          {/* <Image src={CardImg2} alt="Card 2" width={150} height={150} className="mb-6" /> */}
          <h3 className="text-xl font-semibold mb-2">Step 2: Strategy Planning</h3>
          <p className="text-gray-600">
            We design a roadmap tailored to your business and digital objectives to ensure measurable results.
          </p>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="steps_sec relative xl:py-40 lg:py-20 py-10 px-4 bg-[#F5F7FF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="step bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <span className="text-[#F75126] text-3xl font-bold mb-4">1</span>
            <h4 className="font-semibold mb-2">Plan</h4>
            <p className="text-gray-600">We analyze your needs and create a tailored strategy.</p>
          </div>
          <div className="step bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <span className="text-[#F75126] text-3xl font-bold mb-4">2</span>
            <h4 className="font-semibold mb-2">Execute</h4>
            <p className="text-gray-600">Our team implements the plan efficiently and effectively.</p>
          </div>
          <div className="step bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <span className="text-[#F75126] text-3xl font-bold mb-4">3</span>
            <h4 className="font-semibold mb-2">Grow</h4>
            <p className="text-gray-600">Monitor results, optimize strategies, and grow your brand online.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact_form_sec relative xl:py-40 lg:py-20 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F75126]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F75126]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F75126]"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#F75126]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#F75126] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#d9441f] transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <Image
          src={Circle}
          alt="circle"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-154 xl:h-154 w-66 h-66 object-cover object-center absolute -bottom-60 xl:-right-28 -z-1 circle_img"
        />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default NewContactPage;
