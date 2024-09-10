import React from "react";
import img from "../.././../public/Images/Mask group.png";
import Image from "next/image";
function WhatWeOfferCard() {
  return (
    <div className="bg-white relative flex items-center justify-center flex-col h-[10rem] rounded-md relative">
      <span className="bg-black p-3 rounded-[50%] absolute top-[-2rem]">
        <Image src={img} alt="img" />
      </span>
      <span>
        <h6 className="text-subHeading">Home</h6>
        <p className="text-textColor">home</p>
      </span>
    </div>
  );
}

export default WhatWeOfferCard;
