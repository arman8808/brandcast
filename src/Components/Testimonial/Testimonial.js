import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import backgroundImage from "@/Assets/bg image.png";
import Image from "next/image";
function Testimonial() {
  return (
    <div className="w-[90%] mt-[2.5rem] h-[33rem] custom-linear-background rounded-md flex items-center justify-center p-4 relative">
      <Image
        src={backgroundImage}
        alt="backgroundImage"
        className="absolute w-full h-full object-contain p-2"
      />
      <div>
        <TestimonialCard />
      </div>
    </div>
  );
}

export default Testimonial;
