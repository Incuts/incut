"use client";

import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Image from "next/image";

const CarouselSection: React.FC = () => {
  const [goToSlide, setGoToSlide] = useState<number>(0);

  const slides = [
    {
      key: 1,
      content: (
        <Image
          src="https://picsum.photos/800/801/?random"
          alt="1"
          style={{ width: "100%", height: "500px" }}
        />
      ),
    },
    {
      key: 2,
      content: (
        <Image
          src="https://picsum.photos/800/802/?random"
          alt="2"
          style={{ width: "100%", height: "500px" }}
        />
      ),
    },
    {
      key: 3,
      content: (
        <Image
          src="https://picsum.photos/600/803/?random"
          alt="3"
          style={{ width: "100%", height: "500px" }}
        />
      ),
    },
    {
      key: 4,
      content: (
        <Image
          src="https://picsum.photos/800/500/?random"
          alt="4"
          style={{ width: "100%", height: "500px" }}
        />
      ),
    },
    {
      key: 5,
      content: (
        <Image
          src="https://picsum.photos/800/804/?random"
          alt="5"
          style={{ width: "100%", height: "500px" }}
        />
      ),
    },
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index),
  }));

  return (
    <div
      className="flex flex-col"
      style={{
        width: "800px",
        height: "500px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={7}
        showNavigation={true}
        animationConfig={config.slow}
      />
    </div>
  );
};

export default CarouselSection;
