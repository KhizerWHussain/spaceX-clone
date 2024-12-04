import VehicleHero from "@/comp/vehicleHero";
import React from "react";

import FeatureImage from "../../../assets/images/f9_feature.jpg";
import Launches from "@/comp/Launches";

const Falcon9 = () => {
  return (
    <>
      <VehicleHero
        imageSource={FeatureImage}
        title="Falcon 9"
        desc="First Orbital Class Rocket Capable of Reflight"
      />
      <Launches />
    </>
  );
};

export default Falcon9;
