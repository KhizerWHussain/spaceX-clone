import Image from "next/image";
import React, { ReactNode } from "react";

import AfterRenderImage from "../../../../assets/images/WebsiteF9Fairings_Render_Desktop.jpg";

interface SingleVehicleOverviewProp {
  reactComponent: ReactNode;
}

const SingleVehicleOverview = ({
  reactComponent,
}: SingleVehicleOverviewProp) => {
  return (
    <div className="w-full h-screen min-h-full bg-transparent z-0">
      <div className="w-full h-full">
        <Image
          src={AfterRenderImage}
          alt="falcon-9"
          className="w-full h-full z-0 object-cover"
        />
        <div className="w-2/5 font-thin text-sm pl-14 z-10">
          {reactComponent}
        </div>
      </div>
    </div>
  );
};

export default SingleVehicleOverview;
