import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";
import { Container, Row, Col } from "react-bootstrap";

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
        modules={[Autoplay, Pagination]}
        className="home-slider"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => {
          return (
            <SwiperSlide key={i}>
              <div className="slider_content">
                <img src="./slider/1.jpg" />
                <Container>
                  <Row>
                    <Col>
                      <p>
                        Welcome to the colorful world of Just Natural. We are
                        one of the top ranked brand for wellness, beauty and
                        personal care in Bangladesh.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
