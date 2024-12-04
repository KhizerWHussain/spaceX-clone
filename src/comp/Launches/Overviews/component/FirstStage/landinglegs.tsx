import Link from "next/link";
import React from "react";

const LandingLegs = () => {
  return (
    <div className="w-full h-full my-8">
      <div className="w-full h-full flex flex-col gap-4 text-xs font-medium">
        <p className="leading-6 tracking-wider">
          The Falcon 9 first stage is equipped with four landing legs made of
          state-of-the-art carbon fiber with aluminum honeycomb.
        </p>
        <p className="leading-6 tracking-wider">
          Placed symmetrically around the base of the rocket, they are stowed at
          the base of the vehicle and deploy just prior to landing.
        </p>
        <Link
          href="https://www.spacex.com/mission/"
          className="font-semibold tracking-wider"
        >
          Learn more about SpaceX reusability
        </Link>
      </div>
    </div>
  );
};

export default LandingLegs;
