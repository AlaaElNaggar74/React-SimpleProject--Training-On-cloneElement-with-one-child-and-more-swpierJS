import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./SwiperStyle.css";
const SwiperCom = ({ items, children }) => {
  let elementClone = items.map((item) => (
    <SwiperSlide key={item.id}>
      {React.cloneElement(children, { item })}
    </SwiperSlide>
  ));
  return (
    <>
      <div className="py-10 w-11/12 mx-auto ">
        <h1 className="text-center mb-10 text-3xl ">Swipper Js</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={50}
    
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {elementClone}
          {/* <SwiperSlide>
            <div className="h-full w-full bg-green-500"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-yellow-500"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-lime-800"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-emerald-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-blue-800"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-pink-900"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-rose-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-orange-500"></div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperCom;
