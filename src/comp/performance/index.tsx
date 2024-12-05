import React from "react";
import Player from "../player";

interface PerformanceProp {
  videoSource: string;
  title: string;
  description: string;
}

const Performance = ({ description, title, videoSource }: PerformanceProp) => {
  return (
    <>
      <div className="w-screen overflow-hidden h-[140vh] text-white bg-black max-w-full">
        <div className="w-full h-full pl-14 pr-14 flex justify-center items-center">
          <div className="w-2/3 h-full flex justify-center items-center">
            <div className="h-[80%] w-full">
              <Player source={videoSource} />
            </div>
          </div>
          <div className="w-1/3 h-full flex justify-center items-center">
            <div className="h-1/2 flex flex-col justify-center items-start gap-4">
              <p className="font-semibold text-5xl">{title}</p>
              <p className="font-light text-base opacity-85">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
