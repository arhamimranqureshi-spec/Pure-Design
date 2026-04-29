import React from 'react'
import Image from "next/image";
import Link from "next/link";
import SmallCircle from "@/public/assets/images/smallCircle.png";
import FooterLogo from "@/public/assets/images/footer_logo.png";
import PaymentIcon1 from "@/public/assets/images/payment_icon1.png";
import PaymentIcon2 from "@/public/assets/images/payment_icon2.png";
import LocationIcon from "@/public/assets/images/location_icon.svg";
import MessageIcon from "@/public/assets/images/message_icon.svg";
import USAIcon from "@/public/assets/images/USA.svg";
import UKIcon from "@/public/assets/images/UK.svg";


import { useGeo } from "@/app/context/GeoContext";


export default function Footer() {

  const { phone, address, icon } = useGeo();

  return (
    <>
<section className="2xl:px-80 xl:px-55 lg:p-15 md:p-10 p-4 bg-[#F75126]">
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center xl:gap-20 lg:gap-10 gap-5">
          <p className="title3 !text-white md:col-span-2 lg:text-left text-center">
            Your business deserves more than just a website. get fully
            customizable Website Services designed for growth.
          </p>
          <Link
            href="/get-quote"
            className="md:px-11 px-6 2xl:py-6 md:py-4 py-3 lg:mx-0 mx-auto  md:text-[18px] text-sm font-bold bg-[#F75126] text-white border-white border-2 w-fit rounded-[60px]"
          >
            Get Started
          </Link>
        </div>
      </section>
      <footer className="2xl:px-45 xl:px-20 px-4 xl:pt-20 pt-10 pb-4 bg-[#101010] relative">
        <Image
          src={SmallCircle}
          title="circle"
          alt="circle"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="w-12 h-12 object-cover object-center absolute -top-6 right-10"
        />
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 items-start gap-10 mb-10">
          <div>
            <Image
              src={FooterLogo}
              title="Logo"
              alt="Logo"
              width={0}
              height={0}
              decoding="async"
              loading="lazy"
              className="w-67 h-21 object-cover object-center mb-7"
            />
            <p className="text !text-[20px] !text-white">
              We conduct our business with honesty and transparency, building
              trust with our clients and partners.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col items-start gap-10">
            <ul>
              <li className="text-xl text-bold text-[#F75126] font-bold mb-4 text-nowrap">
                WHO WE ARE
              </li>
              <li className="text-xl text-bold text-white mb-4">
                <Link href="about-us">About Us</Link>
              </li>
              <li className="text-xl text-bold text-white mb-4">
                <Link href="portfolio">Portfolio</Link>
              </li>
              <li className="text-xl text-bold text-white mb-4">
                <Link href="contact-us">Contact Us</Link>
              </li>
              {/* <li className="text-xl text-bold text-white mb-4">
                <Link href="blogs">Blogs</Link>
              </li> */}
              <li className="text-xl text-bold text-white mb-4">
                <Link href="faqs">FAQs</Link>
              </li>
            </ul>
            <ul>
              <li className="text-xl text-bold text-[#F75126] font-bold mb-4">
                WHO WE ARE
              </li>
              <li className="text-xl text-bold text-white mb-4">
                <Link href="/services/branding-design">Branding</Link>
              </li>
              {/* <li className="text-xl text-bold text-white mb-4">
                <Link href="/services/logo-design">Logo Design</Link>
              </li> */}
              <li className="text-xl text-bold text-white mb-4">
                <Link href="/services/web-development">Web Development</Link>
              </li>
              <li className="text-xl text-bold text-white mb-4">
                <Link href="/services/app-development">App Development</Link>
              </li>
              <li className="text-xl text-bold text-white mb-4">
                <Link href="/services/content-writing">Content Writing</Link>
              </li>
              <li className="text-xl text-bold text-white mb-4">
                <Link href="/services/social-media-marketing">
                  Social Media Marketing
                </Link>
              </li>
              <li className="text-xl text-bold text-white mb-4">
                <Link href="/services/seo-service">SEO Service</Link>
              </li>
            </ul>
          </div>
          <ul>
            <li className="text-xl text-bold text-[#F75126] font-bold mb-4">
              Location
            </li>
            {/* <li className="text-xl text-bold text-white mb-4 flex items-start gap-3">
              <Image
                src={LocationIcon}
                title="Location"
                alt="Location"
                width={0}
                height={0}
                decoding="async"
                loading="lazy"
                className="w-[13px] h-[19px] object-cover object-center"
              />
              <span className="text-xl text-bold text-white">
                941 Stratford Road, Hall Green, Birmingham, England, B28 8BH
              </span>
            </li> */}
            <li className="text-xl text-bold text-white mb-4 flex items-start gap-3">
              <Image
                src={LocationIcon}
                title="Location"
                alt="Location"
                width={0}
                height={0}
                decoding="async"
                loading="lazy"
                className="w-[13px] h-[19px] object-cover object-center"
              />
              <span className="text-xl text-bold text-white">
                {address}
              </span>
            </li>
            <li className="flex flex-col items-start gap-4">
              <Image
                src={PaymentIcon1}
                title="DMCA Procted"
                alt="DMCA Procted"
                width={0}
                height={0}
                sizes="100vw"
                decoding="async"
                loading="lazy"
                className="w-auto h-11 object-contain object-center"
              />
              <Image
                src={PaymentIcon2}
                title="McAfee Secure"
                alt="McAfee Secure"
                width={0}
                height={0}
                sizes="100vw"
                decoding="async"
                loading="lazy"
                className="w-auto h-11 object-contain object-center"
              />
            </li>
          </ul>
          <ul>
            <li className="text-xl text-bold text-[#F75126] font-bold mb-4">
              Get In Touch
            </li>
            <li className="text-xl text-bold text-white mb-10 flex items-start gap-3">
              <Image
                src={MessageIcon}
                title="Mesage"
                alt="Mesage"
                width={0}
                height={0}
                decoding="async"
                loading="lazy"
                className="w-6 h-6 object-cover object-center"
              />
              <span className="text-xl text-bold text-white">

                <Link href="mailto:info@puredesignhub.com">info@puredesignhub.com</Link>
              </span>
            </li>
            <li className="text-xl text-bold text-white mb-10 flex items-start gap-3">
              <Image
                src={icon}
                title="USA"
                alt="USA"
                width={0}
                height={0}
                decoding="async"
                loading="lazy"
                className="w-7 h-5 object-cover object-center"
              />
              <span className="text-xl text-bold text-white">
                <Link href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</Link>
              </span>
            </li>
            {/* <li className="text-xl text-bold text-white mb-10 flex items-start gap-3">
              <Image
                src={UKIcon}
                title="UK"
                alt="UK"
                width={0}
                height={0}
                decoding="async"
                loading="lazy"
                className="w-7 h-5 object-cover object-center"
              />
              <span className="text-xl text-bold text-white">
                +1 940 2454 561
              </span>
            </li> */}
            <li className="mb-4 flex items-center gap-2.5">
              <Link
                href="https://www.facebook.com/profile.php?id=61577469429417"
                className="w-[47px] h-[47px] rounded-[50%] bg-[#F75126] flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/puredesignhubofficial/"
                className="w-[47px] h-[47px] rounded-[50%] bg-[#F75126] flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href=""
                className="w-[47px] h-[47px] rounded-[50%] bg-[#F75126] flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"
                  />
                </svg>
              </Link>
              <Link
                href=""
                className="w-[47px] h-[47px] rounded-[50%] bg-[#F75126] flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <hr className="border-t border-gray-700 mb-6" />
          <p className="text-center text ">
            COPYRIGHT PURE DESIGN HUB 2026 - <Link href='/terms-and-conditions' className="link underline ml-2">TERMS & CONDITIONS </Link>  <Link href='/privacypolicy' className="link underline ml-2">PRIVACY POLICY</Link>
          </p>
        </div>
      </footer>
    </>
  )
}
