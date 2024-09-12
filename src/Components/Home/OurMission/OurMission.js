import React from "react";
import mic from "@/Assets/Vector.png";
function OurMission() {
  return (
    <div className="w-[90%]  mt-[2.5rem] grid grid-cols-2 gap-3 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2">
      <div
        className="bg-white rounded-md w-full min-h-[25rem] p-4 flex flex-col gap-2 hover:border-golden border-2 transition delay-150 duration-300 ease-in-out cursor-pointer"
        style={{
          backgroundImage: `url("${mic.src}")`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          backgroundPositionY: "bottom",
          backgroundSize: "10rem",
        }}
      >
        <h2 className="text-heading text-2xl font-semibold">Our Mission</h2>
        <p className="text-textColor">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five{" "}
        </p>
        <p className="text-textColor">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five{" "}
        </p>
      </div>
      <div
        className="bg-white rounded-md w-full min-h-[25rem] p-4 flex flex-col gap-2 hover:border-golden border-2 transition delay-150 duration-300 ease-in-out cursor-pointer"
        style={{
          backgroundImage: `url("${mic.src}")`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          backgroundPositionY: "bottom",
          backgroundSize: "10rem",
        }}
      >
        <h2 className="text-heading text-2xl font-semibold">Our Vision</h2>
        <p className="text-textColor">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five{" "}
        </p>
        <p className="text-textColor">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five.
        </p>
      </div>
    </div>
  );
}

export default OurMission;
