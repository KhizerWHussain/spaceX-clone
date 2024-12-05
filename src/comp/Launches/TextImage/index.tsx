"use client";
import Image from "next/image";
import React, { useRef } from "react";
import beforeRenderImage from "../../../assets/images/WebsiteF9Fairings_Lines_Desktop.jpg";

import { motion, useScroll, useTransform } from "framer-motion";
// import Overviews from "../Overviews";

interface TextImageProps {
  description: string;
  imageBeforeRender?: any | string;
}

const TextImage = ({ description, imageBeforeRender }: TextImageProps) => {
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
        className="w-full h-screen bg-transparent overflow-hidden text-white"
      >
        <Image
          src={imageBeforeRender || beforeRenderImage}
          alt="falcon-9"
          className="w-full h-full z-0 object-cover"
        />
        <motion.p
          style={{ marginTop }}
          transition={{ duration: 1.5, delay: 0.25, ease: "easeInOut" }}
          className="w-2/5 font-thin text-sm pl-14 z-10 leading-7"
          exit={{ display: "none" }}
        >
          {description}
        </motion.p>
      </div>
    </>
  );
};

export default TextImage;
