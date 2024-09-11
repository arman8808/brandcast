import React from "react";
import logo from "@/Assets/Logo.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full bg-black py-[2rem]  flex items-center justify-center flex-col gap-4">
      <div className="w-[90%] grid grid-cols-2 pb-4">
        <div className="flex items-start justify-center gap-4">
          <Image src={logo} alt="logo" className="object-contain h-[4.5rem]" />
          <span className="flex items-start justify-start flex-col gap-2">
            <p className="text-textColor">
              A cutting-edge marketing agency in India renowned for enhancing
              brands and businesses through sustainable solutions and growth
              strategies!
            </p>
            <p className="text-textColor">+919919444434</p>
            <p className="text-textColor">admin@branding360.in</p>
          </span>
        </div>
        <div className="flex items-start justify-center gap-[3rem]">
          <span className="flex items-start justify-start flex-col gap-2">
            <p className="text-textColor font-semibold">Product</p>
            <ul className="text-textColor flex flex-col gap-1">
              <li>Auto capture</li>
              <li>Auto capture</li>
              <li>Auto capture</li>
              <li>Auto capture</li>
              <li>Auto capture</li>
            </ul>
          </span>
          <span className="flex items-center justify-center gap-4">
            <FaFacebook className="text-[1.5rem]" />
            <FaTwitter className="text-[1.5rem]" />
            <FaInstagram className="text-[1.5rem]" />
            <FaLinkedin />
          </span>
        </div>
      </div>
      <div className="w-[90%] flex items-center justify-center">
        <p className="text-textColor">@2024 BrandCast.All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
