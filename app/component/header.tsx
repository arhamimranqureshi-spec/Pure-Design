"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/logo.svg";

export default function Homw() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // helper to mark active links
  const linkClass = (href: string) =>
    `text-lg font-bold hover:text-[#F75126] ${
      pathname === href ? "text-[#F75126]" : "text-[#272D4E]"
    }`;

  return (
    <header className="flex items-center justify-between xl:py-6 py-4 px-4 lg:px-6 xl:px-14 relative">
      
      {/* Logo */}
      <Link href="/" className="logo">
        <Image
          src={Logo}
          alt="Logo"
          width={120}
          height={50}
          className="w-auto h-auto object-cover object-center"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden xl:flex items-center 2xl:gap-10 gap-5 xl:mr-auto xl:ml-16 2xl:ml-28">
        
        <li>
          <Link href="/home" className={linkClass("/home")}>
            Home
          </Link>
        </li>

        {/* Services Dropdown */}
        <li className="relative">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className={`flex items-center gap-1 text-lg font-bold hover:text-[#F75126] ${
              pathname.startsWith("/services")
                ? "text-[#F75126]"
                : "text-[#272D4E]"
            }`}
          >
            Services
            <svg
              className={`w-4 h-4 transform transition-transform ${
                servicesOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {servicesOpen && (
            <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border py-2 z-50">
              {[
                { href: "/services/web-development", label: "Web Development" },
                { href: "/services/app-development", label: "App Development" },
                { href: "/services/branding-design", label: "Branding Design" },
                { href: "/services/content-writing", label: "Content Writing" },
                { href: "/services/social-media-marketing", label: "Social Media Marketing" },
                { href: "/services/seo-services", label: "SEO Services" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 hover:bg-[#F75126] hover:text-white ${
                      pathname === item.href
                        ? "bg-[#F75126] text-white"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link href="/about-us" className={linkClass("/about-us")}>
            About Us
          </Link>
        </li>

        <li>
          <Link href="/portfolio" className={linkClass("/portfolio")}>
            Portfolio
          </Link>
        </li>

        <li>
          <Link href="/contact-us" className={linkClass("/contact-us")}>
            Contact Us
          </Link>
        </li>

        <li>
          <Link href="/pricing" className={linkClass("/pricing")}>
            Pricing
          </Link>
        </li>

      </ul>

      {/* Right Side */}
      <div className="hidden xl:flex items-center xl:gap-6 gap-4">
        <Link
          href="/get-quote"
          className={`text-lg font-bold px-4 py-2 rounded-md border-2 transition-all duration-300 ${
            pathname === "/get-started"
              ? "bg-[#F75126] text-white border-[#F75126]"
              : "bg-[#F75126] text-white border-[#F75126] hover:bg-white hover:text-[#F75126]"
          }`}
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="xl:hidden p-2 text-[#272D4E]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 w-screen bg-white shadow-lg z-20 xl:hidden transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 text-[#272D4E] ml-auto block mt-4 mr-6"
        >
          ✕
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-4 p-6">
          
          <li>
            <Link href="/home" className="text-lg font-bold text-[#272D4E] hover:text-[#F75126]">
              Home
            </Link>
          </li>

          {/* Services Accordion */}
          <li>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex justify-between items-center text-lg font-bold text-[#272D4E] hover:text-[#F75126]"
            >
              Services
            </button>

            {servicesOpen && (
              <ul className="pl-4 mt-2 flex flex-col gap-2">
                {[
                  { href: "/services/web-development", label: "Web Development" },
                  { href: "/services/app-development", label: "App Development" },
                  { href: "/services/branding-design", label: "Branding Design" },
                  { href: "/services/content-writing", label: "Content Writing" },
                  { href: "/services/social-media-marketing", label: "Social Media Marketing" },
                  { href: "/services/seo-services", label: "SEO Services" },
                  { href: "/services/pricing", label: "Pricing" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block text-gray-700 hover:text-[#F75126]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>

          <li>
            <Link
              href="/get-started"
              className="text-lg text-white font-bold bg-[#F75126] px-4 py-2 rounded-md"
            >
              Get Started
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
}