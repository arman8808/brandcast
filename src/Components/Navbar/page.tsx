import React from "react";
import Image from "next/image";
import LogoImage from "@/Assets/Logo.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex w-[90%] bg-white p-[10px] items-center justify-between px-[2rem] xs:px-[0.5rem] sm:px-[2rem] rounded-[6px] fixed z-10">
      <Image
        src={LogoImage}
        alt="Logo"
        className="w-[300px] xs:w-[150px] sm:w-[300px]"
      />
      <button className="text-black border border-[1px] border-solid border-black rounded-[10px] h-fit w-fit p-[10px] xs:p-[5px] sm:p-[10px]">
        <Link href="#contactForm">Contact Us</Link>
      </button>
    </div>
  );
};

export default page;
