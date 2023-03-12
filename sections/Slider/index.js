import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";
import { Container, Row, Col } from "react-bootstrap";

import { SliderContent } from "./style";

export default function homeSlider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop
        modules={[Autoplay, Pagination]}
        className="home-slider"
      >
        {sliderData.map((banner, i) => {
          return (
            <SwiperSlide key={i}>
              <SliderContent>
                <img src={banner.link} />
                <div className="banner_content">
                  <h2>{banner.title}</h2>
                  <p>{banner.details}</p>
                </div>
              </SliderContent>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const sliderData = [
  {
    link: "./slider/3.jpg",
    title: "Welcome to the colorful",
    details:
      "Welcome to the colorful world of Just Natural. We areone of the top ranked brand for wellness, beauty and personal care in Bangladesh",
  },
  {
    link: "./slider/2.jpg",
    title: "Welcome to the colorful",
    details:
      "Welcome to the colorful world of Just Natural. We areone of the top ranked brand for wellness, beauty and personal care in Bangladesh",
  },
];
