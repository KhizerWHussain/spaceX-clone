import Image from "next/image";
import React, { ReactNode } from "react";
interface SingleVehicleOverviewProp {
  reactComponent: ReactNode;
  imageSource?: any | string;
}

const SingleVehicleOverview = ({
  reactComponent,
  imageSource,
}: SingleVehicleOverviewProp) => {
  return (
    <div className="w-full h-screen min-h-full bg-transparent z-0">
      <div className="w-full h-full">
        {imageSource ? (
          <Image
            src={imageSource}
            alt="falcon-9"
            className="w-full h-full z-0 object-cover"
          />
        ) : (
          <div className="w-full h-full bg-black object-cover z-0"></div>
        )}
        <div className="w-2/5 font-thin text-sm pl-14 z-10">
          {reactComponent}
        </div>
      </div>
    </div>
  );
};

export default SingleVehicleOverview;
