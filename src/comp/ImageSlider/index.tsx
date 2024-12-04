"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { imagesSliderDataArray } from "./data";
import TextImages from "./component";
import "./customSwiper.css";

const ImagesSlider = () => {
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
        {imagesSliderDataArray.map((swiper: any, i: number) => (
          <SwiperSlide key={swiper.id + i}>
            <TextImages imageSource={swiper.imageSource} text={swiper.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesSlider;
