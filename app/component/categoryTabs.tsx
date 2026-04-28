"use client";

import React from "react";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onChange,
}: CategoryTabsProps) {
  return (
    <div className="flex gap-1 justify-center xl:mb-28 lg:mb-16 md:mb-10 mb-5 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`xl:px-11 px-5 xl:py-4 py-2 cursor-pointer rounded-[60px] xl:text-2xl text-sm transition-all duration-300 hover:bg-white hover:text-[#F75126] hover:shadow-[2px_8px_24px_0_#F75126] ${
            activeCategory === category
              ? "bg-white text-[#F75126] shadow-[2px_8px_24px_0_#F75126]"
              : "bg-transparent text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
