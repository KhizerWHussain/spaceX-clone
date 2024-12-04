"use client";
import React from "react";
import { motion } from "framer-motion";

interface titleSectionProp {
  title?: string | null | undefined;
  headline: string;
  btnText: string;
}

const TitleSection = ({ btnText, headline, title }: titleSectionProp) => {
  return (
    <motion.div
      className="uppercase max-w-[32rem] z-10"
      initial={{ opacity: 0, marginTop: "-12rem" }}
      whileInView={{ opacity: 1, marginTop: "-18rem" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="pl-14 flex flex-col gap-6">
        <div>
          {title ? <p className="text-lg font-[50]">{title}</p> : null}
          <p className="text-[42px] font-semibold leading-[3rem]">{headline}</p>
        </div>
        <div className="group border-2 border-white text-white hover:text-black flex justify-center items-center max-w-44 cursor-pointer relative overflow-hidden">
          <p className="p-4 font-semibold text-xs relative z-10">{btnText}</p>

          <span className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
        </div>
      </div>
    </motion.div>
  );
};

export default TitleSection;
