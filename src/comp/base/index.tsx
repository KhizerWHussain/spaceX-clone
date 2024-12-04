import React from "react";
import { imagingData, imagingDataType } from "./data";
import dynamic from "next/dynamic";

const Imager = dynamic(() => import("../Imager"));
// const Header = dynamic(() => import("../Header"));
const Hero = dynamic(() => import("../Hero"));

const Base = () => {
  return (
    <div className="w-screen h-full">
      {/* <Header /> */}
      <Hero />
      <div>
        {imagingData.map((item: imagingDataType, i: number) => (
          <Imager
            key={`${item.id}.${i}`}
            title={item.title}
            headline={item.heading}
            imageSource={item.image}
            btnText={item.btnText}
          />
        ))}
      </div>
    </div>
  );
};

export default Base;
