"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "./styled.module.css";

import { Navigation, Pagination } from "swiper/modules";

const Slidebar: React.FC<{}> = () => {
  return (
    <div className="h-[584px] min-h-[584px]">
      <Swiper
        cssMode={true}
        slidesPerView={1}
        pagination={true}
        navigation={true}
        loop={true}
        // mousewheel={true}
        modules={[Navigation, Pagination]}
        className="mySwiper h-full w-full"
      >
        <div className="h-[900px]">
          {Array.from({ length: 4 }, (_, e) => (
            <SwiperSlide key={e} className={styled.swiper_slide_custome}>
              {/* <img
                src="https://png.pngtree.com/png-vector/20190917/ourmid/pngtree-not-found-outline-icon-vectors-png-image_1737857.jpg"
                alt=""
                className="w-[200px] h-[200px]"
              /> */}
              <div className="w-full h-full bg-rgb-custome-12">{e}</div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slidebar;
