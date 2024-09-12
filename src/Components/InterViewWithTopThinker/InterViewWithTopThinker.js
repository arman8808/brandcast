import React from "react";
import img from "../../../public/Images/Mask group9.png";
import img2 from "../../../public/Images/Mask group-1.png";
import img3 from "../../../public/Images/Mask group-2.png";
import img4 from "../../../public/Images/Mask group-3.png";
import img5 from "../../../public/Images/Mask group-4.png";
import img6 from "../../../public/Images/Mask group-5.png";
import img7 from "../../../public/Images/Mask group-6.png";
import img8 from "../../../public/Images/Mask group-6.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
function InterViewWithTopThinker() {
  return (
    <div className="w-[90%]  mt-[2.5rem] h-[15rem] xs:h-[21rem] sm:h-[20rem] md:h-[15rem] bg-[#060606] p-4 rounded-md grid grid-cols-2 gap-4 xs:grid-cols-1 sm:grid-cols-2 overflow-hidden">
      <div className="w-full h-full flex items-start justify-between flex-col gap-4 xs:gap-1 sm:gap-3">
        <h2 className="text-xl font-semibold">
          Interviews with top thinkers, founders,
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <span
          id="contactForm"
          className="flex items-center md:flex md:items-center md:justify-between md:flex-row justify-between gap-2 sm:flex sm:flex-col-reverse sm:items-start xs:flex xs:flex-col-reverse xs:items-start"
        >
          <button className="bg-golden px-2 py-1 rounded-md">
            Call Us Now
          </button>
          <form className="flex items-center justify-center gap-2 xs:flex-col xs:items-start sm:flex-row">
            <input
              type="text"
              className="outline-none border-none rounded-md p-1 pl-2"
              placeholder="Enter Your Mail"
            />
            <button className="border-golden border-2 outline-none px-2 py-1 rounded-md">
              Send Now
            </button>
          </form>
        </span>
      </div>
      <div
        className="grid grid-cols-3 sm:grid xs:hidden w-full "
        style={{ transform: "rotate(25deg) translateX(-35%) translateY(20%)" }}
      >
        <span className="w-full">
          <Marquee
            direction="up"
            autoFill={true}
            pauseOnHover={true}
            autoWidth={true}
            className="w-full"
          >
            <Image
              src={img}
              alt="img"
              className="w-full object-cover aspect-square"
            />
            <Image
              src={img2}
              alt="img"
              className="w-full object-cover aspect-square"
            />
            <Image
              src={img3}
              alt="img"
              className="w-full object-cover aspect-square"
            />
          </Marquee>
        </span>{" "}
        <span className="w-full">
          <Marquee
            direction="down"
            autoFill={true}
            pauseOnHover={true}
            autoWidth={true}
            className="w-full"
          >
            <Image
              src={img4}
              alt="img"
              className="w-full object-cover aspect-square"
            />
            <Image
              src={img5}
              alt="img"
              className="w-full object-cover aspect-square"
            />
            <Image
              src={img6}
              alt="img"
              className="w-full object-cover aspect-square"
            />
          </Marquee>
        </span>{" "}
        <span className="w-full">
          <Marquee
            direction="up"
            autoFill={true}
            pauseOnHover={true}
            autoWidth={true}
            className="w-full"
          >
            <Image
              src={img7}
              alt="img"
              className="w-full object-cover aspect-square"
            />
            <Image
              src={img8}
              alt="img"
              className="w-full object-cover aspect-square"
            />
            <Image
              src={img}
              alt="img"
              className="w-full object-cover aspect-square"
            />
          </Marquee>
        </span>
      </div>
    </div>
  );
}

export default InterViewWithTopThinker;
