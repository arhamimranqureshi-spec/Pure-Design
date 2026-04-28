// components/TestimonialSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

import Coma from "@/public/assets/images/coma.png"; // Replace with your actual path

const testimonials = [
  {
    id: 1,
    text: "PureDesignHub helped us rebuild our site from the ground up. The team listened, delivered on time, and kept everything clear. We saw better visibility within a few weeks and finally feel confident sending customers to our website.",
  },
  {
    id: 2,
    text: "We hired them for SEO and content writing. The research was solid, and the content actually answered what our customers were searching for. Our traffic and leads both improved. Working with them has been simple and productive.",
  },
  {
    id: 3,
     text: "I needed a new brand identity and logo for my small business. They guided me through every step and gave me designs that felt right for my audience. It was smooth from start to finish.",
  },
  {
    id: 4,
     text: "We reached out for app development after another agency stalled on our project. PureDesignHub took over, cleaned up the mess, and delivered an app that works well for our users. Clear communication and a steady pace all the way.",
  },
  {
    id: 5,
     text: "Our company used their social media marketing service. They understood our tone, posted with consistency, and helped us connect with the right people. We started seeing better engagement within the first month.",
  },
];

export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Pagination,Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
     autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      spaceBetween={30}
      slidesPerView={1}
      className="w-full max-w-[900px] mx-auto !p-1"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="bg-white shadow-sm rounded-[20px] xl:px-[82px] px-10 xl:pt-[106px] pt-20 xl:pb-[88px] pb-10 relative text-center">
            <Image
              src={Coma}
              alt="Coma icon"
              width={0}
              height={0}
              className="xl:w-[234px] xl:h-[168px] w-[150px] h-[100px] object-contain object-center absolute left-1/2 -translate-x-1/2 top-7"
            />
            <p className="xl:text-[26px] md:text-[18px] text text-[#94A2B3]">
              {testimonial.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
