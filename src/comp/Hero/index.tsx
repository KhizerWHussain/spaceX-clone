"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const Hero = () => {
  const [onButton, setOnButton] = useState<boolean>(false);

  return (
    <>
      <div className="relative min-h-screen h-full w-screen min-w-full max-w-full">
        <div className="w-full min-h-screen h-full overflow-hidden -mt-8 text-white">
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
            style={{ width: "100%", height: "100%", minHeight: "100%" }}
          />
          <div className="absolute top-[26rem] uppercase max-w-[28rem]">
            <div className="pl-14 flex flex-col gap-4">
              <div>
                <p className="text-lg font-[50]">Recent Launch</p>
                <p className="text-[42px] font-semibold leading-[3rem]">
                  Starship&apos;s Sixth Flight Test
                </p>
              </div>
              <div
                className="group border-2 border-white text-white hover:text-black flex justify-center items-center max-w-44 cursor-pointer relative overflow-hidden"
                // onMouseEnter={() => setOnButton(true)}
                // onMouseLeave={() => setOnButton(false)}
              >
                <p className="p-4 font-semibold text-xs relative z-10">
                  Rewatch
                </p>

                {/* <span
                className={`absolute inset-0 bg-white ${
                  isHovered ? "animate-slideIn" : "animate-slideOut"
                }`}
              /> */}
                <span className="absolute h-full inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                {/* <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ height: 0 }}
                  animate={{ height: onButton ? "100%" : 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "ease-out",
                  }}
                  style={{
                    transformOrigin: "bottom", // Make the animation start from bottom
                  }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
