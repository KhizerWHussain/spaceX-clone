"use client";
import React from "react";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <>
      <div className="relative h-full w-full">
        <div className="w-full h-full overflow-hidden -mt-16 text-white">
          <ReactPlayer
            url="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_6_West_Drone_20241119_website_H_email_aebad7e040.mp4"
            playsinline={true}
            loop={true}
            playing={true}
            muted={true}
            stopOnUnmount={true}
            previewTabIndex={0}
            volume={0}
            width="100%"
            height="100%"
          />
          <div className="absolute top-[24rem] uppercase max-w-[28rem]">
            <div className="pl-14 flex flex-col gap-4">
              <div>
                <p className="text-lg font-[50]">Recent Launch</p>
                <p className="text-[42px] font-semibold leading-[3rem]">
                  Starship&apos;s Sixth Flight Test
                </p>
              </div>
              <div
                className="group border-2 border-white text-white hover:text-black flex justify-center items-center max-w-44 cursor-pointer relative overflow-hidden"
                // onMouseEnter={() => setHovered(true)}
                // onMouseLeave={() => setHovered(false)}
              >
                <p className="p-4 font-semibold text-xs relative z-10">
                  Rewatch
                </p>

                {/* <span
                className={`absolute inset-0 bg-white ${
                  isHovered ? "animate-slideIn" : "animate-slideOut"
                }`}
              /> */}
                <span className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
