import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import BannerImage from "@/public/assets/images/about_banner.png";


interface GlobalBannerProps {
  title: React.ReactNode;
  text: string;
  imagePath: string;
}

export default function GlobalBanner({ title, text, imagePath }: GlobalBannerProps) {
  return (
    <>
       <div className='global_baner grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-10 lg:gap-5 gap-4 2xl:px-55 xl:px-30 lg:py-20 py-10 px-4'>
             <div className='lg:order-0 order-1 lg:text-left text-center'>
               <h1 className={`title1 ${text !='' ? 'mb-0' : 'lg:mb-8 sm:mb-4 mb-2'}`}>
               {title}
              </h1>
              {text !='' && (
              <p className='text sm:mb-4 mb-2'>{text}</p>
              )}
              <Link href='/get-quote' className='globalBtn bg-[#F75126] text-white inline-flex'>Lets get Started</Link>
             </div>
             <div className='lg:order-1 order-0'>
                 <Image
                    src={imagePath}
                    title="Banner Image"
                    alt="Banner Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    decoding="async"
                    loading="lazy"
                    className="xl:w-[37rem] md:w-[30rem] sm:w-[24rem] w-[18rem] xl:h-[35rem] md:h-[26rem] sm:h-[20rem] h-[14rem] object-contain object-center mx-auto"
                  />
             </div>
         </div>
    </>
  )
}
