import React from "react";
import img from "@/Assets/Icon.png";
import Image from "next/image";
function TestimonialCard() {
  return (
    <div className="bg-white w-[25rem] flex items-center justify-center flex-col relative py-[2.5rem] px-[2rem] rounded-md gap-4">
      <Image src={img} alt="img" className="absolute top-[-2rem]" />
      <div className="flex items-start justify-start gap-2 flex-col">
        <h6 className="text-testimonialHeading">Workshop Experience</h6>
        <p className="text-heading">
          Attending [Workshop Name] was an enlightening experience. The sessions
          were engaging, and I walked away with practical skills and knowledge
          that I can apply immediately. Highly recommended
        </p>
        <p className="text-testimonialHeading">Aquib designer</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
