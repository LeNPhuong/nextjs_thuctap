"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "./styled.module.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Slidebar: React.FC<{}> = () => {
  return (
    <div className="h-[584px] min-h-[584px]">
      <Swiper
        cssMode={true}
        pagination={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper h-full w-full"
      >
        <div className="h-[900px]">
          {Array.from({ length: 4 }, (_, e) => (
            <SwiperSlide key={e} className={styled.swiper_slide_custome}>
              <img
                src="https://png.pngtree.com/png-vector/20190917/ourmid/pngtree-not-found-outline-icon-vectors-png-image_1737857.jpg"
                alt=""
                className="w-[200px] h-[200px]"
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slidebar;
