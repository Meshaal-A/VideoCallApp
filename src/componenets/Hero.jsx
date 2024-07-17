import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//slides array
const slides = [
  {
    title: "Edit your videos.Easy.",
    image:
      "https://images.unsplash.com/photo-1596725858508-70543890c732?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Edit your videos.Eas1y.",
    image:
      "https://images.unsplash.com/photo-1637249820580-a877474a889d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Edit your videos.Easy1.",
    image:
      "https://plus.unsplash.com/premium_photo-1682146717223-874ac7dcc607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hero = () => {
  return (
    <div
      className="carousel relative container mx-auto"
      style={{ maxWidth: "1600px" }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="block h-full w-full mx-auto md:flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                height: "50vh",
                backgroundImage: `url('${slide.image}')`,
                backgroundBlendMode: "linear",
              }}
            >
              <div className="container mx-auto">
                <div className="bg-black opacity-65 flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide rounded-sm">
                  <p className=" text-white text-2xl my-4">{slide.title}</p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-indigo-500 text-white hover:border-black mb-2"
                    href="#"
                  >
                    view pricing
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
