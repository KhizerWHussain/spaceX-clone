import React from "react";

const Overview = () => {
  return (
    <div className="w-full h-full my-8">
      <div className="w-full h-full flex flex-col gap-4 text-xs font-medium">
        <p className="leading-6 tracking-wider">
          Falcon 9’s first stage incorporates nine Merlin engines and
          aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade
          kerosene (RP-1) propellant.
        </p>
        <p className="leading-6 tracking-wider">
          Falcon 9 generates more than 1.7 million pounds of thrust at sea
          level.
        </p>
      </div>
    </div>
  );
};

export default Overview;
