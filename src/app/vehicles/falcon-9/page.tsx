import VehicleHero from "@/comp/vehicleHero";
import React from "react";
import FeatureImage from "../../../assets/images/f9_feature.jpg";
import Launches from "@/comp/Launches";
import Image from "next/image";

import F9VideoImage from "../../../assets/images/f9_video.jpg";
import FalconEngine from "@/comp/Falcon9Engine";
import ImagesSlider from "@/comp/ImageSlider";
import DownloadGuide from "@/comp/DownloadGuide";

const videoSource =
  "https://www.youtube.com/watch?time_continue=1&v=Z4TXCZG_NEY&embeds_widget_referrer=https%3A%2F%2Fwww.spacex.com%2Fvehicles%2Ffalcon-9%2F&embeds_referring_euri=https%3A%2F%2Fwww.spacex.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.spacex.com&source_ve_path=MjM4NTE";

const Falcon9 = () => {
  return (
    <>
      <div className="w-screen h-full">
        <VehicleHero
          imageSource={FeatureImage}
          title="Falcon 9"
          desc="First Orbital Class Rocket Capable of Reflight"
        />
        <Launches />
        <div className="w-full h-screen min-h-full relative overflow-hidden">
          <Image
            src={F9VideoImage}
            alt="F9"
            style={{ height: "100%" }}
            className="cursor-pointer z-0"
          />
          <div className="1/3 uppercase text-white z-10 -mt-40 pl-14">
            <p className="text-sm font-thin">Video</p>
            <p className="font-semibold text-4xl">Falcon 9 In Flight</p>
          </div>
        </div>
      </div>
      <FalconEngine />
      <ImagesSlider />
      <DownloadGuide />
    </>
  );
};

export default Falcon9;
