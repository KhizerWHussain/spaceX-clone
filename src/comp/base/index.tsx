import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import { imagingData, imagingDataType } from "./data";
import Footer from "../footer";
import dynamic from "next/dynamic";

const Imager = dynamic(() => import("../Imager"));

const Base = () => {
  return (
    <div className="w-screen h-full">
      <Header />
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

      <Footer />
    </div>
  );
};

export default Base;
