import Image from "next/image";
import React from "react";

interface VehicleHeroProp {
  imageSource: any;
  title: string;
  desc: string;
}

const VehicleHero = ({ desc, imageSource, title }: VehicleHeroProp) => {
  return (
    <>
      <div className="w-full h-screen min-h-screen max-h-screen bg-transparent text-white z-0">
        <Image
          src={imageSource}
          alt={title}
          unoptimized={false}
          quality={100}
          loading="lazy"
          priority={false}
          fetchPriority="auto"
          className="w-screen h-screen"
          height={1300}
          width={1200}
        />
        <div className="text-center flex flex-col z-10 -mt-[32rem] justify-center items-center w-full">
          <div className="w-full flex flex-col gap-4 uppercase">
            <p className="font-bold text-8xl">{title}</p>
            <p className="font-thin text-base">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleHero;
