"use client";
import React, { useRef } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import backgroundImage from "@/Assets/bg image.png";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
function Testimonial() {
  const carouselRef = useRef(null);
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 1,
      itemsFit: "contain",
    },
  };
  const CustomPrevButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-prev-button text-[4rem] text-[#BFBFBF] hover:text-[#3D3D3D] font-normal"
    >
      <IoIosArrowRoundBack />
    </button>
  );

  const CustomNextButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-next-button text-[4rem] text-[#BFBFBF] hover:text-[#3D3D3D] font-normal"
    >
      <IoIosArrowRoundForward />
    </button>
  );
  return (
    <div className="w-[90%] mt-[2.5rem] h-[33rem] custom-linear-background rounded-md flex items-center justify-center p-4 relative">
      <Image
        src={backgroundImage}
        alt="backgroundImage"
        className="absolute w-full h-full object-contain p-2"
      />
      <div className="flex items-center justify-center w-[50%] xs:py-4 xs:w-[95%] sm:w-[80%] md:w-[50%]">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          disableDotsControls
          ref={carouselRef}
          className="flex items-center justify-center"
          renderPrevButton={({ isDisabled }) => (
            <CustomPrevButton onClick={() => carouselRef.current.slidePrev()} />
          )}
          renderNextButton={({ isDisabled }) => (
            <CustomNextButton onClick={() => carouselRef.current.slideNext()} />
          )}
        >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </AliceCarousel>
      </div>
    </div>
  );
}

export default Testimonial;
