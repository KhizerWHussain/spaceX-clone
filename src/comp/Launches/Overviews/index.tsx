"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SingleVehicleOverview from "./component";
import MainCompOverview from "./component/mainComp";
import FirstStage from "./component/FirstStage";

const swipperComponentsArray = [
  //   {
  //     id: 1,
  //     component: <MainCompOverview />,
  //     imageSource: "",
  //   },
  {
    id: 2,
    component: <FirstStage />,
    imageSource: "",
  },
  //   {
  //     id: 3,
  //     component: null,
  //     imageSource: "",
  //   },
  //   {
  //     id: 4,
  //     component: null,
  //     imageSource: "",
  //   },
  //   {
  //     id: 5,
  //     component: null,
  //     imageSource: "",
  //   },
];

const Overviews = () => {
  return (
    <div className="w-full bg-transparent h-screen min-h-screen">
      <Swiper
        navigation={true}
        slidesPerView={1}
        allowSlidePrev={true}
        allowSlideNext={true}
        pagination={{ type: "bullets", clickable: true }}
        autoplay={false}
        loop={true}
        title="Vehicle Overview Slider"
        modules={[Autoplay, Navigation, Pagination]}
        lazyPreloadPrevNext={3}
        allowTouchMove={true}
        updateOnWindowResize={true}
        suppressContentEditableWarning={true}
        suppressHydrationWarning={true}
        speed={5000}
      >
        {swipperComponentsArray.map((swiper, i: number) => (
          <SwiperSlide key={swiper.id + i}>
            <SingleVehicleOverview reactComponent={swiper.component} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Overviews;
