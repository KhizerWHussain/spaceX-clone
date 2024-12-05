import VehicleHero from "@/comp/vehicleHero";
import React from "react";
import FeatureImage from "../../../assets/images/f9_feature.jpg";
import Launches from "@/comp/Launches";
import FalconEngine from "@/comp/Falcon9Engine";
import ImagesSlider from "@/comp/ImageSlider";
import DownloadGuide from "@/comp/DownloadGuide";
import TextImage from "@/comp/Launches/TextImage";

import beforeRenderImage from "../../../assets/images/WebsiteF9Fairings_Lines_Desktop.jpg";
import Overviews from "@/comp/Launches/Overviews";
import VehicleVideo from "@/comp/VehicleVideo";

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
        <TextImage
          description=" Falcon 9 is a reusable, two-stage rocket designed and manufactured by
          SpaceX for the reliable and safe transport of people and payloads into
          Earth orbit and beyond. Falcon 9 is the world’s first orbital class
          reusable rocket. Reusability allows SpaceX to refly the most expensive
          parts of the rocket, which in turn drives down the cost of space
          access."
          imageBeforeRender={beforeRenderImage}
        />
        <Overviews />
        <VehicleVideo headline="Falcon 9 In Flight" />
        <FalconEngine />
        <ImagesSlider />
        <DownloadGuide />
      </div>
    </>
  );
};

export default Falcon9;
