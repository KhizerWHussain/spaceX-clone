import React from "react";
import ButtonSection from "./buttonSection";
import Player from "../player";

const Hero = () => {
  return (
    <div className="relative min-h-screen h-full w-screen min-w-full max-w-full">
      <div className="w-full min-h-screen h-full overflow-hidden -mt-8 text-white">
        <Player source="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_6_West_Drone_20241119_website_H_email_aebad7e040.mp4" />
        <div className="absolute top-[26rem] uppercase max-w-[28rem]">
          <div className="pl-14 flex flex-col gap-4">
            <div>
              <p className="text-lg font-[50]">Recent Launch</p>
              <p className="text-[42px] font-semibold leading-[3rem]">
                Starship&apos;s Sixth Flight Test
              </p>
            </div>
            <ButtonSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
