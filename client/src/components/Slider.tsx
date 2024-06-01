import React from "react";
import { Carousel } from "rsuite";

export default function Slider() {
  return (
    <>
      <Carousel autoplay className="custom-slider">
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
          height="200"
          alt=""
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
          height="200"
          alt=""
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
          height="200"
          alt=""
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
          height="200"
          alt=""
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
          height="200"
          alt=""
        />
      </Carousel>
    </>
  );
}
