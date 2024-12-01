import React from "react";
import Image from "next/image";
import { leftHeaderArray, leftHeaderArrayType } from "./data";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
// import SpaceXIcon from "../../assets/logo/spacex.ico";
import SpaceXPng from "../../assets/logo/spacex.png";

const Header = () => {
  return (
    <div className="w-full max-w-full h-20 text-white overflow-hidden absolute top-0 z-10">
      <div className="w-full h-full pr-14 pl-14 pt-12 pb-12 overflow-hidden flex justify-between items-center">
        <div className="flex justify-center items-center gap-12">
          <div className="flex w-40">
            <Image src={SpaceXPng} alt="SpaceX" height={100} width={100} />
          </div>
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
      </div>
    </div>
  );
};

export default Header;
