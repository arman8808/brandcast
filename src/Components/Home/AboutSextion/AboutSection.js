import React from "react";
import about from "@/Assets/about us.png";
import Image from "next/image";
import Link from "next/link";
function AboutSection() {
  return (
    <div className="w-[90%] bg-[white] mt-[8.5rem] xs:mt-[2.5rem] sm:mt-[7rem] md:mt-[11rem] rounded-md p-2 px-4 flex flex-col gap-4">
      <h2 className="text-subHeading text-5xl font-bold ">About Us</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2">
        <div className="w-full flex items-center justify-center">
          <Image
            src={about}
            alt="about"
            className="object-contain rounded-md"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h2 className="text-subHeading text-3xl font-semibold">
            About Us First
          </h2>
          <p className="text-textColor leading-9">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining h.
          </p>
          <p className="text-textColor leading-9">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five.
          </p>
          <button className="bg-black py-1 px-2 rounded-md button">
            <Link href="https://branding360.ae/about/" target="_blank">
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
