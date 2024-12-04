"use client";
import React from "react";
import { leftHeaderArray, leftHeaderArrayType } from "./data";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import HeaderLogo from "./logo";

const Header = () => {
  const { scrollYProgress, scrollY } = useScroll();

  // const [prevScroll, setPrevScroll] = useState<number>(0); // Track the previous scroll position
  // const [isScrollingUp, setScrollingUp] = useState<boolean>(false);

  // useMotionValueEvent(scrollY, "change", (currentScroll) => {
  //   setScrollingUp(currentScroll < prevScroll); // Compare with previous scroll
  //   setPrevScroll(currentScroll); // Update the previous scroll value
  // });

  // Background color changes based on scroll direction
  // const backgroundColor = useTransform(
  //   scrollY,
  //   [0, 50],
  //   isScrollingUp ? ["black", "black"] : ["black", "transparent"]
  // );

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className="fixed top-0 w-full max-w-full min-w-full h-20 text-white overflow-hidden z-10">
      <motion.div
        style={{
          opacity,
          // backgroundColor,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          // repeatType: "reverse",
          // repeat: Infinity,
        }}
        unselectable="on"
        layoutScroll={true}
        className={`w-full h-full pr-14 pl-14 pt-12 pb-12 overflow-hidden flex justify-between items-center`}
      >
        <div className="flex justify-center items-center gap-12">
          <Link href="/" prefetch={true}>
            <div className="flex w-40">
              <HeaderLogo />
            </div>
          </Link>
          <div className="flex justify-center items-center gap-6">
            {leftHeaderArray.map((item: leftHeaderArrayType, i: number) => (
              <Link
                key={`${i}.${item.id}`}
                href={item.url}
                className="text-xs font-semibold uppercase relative group overflow-hidden"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <Link
            href=""
            className="text-xs font-semibold uppercase relative group overflow-hidden"
          >
            Shop
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
          </Link>
          <RxHamburgerMenu style={{ cursor: "pointer" }} />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
