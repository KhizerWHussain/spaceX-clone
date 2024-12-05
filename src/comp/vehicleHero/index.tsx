import Image from "next/image";
import React from "react";
import VehicleHeroText from "./text";

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
        <VehicleHeroText title={title} desc={desc} />
      </div>
    </>
  );
};

export default VehicleHero;
