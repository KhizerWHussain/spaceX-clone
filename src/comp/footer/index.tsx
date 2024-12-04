import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-20 bg-black text-white flex justify-center items-center align-middle overflow-hidden">
      <div className="w-72 uppercase text-[10px] flex justify-between items-center">
        <p>SpaceX © 2024</p>
        <p className="cursor-pointer font-semibold hover:text-gray-500 transition duration-300">
          Privacy Policy
        </p>
        <p className="cursor-pointer font-semibold hover:text-gray-500 duration-300">
          Suppliers
        </p>
      </div>
    </div>
  );
};

export default Footer;
