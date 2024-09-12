import React from "react";
import Image from "next/image";
import HeroSectionBGImage from "@/Assets/HeroSectionImage.png";
import StatButtonIcon from "@/Assets/Stat Button Icon.png";
import TextImage from "@/Assets/textImage.png";
import Icon from "@/Assets/Icon.png";
import ProgessImage from "@/Assets/progessHero.png";
import cloudImage from "@/Assets/cloudImage.png";
import brandcastImage from "@/Assets/brandcast.png";
import numbersBGImage from "@/Assets/numbersBGImage.png";
import { CiPlay1 } from "react-icons/ci";
import { FaPause } from "react-icons/fa";

const page = () => {
  return (
    <div className="mt-[7rem] xs:mt-[4rem] sm:mt-[7rem] w-[90%] relative flex items-center justify-center h-[500px]">
      <Image
        src={HeroSectionBGImage}
        alt="HeroSectionBackground"
        className="w-full h-full"
      />
      <Image
        src={brandcastImage}
        alt="HeroSectionBackground"
        className="absolute bottom-[2rem] md:bottom-[3rem] lg:bottom-[5rem] right-[2rem] w-[400px] h-[250px] xs:w-[250px] xs:h-[150px] xs:hidden sm:flex md:w-[400px] md:h-[250px]"
        layout="intrinsic"
      />

      <div className="absolute flex flex-col gap-[1rem] left-[10%] xs:p-4">
        <div>
          <h1 className="text-[45px] xs:text-[30px] font-[600] xs:font-[500] sm:text-[45px] sm:font-[600] ">
            Broadcasting Excellence at Your
          </h1>
          <div className="flex gap-[1rem]">
            <h1 className="text-[45px] xs:text-[30px] font-[600] xs:font-[500]  sm:text-[45px] sm:font-[600] ">
              Fingertips
            </h1>
            <Image src={TextImage} alt="TextImage" />
          </div>
        </div>

        <p className="w-[50%] xs:w-[80%] sm:w-[70%] md:w-[50%]">
          Delivering high-quality podcasts and live events tailored to your
          needs.
        </p>
        <div className="flex gap-[1rem] items-center ">
          <Image src={Icon} alt="icon" className="xs:hidden sm:block" />
          <Image src={ProgessImage} alt="progessImage" />

          <div className="relative w-fit xs:hidden sm:block">
            <div className="bg-[#FFBB01] rounded-full w-[50px] h-[50px]"></div>
            <div className="bg-[#000000] rounded-full w-[50px] h-[50px] flex flex-col items-center justify-center absolute top-[25px]">
              <CiPlay1 className="text-[30px]" />
            </div>
          </div>
          <div className="xs:hidden sm:block">
            <p>Lets See</p>
            <p>How We Did It</p>
          </div>
        </div>

        <div className="bg-white w-fit text-black flex gap-[10px] p-[1rem] rounded-[4px] border border-[2px] border-[#FFBB01] items-center relative xs:hidden sm:flex">
          <p className="font-[600] text-[20px]">Get It Now</p>
          <Image src={cloudImage} alt="cloudImage" />
          <div className="bg-[#000000] rounded-full w-[20px] h-[20px] flex flex-col items-center justify-center absolute top-[-10px] left-[-10px]">
            <CiPlay1 className="text-[10px] text-white" />
          </div>
          <div className="bg-[#000000] rounded-full w-[20px] h-[20px] flex flex-col items-center justify-center absolute bottom-[-10px] right-[10px]">
            <FaPause className="text-[10px] text-white" />
          </div>
        </div>
      </div>
      <div
        className="bg-white absolute w-[80%] xs:w-[90%] rounded-md bottom-[-8rem] xs:bottom-[-2.5rem] sm:bottom-[-7rem] md:bottom-[-7.5rem] lg:bottom-[-8rem] xs:py-4 sm:py-3 md:py-1"
        // style={{ backgroundImage: `url('${numbersBGImage}')` }}
      >
        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <Image
            src={numbersBGImage}
            alt="numbersBGImage"
            className="w-full h-full"
          />
          <div className="absolute grid grid-cols-3 w-full justify-center p-[1rem] gap-[1rem]">
            <div className="text-black flex border text-[60px] w-full justify-center border-[#FFBB01] border-solid rounded-md gap-1 xs:p-2 sm:p-1">
              <p
                className="font-bold text-[70px] xs:text-[20px] sm:text-[45px] lg:text-[70px] text-white"
                style={{
                  textShadow: `-1px -1px 0 #FFBB01, 1px -1px 0 #FFBB01, -1px 1px 0 #FFBB01, 1px 1px 0 #FFBB01`,
                }}
              >
                45k
              </p>
              <div className="flex items-end justify-end h-[90%] xs:hidden sm:flex">
                <Image
                  src={StatButtonIcon}
                  alt="Stat Button Icon"
                  className="h-[2.5rem] object-none"
                />
              </div>
            </div>{" "}
            <div className="text-black flex border text-[60px] w-full justify-center border-[#FFBB01] border-solid rounded-md gap-1 xs:p-2 sm:p-1">
              <p
                className="font-bold text-[70px] xs:text-[20px] sm:text-[45px] lg:text-[70px] text-white"
                style={{
                  textShadow: `-1px -1px 0 #FFBB01, 1px -1px 0 #FFBB01, -1px 1px 0 #FFBB01, 1px 1px 0 #FFBB01`,
                }}
              >
                20k
              </p>
              <div className="flex items-end justify-end h-[90%] xs:hidden sm:flex">
                <Image
                  src={StatButtonIcon}
                  alt="Stat Button Icon"
                  className="h-[2.5rem] object-none"
                />
              </div>
            </div>{" "}
            <div className="text-black flex border text-[60px] w-full justify-center border-[#FFBB01] border-solid rounded-md gap-1 xs:p-2 sm:p-1">
              <p
                className="font-bold text-[70px] xs:text-[20px] sm:text-[45px] lg:text-[70px] text-white"
                style={{
                  textShadow: `-1px -1px 0 #FFBB01, 1px -1px 0 #FFBB01, -1px 1px 0 #FFBB01, 1px 1px 0 #FFBB01`,
                }}
              >
                45k
              </p>
              <div className="flex items-end justify-end h-[90%] xs:hidden sm:flex">
                <Image
                  src={StatButtonIcon}
                  alt="Stat Button Icon"
                  className="h-[2.5rem] object-none"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
