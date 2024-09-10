import React from "react";
import titleImage from "@/Assets/image 14.png";
import Image from "next/image";
import PodCastCard from "@/Components/PodCastCard/PodCastCard";
function LatestPodCast() {
  return (
    <div className="w-[90%]  mt-[2.5rem] bg-white rounded-md p-2 px-4">
      <h2 className="text-subHeading text-5xl font-bold flex items-center">
        Latest PodCast{" "}
        <Image
          src={titleImage}
          alt="titleImage"
          className="object-contain h-[5rem]"
        />
      </h2>
      <div className="grid grid-cols-4 gap-2 mt-4">
        <PodCastCard />
        <PodCastCard />
        <PodCastCard />
        <PodCastCard />
      </div>
    </div>
  );
}

export default LatestPodCast;
