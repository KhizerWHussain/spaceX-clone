"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface vehicleHeroTextProp {
  title: string;
  desc: string;
}

const VehicleHeroText = ({ desc, title }: vehicleHeroTextProp) => {
  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          initial={{ marginTop: "-24rem", opacity: 0 }}
          whileInView={{ marginTop: "-32rem", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center flex flex-col z-10  justify-center items-center w-full"
        >
          <div className="w-full flex flex-col gap-4 uppercase">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="font-bold text-8xl"
              viewport={{ once: true }}
            >
              {title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 1, ease: "easeOut" }}
              className="font-thin text-base"
              viewport={{ once: true }}
            >
              {desc}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default VehicleHeroText;
