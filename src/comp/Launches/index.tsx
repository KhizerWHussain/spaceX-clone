import React from "react";
import TextImage from "./TextImage";

const Launches = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="flex w-full justify-center items-center align-middle uppercase">
        <div className="w-2/3 h-80 justify-between items-center flex text-center">
          <div className="w-full flex flex-col gap-4">
            <p className="text-9xl">402</p>
            <p className="font-thin text-lg">Total Launches</p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="text-9xl">358</p>
            <p className="font-thin text-lg">Total Landings</p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="text-9xl">333</p>
            <p className="font-thin text-lg">Total Reflights</p>
          </div>
        </div>
      </div>
      <TextImage />
    </div>
  );
};

export default Launches;
