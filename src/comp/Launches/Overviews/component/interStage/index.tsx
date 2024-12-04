import React from "react";

const InterStage = () => {
  return (
    <div className="w-full h-full -mt-[36rem] bg-transparent z-10">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="w-full uppercase">
          <p className="text-lg">Falcon 9</p>
          <h1 className="text-5xl font-semibold">Interstage</h1>
        </div>
        <div className="w-full flex flex-col gap-6 text-sm font-light leading-6 tracking-wider">
          <p>
            The interstage is a composite structure that connects the first and
            second stages, and houses the pneumatic pushers that allow the first
            and second stage to separate during flight.
          </p>
          <p className="uppercase text-base">Grid fins</p>
          <p>
            Falcon 9 is equipped with four hypersonic grid fins positioned at
            the base of the interstage. They orient the rocket during reentry by
            moving the center of pressure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterStage;
