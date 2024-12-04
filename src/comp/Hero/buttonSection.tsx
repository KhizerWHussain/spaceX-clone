import React from "react";

const ButtonSection = () => {
  return (
    <div className="group border-2 border-white text-white hover:text-black flex justify-center items-center max-w-44 cursor-pointer relative overflow-hidden">
      <p className="p-4 font-semibold text-xs relative z-10">Rewatch</p>
      <span className="absolute h-full inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
    </div>
  );
};

export default ButtonSection;
