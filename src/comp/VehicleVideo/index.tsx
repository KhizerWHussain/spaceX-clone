import Image from "next/image";
import React from "react";
import F9VideoImage from "../../assets/images/f9_video.jpg";

interface VehicleVideoProps {
  imageSource?: string;
  modalVideoLink?: string;
  text?: string;
  headline: string;
}

const VehicleVideo = ({
  text,
  headline,
  imageSource,
  modalVideoLink,
}: VehicleVideoProps) => {
  return (
    <div className="w-full h-screen min-h-full relative overflow-hidden">
      <Image
        src={imageSource || F9VideoImage}
        alt="F9"
        style={{ height: "100%" }}
        className="cursor-pointer z-0"
      />
      <div className="1/3 uppercase text-white z-10 -mt-40 pl-14">
        <p className="text-sm font-thin">{text || "Video"}</p>
        <p className="font-semibold text-4xl">{headline}</p>
      </div>
    </div>
  );
};

export default VehicleVideo;
