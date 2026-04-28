"use client";
import { useState } from "react";

type AccordionItem = {
  id: number;
  question: string;
  answer: string;
};

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`transition-all ${
              isOpen ? "bg-[#F75126] text-white" : "bg-[#FFD2C7] text-black"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => toggle(item.id)}
              className={`flex w-full items-center justify-between px-[25px] py-[22px] sm:text-[18px] text-base text-left font-semibold cursor-pointer ${
                isOpen ? "text-white" : "text-black"
              }`}
            >
              {item.question}
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${openId ? "rotate-180" : ""}`}
              >
                <path
                  d="M17 21.845L23.205 15.5975H10.7525L17 21.845ZM17 34C14.6767 34 12.4808 33.5538 10.4125 32.6613C8.34417 31.7688 6.53792 30.5504 4.99375 29.0063C3.44958 27.4621 2.23125 25.6558 1.33875 23.5875C0.44625 21.5192 0 19.3233 0 17C0 14.6483 0.44625 12.4383 1.33875 10.37C2.23125 8.30167 3.44958 6.5025 4.99375 4.9725C6.53792 3.4425 8.34417 2.23125 10.4125 1.33875C12.4808 0.44625 14.6767 0 17 0C19.3517 0 21.5617 0.44625 23.63 1.33875C25.6983 2.23125 27.4975 3.4425 29.0275 4.9725C30.5575 6.5025 31.7688 8.30167 32.6613 10.37C33.5538 12.4383 34 14.6483 34 17C34 19.3233 33.5538 21.5192 32.6613 23.5875C31.7688 25.6558 30.5575 27.4621 29.0275 29.0063C27.4975 30.5504 25.6983 31.7688 23.63 32.6613C21.5617 33.5538 19.3517 34 17 34ZM17 31.45C21.0233 31.45 24.4375 30.0404 27.2425 27.2213C30.0475 24.4021 31.45 20.995 31.45 17C31.45 12.9767 30.0475 9.5625 27.2425 6.7575C24.4375 3.9525 21.0233 2.55 17 2.55C13.005 2.55 9.59792 3.9525 6.77875 6.7575C3.95958 9.5625 2.55 12.9767 2.55 17C2.55 20.995 3.95958 24.4021 6.77875 27.2213C9.59792 30.0404 13.005 31.45 17 31.45Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            {/* Content */}
            {isOpen && (
              <div className="bg-[#F75126] text-black px-[25px] pb-[22px]">
                {/* custom border line */}
                <div className="h-[1px] w-full bg-white mb-5"></div>
                <p className="px-4 py-5 bg-white sm:text-[1rem] text-sm">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
