"use client";
import React, { ReactNode } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../css/custom.swiper.css";
import SingleVehicleOverview from "./component";
import MainCompOverview from "./component/mainComp";
import FirstStage from "./component/FirstStage";
import InterStage from "./component/interStage";
import SecondStage from "./component/secondStage";
import Payload from "./component/Payload";

import AfterRenderImage from "../../../assets/images/WebsiteF9Fairings_Render_Desktop.jpg";
import FirstStageImage from "../../../assets/images/firstStageImage.jpg";
import InterStageImage from "../../../assets/images/interStageImage.jpg";
import SecondStageImage from "../../../assets/images/secondStageImage.jpg";

type swipperComponentType = {
  id: number;
  component: ReactNode;
  imageSource: string | any;
};

const swipperComponentsArray: swipperComponentType[] = [
  {
    id: 1,
    component: <MainCompOverview />,
    imageSource: AfterRenderImage,
  },
  {
    id: 2,
    component: <FirstStage />,
    imageSource: FirstStageImage,
  },
  {
    id: 3,
    component: <InterStage />,
    imageSource: InterStageImage,
  },
  {
    id: 4,
    component: <SecondStage />,
    imageSource: SecondStageImage,
  },
  {
    id: 5,
    component: <Payload />,
    imageSource: "",
  },
];

const Overviews = () => {
  return (
    <div className="w-full bg-transparent h-screen min-h-screen">
      <Swiper
        navigation={true}
        slidesPerView={1}
        allowSlidePrev={true}
        allowSlideNext={true}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        autoplay={false}
        loop={true}
        title="Vehicle Overview Slider"
        modules={[Autoplay, Navigation, Pagination]}
        lazyPreloadPrevNext={3}
        allowTouchMove={true}
        updateOnWindowResize={true}
        suppressContentEditableWarning={true}
        suppressHydrationWarning={true}
        speed={1000}
      >
        {swipperComponentsArray.map(
          (swiper: swipperComponentType, i: number) => (
            <SwiperSlide key={swiper.id + i}>
              <SingleVehicleOverview
                reactComponent={swiper.component}
                imageSource={swiper.imageSource}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Overviews;
