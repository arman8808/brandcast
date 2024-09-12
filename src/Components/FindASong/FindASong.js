import React from "react";
import backgroundImage from "../../../public/Images/Mask group1.png";
import youtube from "../../../public/Images/Group 120.png";
import spotify from "../../../public/Images/Group 117.png";
import instagram from "../../../public/Images/Group 121.png";
import amazonMusic from "../../../public/Images/Group 123.png";
import musicLogo from "../../../public/Images/Group 122.png";
import Image from "next/image";
function FindASong() {
  return (
    <div
      className="w-[90%]  mt-[2.5rem]  rounded-md p-[2rem] border-2 border-white  h-[12rem] xs:h-[25rem] md:h-[12rem] flex items-center justify-between md:flex sm:grid-cols-1 xs:grid-cols-1 xs:grid sm:grid xs:gap-[1rem] sm:gap-[1rem]"
      style={{
        backgroundImage: `url("${backgroundImage.src}")`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "bottom",
        backgroundSize: "55%",
      }}
    >
      <h2 className="text-white text-5xl font-bold flex items-center custom-underline ">
        Find A&nbsp; <span className="text-golden">Song!</span>
      </h2>
      <span className="flex items-center xs:grid xs:grid-cols-3 sm:flex">
        <Image src={youtube} alt="youtube" />
        <Image src={amazonMusic} alt="amazonMusic" />
        <Image src={spotify} alt="spotify" />
        <Image src={musicLogo} alt="musicLogo" />
        <Image src={instagram} alt="instagram" />
      </span>
    </div>
  );
}

export default FindASong;
