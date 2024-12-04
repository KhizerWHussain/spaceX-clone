import Image from "next/image";
import React from "react";

interface TextImagesProp {
  imageSource: any | string;
  text: string;
}

const TextImages = ({ imageSource, text }: TextImagesProp) => {
  return (
    <div className="h-screen w-full">
      <div className="w-full h-full">
        <div className="h-[80vh]">
          <Image
            src={imageSource}
            alt={text}
            className="w-full h-full object-cover z-0"
          />
        </div>
        <div className="bg-black h-[20vh] w-full text-white items-center justify-center flex flex-col">
          <div className="flex w-1/2 h-full justify-center items-center">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImages;
