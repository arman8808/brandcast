import React from "react";
import Image from "next/image";
import LogoImage from "@/Assets/Logo.png";

const page = () => {
  return (
    <div className="flex w-[90%] bg-white p-[10px] items-center justify-between px-[2rem] rounded-[6px] fixed z-10">
      <Image src={LogoImage} alt="Logo" width={300} />
      <button className="text-black border border-[1px] border-solid border-black rounded-[10px] h-fit w-fit p-[10px]">
        Contact Us
      </button>
    </div>
  );
};

export default page;
