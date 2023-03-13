import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { SliderContent } from "./style";
import Image from "next/image";
import ImagePath from "@/pages/components/ImagePath";
import Link from "next/link";

export default function homeSlider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
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
                <Image
                  loader={ImagePath}
                  src={banner.link}
                  alt={banner.title}
                  width={1920}
                  height={1000}
                />
                <div className="banner_content">
                  <h2>{banner.title}</h2>
                  <p>{banner.details}</p>
                  <Link href={banner.btn_link}>{banner.btn_label}</Link>
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
    link: "./slider/web_banner_1.jpg",
    title: "Welcome to the Just Natural",
    btn_label: "Show More",
    btn_link: "/about-us",
    details:
      "Welcome to the Just Natural world of Just Natural. We areone of the top ranked brand for wellness, beauty and personal care in Bangladesh",
  },
  {
    link: "./slider/web_banner_2.jpg",
    title: "Just Natural For You",
    btn_label: "Show More",
    btn_link: "/about-us",
    details:
      "it's your world of Just Natural. We areone of the top ranked brand for wellness, beauty and personal care in Bangladesh",
  },
];
