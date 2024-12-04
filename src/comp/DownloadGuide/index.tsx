import React from "react";

const DownloadGuide = () => {
  return (
    <div className="w-full h-[60vh] bg-black">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col w-1/2 text-white justify-center items-center">
          <div className="w-1 bg-white h-full"></div>
          <p className="text-sm font-light">
            <span className="text-gray-500">
              For information about our launch services, contact
            </span>{" "}
            sales@spacex.com
          </p>
          <div className="w-[28rem] flex justify-between items-center gap-4 mt-6">
            <div className="group border-2 border-white text-white hover:text-black flex justify-center items-center w-full cursor-pointer relative overflow-hidden">
              <p className="p-5 font-semibold text-sm relative z-10">
                Download User&apos;s Guide
              </p>
              <span className="absolute h-full inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
            </div>
            <div className="group border-2 border-white text-white hover:text-black flex justify-center items-center w-full cursor-pointer relative overflow-hidden">
              <p className="p-5 font-semibold text-sm relative z-10">
                Capabilities and Services
              </p>
              <span className="absolute h-full inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadGuide;
