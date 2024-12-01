"use client";
import Image from "next/image";
import React from "react";

interface HeroProp {
  imageSource: string;
  title?: string;
  headline: string;
  btnText: string;
}

const Imager = ({ btnText, headline, imageSource, title }: HeroProp) => {
  return (
    <>
      <div className="relative h-full w-full">
        <div className="w-full h-full overflow-hidden -mt-20 text-white">
          <Image
            src={imageSource}
            alt={headline}
            unoptimized={false}
            quality={100}
            loading="lazy"
            priority={false}
            fetchPriority="auto"
          />
          <div className="absolute top-[28rem] uppercase max-w-[28rem]">
            <div className="pl-14 flex flex-col gap-4">
              <div>
                <p className="text-lg font-[50]">{title}</p>
                <p className="text-[42px] font-semibold leading-[3rem]">
                  {headline}
                </p>
              </div>
              <div className="group border-2 border-white text-white hover:text-black flex justify-center items-center max-w-44 cursor-pointer relative overflow-hidden">
                <p className="p-4 font-semibold text-xs relative z-10">
                  {btnText}
                </p>

                <span className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imager;
