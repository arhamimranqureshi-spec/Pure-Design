import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Services({ services }: any) {
  return (
    <>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-5 gap-4">
        {services.map((item: any, index: any) => (
          <div key={index} className="flex flex-col sm:gap-5 gap-2">
            <Link href={item.slug}>
              <Image
                src={item.imagePath}
                title="Banner Image"
                alt="Banner Image"
                width={0}
                height={0}
                sizes="100vw"
                decoding="async"
                loading="lazy"
                className="w-full max-w-[431px] xl:h-[294px] h-auto object-contain object-center"
              />
            </Link>
            <h3 className="title3">{item.title}</h3>
            <p className="text">{item.text}</p>
            <Link href={item.slug} className="link">
              {item.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
