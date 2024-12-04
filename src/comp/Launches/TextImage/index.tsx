"use client";
import Image from "next/image";
import React, { useRef } from "react";
import beforeRenderImage from "../../../assets/images/WebsiteF9Fairings_Lines_Desktop.jpg";

import { motion, useScroll, useTransform } from "framer-motion";
import Overviews from "../Overviews";

const TextImage = () => {
  const targetElement = useRef<any | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetElement,
    offset: ["start start", "end center"],
  });

  const marginTop = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["-22rem", "-100rem"]
  );

  return (
    <>
      <div
        ref={targetElement}
        className="w-full h-screen bg-transparent overflow-hidden"
      >
        <Image
          src={beforeRenderImage}
          alt="falcon-9"
          className="w-full h-full z-0 object-cover"
        />
        <motion.p
          style={{ marginTop }}
          transition={{ duration: 1.5, delay: 0.25, ease: "easeInOut" }}
          className="w-2/5 font-thin text-sm pl-14 z-10 leading-7"
          exit={{ display: "none" }}
        >
          Falcon 9 is a reusable, two-stage rocket designed and manufactured by
          SpaceX for the reliable and safe transport of people and payloads into
          Earth orbit and beyond. Falcon 9 is the world’s first orbital class
          reusable rocket. Reusability allows SpaceX to refly the most expensive
          parts of the rocket, which in turn drives down the cost of space
          access.
        </motion.p>
      </div>

      <Overviews />
    </>
  );
};

export default TextImage;
