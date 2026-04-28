"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Link from "next/link";
import ApproachImage from "@/public/assets/images/approach_img.png";
import Circle from "@/public/assets/images/circle.png";
import BlogImg1 from "@/public/assets/images/blog1.png";
import BlogImg2 from "@/public/assets/images/blog2.png";
import BlogImg3 from "@/public/assets/images/blog3.png";
import BlogImg4 from "@/public/assets/images/blog4.png";
import BlogImg5 from "@/public/assets/images/blog5.png";
import BlogImg6 from "@/public/assets/images/blog6.png";
import BlogDetailsImage from "@/public/assets/images/blogDetails-bg.png";
import BCommentsImage1 from "@/public/assets/images/commentImg1.png";
import BCommentsImage2 from "@/public/assets/images/commentImg2.png";
import BCommentsImage3 from "@/public/assets/images/commentImg3.png";
import SocialIamge1 from "@/public/assets/images/socialImg1.png";
import SocialIamge2 from "@/public/assets/images/socialImg2.png";
import SocialIamge3 from "@/public/assets/images/socialImg3.png";
import SocialIamge4 from "@/public/assets/images/socialImg4.png";

export default function BlogDetails() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error when user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // ✅ If valid, proceed (e.g., send to API)
    console.log("Form submitted successfully:", form);

    // Optionally reset form
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <>
      {/* Banner Section */}
      <section className="simple_banner relative overflow-hidden h-full w-full">
        <Header />
        <div className="2xl:p-60 xl:p-20 lg:py-10 py-10 px-4 text-center absolute left-1/2 top-1/2 -translate-1/2 w-full">
          <h1 className={`title1 lg:mb-8 sm:mb-4 mb-2`}>
            How to Bring fold<br></br>
            <span>to your Startup</span>
          </h1>
          <Link
            href="/get-quote"
            className="globalBtn bg-[#F75126] text-white inline-flex"
          >
            Lets get Started
          </Link>
        </div>
      </section>

      <section className="blogDetails_sec relative 2xl:px-70 xl:px-20 lg:px-10 px-4 xl:my-40 lg:my-20 my-10 h-full w-full overflow-hidden">
        {/* Background section with overlay */}
        <div
          className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] mb-8 bg-cover bg-center rounded-[30px] overflow-hidden"
          style={{
            backgroundImage: `url('/assets/images/blogDetails-bg.png')`,
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center justify-center gap-1 sm:text-base text-sm text-[#033161]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
            <li>/</li>
            <li aria-current="page" className="font-semibold text-[#F75126]">
              How to Bring Fold to Your Startup
            </li>
          </ol>
        </nav>
        <div className="w-full h-px bg-[#ACACAC] my-5" />
        <div className="blogDetails_Content flex md:flex-row flex-col items-start justify-between gap-10">
          <div className="left_contect grow md:order-0 order-1">
            <p className="sm:text-base text-sm text-black mb-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum .
            </p>
            <Image
              src={BlogImg6}
              title="Blog Details"
              alt="Blog Details"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-full md:h-[440px] h-[300px] object-cover object-center mb-16"
            />
            <h2 className="title2 mb-8">Lorem Ipsum is simply dummy</h2>
            <p className="sm:text-base text-sm text-black mb-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum .
            </p>
            <Image
              src={BlogImg5}
              title="Blog Details"
              alt="Blog Details"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-full md:h-[440px] h-[300px] object-cover object-center mb-10"
            />
            <p className="sm:text-base text-sm text-black mb-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum .
            </p>
            <div className="blog_writter flex items-center gap-4 max-w-[330px] ml-auto">
              <Image
                src={BCommentsImage1}
                title="Carolyne Vesely"
                alt="Carolyne Vesely"
                width={0}
                height={0}
                sizes="100vw"
                decoding="async"
                loading="lazy"
                className="w-15 h-15 object-cover object-center rounded-full"
              />
              <div>
                <p className="sm:text-base text-sm font-bold text-[#033161]">
                  Written by{" "}
                  <span className="text-[#FF5723]">“ Carolyne Vesely”</span>
                </p>
                <p className="sm:text-sm text-xs text-[#263238]">
                  Carolyne is an Emmy-winning art director with expertise in 2D
                </p>
              </div>
            </div>
            <p className="sm:text-base text-sm text-[#033161] font-bold">
              Comments
            </p>
            <div className="w-full h-px bg-[#FF5723] mt-3 mb-5" />
            <div className="comments_wrapper flex items-center gap-4">
              <div className="flex flex-col items-center gap-2.5 shrink-0">
                <Image
                  src={BCommentsImage2}
                  title="Mike Lord"
                  alt="Mike Lord"
                  width={0}
                  height={0}
                  sizes="100vw"
                  decoding="async"
                  loading="lazy"
                  className="w-15 h-15 object-cover object-center rounded-full"
                />
                <p className="sm:text-sm text-xs text-[#FF5723] font-medium">
                  Mike Lord
                </p>
              </div>
              <div>
                <p className="sm:text-base text-sm text-black mb-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex items-center justify-between gap-4">
                  <span className="sm:text-sm text-xs text-[#033161] font-medium">
                    Reply
                  </span>
                  <span className="sm:text-sm text-xs text-[#033161] font-medium">
                    December 12, 2022
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-[#ACACAC] my-5" />
            <div className="comments_wrapper flex items-center gap-4 md:mb-20 mb-10">
              <div className="flex flex-col items-center gap-2.5 shrink-0">
                <Image
                  src={BCommentsImage3}
                  title="Mike Lord"
                  alt="Mike Lord"
                  width={0}
                  height={0}
                  sizes="100vw"
                  decoding="async"
                  loading="lazy"
                  className="w-15 h-15 object-cover object-center rounded-full"
                />
                <p className="sm:text-sm text-xs text-[#FF5723] font-medium">
                  Mike Lord
                </p>
              </div>
              <div>
                <p className="sm:text-base text-sm text-black mb-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex items-center justify-between gap-4">
                  <span className="sm:text-sm text-xs text-[#033161] font-medium">
                    Reply
                  </span>
                  <span className="sm:text-sm text-xs text-[#033161] font-medium">
                    December 12, 2022
                  </span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h3 className="lg:text-[45px] md:text-[30px] text-[24px] lg:leading-12 md:leading-8 leading-6 text-[#033161] font-bold text-center mb-3">
                Leave a comment
              </h3>
              <div className="flex items-center gap-4 lg:flex-row flex-col">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="rounded-[10px] bg-[#F1F1F1] py-4 px-[22px] w-full border border-[#F1F1F1] focus:border-[#FF5723] outline-0"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="rounded-[10px] bg-[#F1F1F1] py-4 px-[22px] w-full border border-[#F1F1F1] focus:border-[#FF5723] outline-0"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="w-full">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us more about your project"
                  className="rounded-[10px] bg-[#F1F1F1] py-4 px-[22px] w-full border border-[#F1F1F1] focus:border-[#FF5723] outline-0 resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="flex items-center gap-6 sm:flex-row flex-col">
                <button
                  type="submit"
                  className="rounded-lg shadow-lg bg-[#F75126] text-white inline-flex w-fit sm:!text-base !text-sm md:px-10 px-5 md:py-3.5 py-2 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="right_content shrink-0 md:w-[300px] w-full flex flex-col md:gap-28 gap-10 p-2 md:order-1 order-0">
            <div className="bg-[#F9F9F9] shadow-md rounded-[20px] pt-5 pb-20 px-2 flex flex-col gap-5">
              {/* Social Icons */}
              <div className="flex justify-center gap-4 text-[#f85c70]">
                <Link href="https://www.facebook.com/profile.php?id=61577469429417">
                  <Image
                    src={SocialIamge1}
                    title="Facebook"
                    alt="Facebook"
                    width={0}
                    height={0}
                    sizes="100vw"
                    decoding="async"
                    loading="lazy"
                    className="w-auto h-[27px] object-contain object-center"
                  />
                </Link>
                <Link href="https://www.instagram.com/puredesignhubofficial/">
                  <Image
                    src={SocialIamge2}
                    title="Insta"
                    alt="Insta"
                    width={0}
                    height={0}
                    sizes="100vw"
                    decoding="async"
                    loading="lazy"
                    className="w-auto h-[27px] object-contain object-center"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={SocialIamge3}
                    title="Twitter"
                    alt="Twitter"
                    width={0}
                    height={0}
                    sizes="100vw"
                    decoding="async"
                    loading="lazy"
                    className="w-auto h-[27px] object-contain object-center"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={SocialIamge4}
                    title="Pixcel"
                    alt="Pixcel"
                    width={0}
                    height={0}
                    sizes="100vw"
                    decoding="async"
                    loading="lazy"
                    className="w-auto h-[27px] object-contain object-center"
                  />
                </Link>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-lg border-2 border-[#E1E1E1] px-4 py-2 text-sm focus:outline-none focus:border-[#FF5723]"
                />
                <button className="absolute right-3 top-2.5 text-[#FF5723]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </div>

              {/* Category Section */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Category</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="bg-[#FFE7DA] text-[#FF5723] font-medium px-2 py-1 cursor-pointer">
                    Website design
                  </li>
                  <li className="hover:text-[#FF5723] cursor-pointer">
                    Logo design
                  </li>
                  <li className="hover:text-[#FF5723] cursor-pointer">
                    Social media marketing
                  </li>
                  <li className="hover:text-[#FF5723] cursor-pointer">
                    Branding
                  </li>
                </ul>
              </div>

              {/* Archives Section */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Archives</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="hover:text-[#FF5723] cursor-pointer">
                    September 2025
                  </li>
                  <li className="hover:text-[#FF5723] cursor-pointer">
                    December 2025
                  </li>
                  <li className="hover:text-[#FF5723] cursor-pointer">
                    June 2025
                  </li>
                  <li className="hover:text-[#FF5723] cursor-pointer">
                    August 2025
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="md:text-[35px] text-[24px] text-[#033161] font-bold md:mb-8 mb-4">
                Releted Blogs
              </p>
              <Link
                href="/blogs/blog-details"
                className="card_div relative overflow-hidden h-full w-full mb-12"
              >
                <Image
                  src={BlogImg1}
                  title="Blogs"
                  alt="Blogs"
                  width={0}
                  height={0}
                  sizes="100vw"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto mb-2"
                />
                <div className="px-6 py-1 rounded-[80px] bg-[#FF5723] text-white absolute left-3 top-5">
                  Logo
                </div>
                <div className="flex gap-2.5 items-center mb-2">
                  <span className="w-10 h-px bg-[#FF5723]"></span>
                  <p className="text !text-black">By Admin</p>
                </div>
                <h3 className="md:text-[24px] text-[20px] md:leading-6 leading-5 text-[#033161] font-bold mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <div className="flex gap-2.5 items-center">
                  <svg
                    width="20"
                    height="23"
                    viewBox="0 0 20 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.65441 22.2746C1.21324 22.2746 0.827206 22.1092 0.496324 21.7783C0.165441 21.4474 0 21.0614 0 20.6202V3.52464C0 3.08347 0.165441 2.69744 0.496324 2.36656C0.827206 2.03567 1.21324 1.87023 1.65441 1.87023H3.44669V0.21582H5.23897V1.87023H14.614V0.21582H16.4062V1.87023H18.1985C18.6397 1.87023 19.0257 2.03567 19.3566 2.36656C19.6875 2.69744 19.8529 3.08347 19.8529 3.52464V20.6202C19.8529 21.0614 19.6875 21.4474 19.3566 21.7783C19.0257 22.1092 18.6397 22.2746 18.1985 22.2746H1.65441ZM1.65441 20.6202H18.1985V8.76361H1.65441V20.6202ZM1.65441 7.1092H18.1985V3.52464H1.65441V7.1092ZM1.65441 7.1092V3.52464V7.1092ZM9.92647 13.4511C9.61397 13.4511 9.35202 13.3454 9.14062 13.134C8.92923 12.9226 8.82353 12.6607 8.82353 12.3482C8.82353 12.0357 8.92923 11.7737 9.14062 11.5623C9.35202 11.3509 9.61397 11.2452 9.92647 11.2452C10.239 11.2452 10.5009 11.3509 10.7123 11.5623C10.9237 11.7737 11.0294 12.0357 11.0294 12.3482C11.0294 12.6607 10.9237 12.9226 10.7123 13.134C10.5009 13.3454 10.239 13.4511 9.92647 13.4511ZM5.51471 13.4511C5.20221 13.4511 4.94026 13.3454 4.72886 13.134C4.51746 12.9226 4.41176 12.6607 4.41176 12.3482C4.41176 12.0357 4.51746 11.7737 4.72886 11.5623C4.94026 11.3509 5.20221 11.2452 5.51471 11.2452C5.82721 11.2452 6.08915 11.3509 6.30055 11.5623C6.51195 11.7737 6.61765 12.0357 6.61765 12.3482C6.61765 12.6607 6.51195 12.9226 6.30055 13.134C6.08915 13.3454 5.82721 13.4511 5.51471 13.4511ZM14.3382 13.4511C14.0257 13.4511 13.7638 13.3454 13.5524 13.134C13.341 12.9226 13.2353 12.6607 13.2353 12.3482C13.2353 12.0357 13.341 11.7737 13.5524 11.5623C13.7638 11.3509 14.0257 11.2452 14.3382 11.2452C14.6507 11.2452 14.9127 11.3509 15.1241 11.5623C15.3355 11.7737 15.4412 12.0357 15.4412 12.3482C15.4412 12.6607 15.3355 12.9226 15.1241 13.134C14.9127 13.3454 14.6507 13.4511 14.3382 13.4511ZM9.92647 17.8629C9.61397 17.8629 9.35202 17.7572 9.14062 17.5458C8.92923 17.3344 8.82353 17.0724 8.82353 16.7599C8.82353 16.4474 8.92923 16.1855 9.14062 15.9741C9.35202 15.7627 9.61397 15.657 9.92647 15.657C10.239 15.657 10.5009 15.7627 10.7123 15.9741C10.9237 16.1855 11.0294 16.4474 11.0294 16.7599C11.0294 17.0724 10.9237 17.3344 10.7123 17.5458C10.5009 17.7572 10.239 17.8629 9.92647 17.8629ZM5.51471 17.8629C5.20221 17.8629 4.94026 17.7572 4.72886 17.5458C4.51746 17.3344 4.41176 17.0724 4.41176 16.7599C4.41176 16.4474 4.51746 16.1855 4.72886 15.9741C4.94026 15.7627 5.20221 15.657 5.51471 15.657C5.82721 15.657 6.08915 15.7627 6.30055 15.9741C6.51195 16.1855 6.61765 16.4474 6.61765 16.7599C6.61765 17.0724 6.51195 17.3344 6.30055 17.5458C6.08915 17.7572 5.82721 17.8629 5.51471 17.8629ZM14.3382 17.8629C14.0257 17.8629 13.7638 17.7572 13.5524 17.5458C13.341 17.3344 13.2353 17.0724 13.2353 16.7599C13.2353 16.4474 13.341 16.1855 13.5524 15.9741C13.7638 15.7627 14.0257 15.657 14.3382 15.657C14.6507 15.657 14.9127 15.7627 15.1241 15.9741C15.3355 16.1855 15.4412 16.4474 15.4412 16.7599C15.4412 17.0724 15.3355 17.3344 15.1241 17.5458C14.9127 17.7572 14.6507 17.8629 14.3382 17.8629Z"
                      fill="#4772FA"
                    />
                  </svg>
                  <p className="text !text-black">December 5, 2022</p>
                </div>
              </Link>
              <Link
                href="/blogs/blog-details"
                className="card_div relative overflow-hidden h-full w-full mb-12"
              >
                <Image
                  src={BlogImg3}
                  title="Blogs"
                  alt="Blogs"
                  width={0}
                  height={0}
                  sizes="100vw"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto mb-2"
                />
                <div className="px-6 py-1 rounded-[80px] bg-[#FF5723] text-white absolute left-3 top-5">
                  Branding
                </div>
                <div className="flex gap-2.5 items-center mb-2">
                  <span className="w-10 h-px bg-[#FF5723]"></span>
                  <p className="text !text-black">By Admin</p>
                </div>
                <h3 className="md:text-[24px] text-[20px] md:leading-6 leading-5 text-[#033161] font-bold mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <div className="flex gap-2.5 items-center">
                  <svg
                    width="20"
                    height="23"
                    viewBox="0 0 20 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.65441 22.2746C1.21324 22.2746 0.827206 22.1092 0.496324 21.7783C0.165441 21.4474 0 21.0614 0 20.6202V3.52464C0 3.08347 0.165441 2.69744 0.496324 2.36656C0.827206 2.03567 1.21324 1.87023 1.65441 1.87023H3.44669V0.21582H5.23897V1.87023H14.614V0.21582H16.4062V1.87023H18.1985C18.6397 1.87023 19.0257 2.03567 19.3566 2.36656C19.6875 2.69744 19.8529 3.08347 19.8529 3.52464V20.6202C19.8529 21.0614 19.6875 21.4474 19.3566 21.7783C19.0257 22.1092 18.6397 22.2746 18.1985 22.2746H1.65441ZM1.65441 20.6202H18.1985V8.76361H1.65441V20.6202ZM1.65441 7.1092H18.1985V3.52464H1.65441V7.1092ZM1.65441 7.1092V3.52464V7.1092ZM9.92647 13.4511C9.61397 13.4511 9.35202 13.3454 9.14062 13.134C8.92923 12.9226 8.82353 12.6607 8.82353 12.3482C8.82353 12.0357 8.92923 11.7737 9.14062 11.5623C9.35202 11.3509 9.61397 11.2452 9.92647 11.2452C10.239 11.2452 10.5009 11.3509 10.7123 11.5623C10.9237 11.7737 11.0294 12.0357 11.0294 12.3482C11.0294 12.6607 10.9237 12.9226 10.7123 13.134C10.5009 13.3454 10.239 13.4511 9.92647 13.4511ZM5.51471 13.4511C5.20221 13.4511 4.94026 13.3454 4.72886 13.134C4.51746 12.9226 4.41176 12.6607 4.41176 12.3482C4.41176 12.0357 4.51746 11.7737 4.72886 11.5623C4.94026 11.3509 5.20221 11.2452 5.51471 11.2452C5.82721 11.2452 6.08915 11.3509 6.30055 11.5623C6.51195 11.7737 6.61765 12.0357 6.61765 12.3482C6.61765 12.6607 6.51195 12.9226 6.30055 13.134C6.08915 13.3454 5.82721 13.4511 5.51471 13.4511ZM14.3382 13.4511C14.0257 13.4511 13.7638 13.3454 13.5524 13.134C13.341 12.9226 13.2353 12.6607 13.2353 12.3482C13.2353 12.0357 13.341 11.7737 13.5524 11.5623C13.7638 11.3509 14.0257 11.2452 14.3382 11.2452C14.6507 11.2452 14.9127 11.3509 15.1241 11.5623C15.3355 11.7737 15.4412 12.0357 15.4412 12.3482C15.4412 12.6607 15.3355 12.9226 15.1241 13.134C14.9127 13.3454 14.6507 13.4511 14.3382 13.4511ZM9.92647 17.8629C9.61397 17.8629 9.35202 17.7572 9.14062 17.5458C8.92923 17.3344 8.82353 17.0724 8.82353 16.7599C8.82353 16.4474 8.92923 16.1855 9.14062 15.9741C9.35202 15.7627 9.61397 15.657 9.92647 15.657C10.239 15.657 10.5009 15.7627 10.7123 15.9741C10.9237 16.1855 11.0294 16.4474 11.0294 16.7599C11.0294 17.0724 10.9237 17.3344 10.7123 17.5458C10.5009 17.7572 10.239 17.8629 9.92647 17.8629ZM5.51471 17.8629C5.20221 17.8629 4.94026 17.7572 4.72886 17.5458C4.51746 17.3344 4.41176 17.0724 4.41176 16.7599C4.41176 16.4474 4.51746 16.1855 4.72886 15.9741C4.94026 15.7627 5.20221 15.657 5.51471 15.657C5.82721 15.657 6.08915 15.7627 6.30055 15.9741C6.51195 16.1855 6.61765 16.4474 6.61765 16.7599C6.61765 17.0724 6.51195 17.3344 6.30055 17.5458C6.08915 17.7572 5.82721 17.8629 5.51471 17.8629ZM14.3382 17.8629C14.0257 17.8629 13.7638 17.7572 13.5524 17.5458C13.341 17.3344 13.2353 17.0724 13.2353 16.7599C13.2353 16.4474 13.341 16.1855 13.5524 15.9741C13.7638 15.7627 14.0257 15.657 14.3382 15.657C14.6507 15.657 14.9127 15.7627 15.1241 15.9741C15.3355 16.1855 15.4412 16.4474 15.4412 16.7599C15.4412 17.0724 15.3355 17.3344 15.1241 17.5458C14.9127 17.7572 14.6507 17.8629 14.3382 17.8629Z"
                      fill="#4772FA"
                    />
                  </svg>
                  <p className="text !text-black">December 5, 2022</p>
                </div>
              </Link>
              <button
                type="submit"
                className="rounded-lg  border bg-white border-[#F75126] text-[#F75126] hover:bg-[#F75126] hover:text-white inline-flex w-fit sm:!text-base !text-sm md:px-10 px-5 md:py-3.5 py-2 cursor-pointer mx-auto"
              >
                Show More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Sectio */}
      <Footer />
    </>
  );
}
