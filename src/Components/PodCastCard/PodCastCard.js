import React from "react";
import img from "@/Assets/Rectangle 93.png";
import Image from "next/image";
import micPic from "@/../../public/Images/Group 106.png";
// import ReactAudioPlayer from "react-audio-player";
// import music from "../../Assets/audio/heroAudio.mp3";
function PodCastCard() {
  return (
    <div className="flex flex-col gap-3 shadow rounded-md p-2 cursor-pointer">
      <div className="flex items-center gap-2 flex ">
        <Image src={img} alt="img" className="w-[60%]" />
        <span className="flex items-start justify-center gap-2 flex-col">
          <h6 className="text-golden">Title</h6>
          <p className="text-golden">Sub Title</p>
        </span>
      </div>
      <div className="w-full flex items-center justify-center ">
        {/* <ReactAudioPlayer src="/Audios/heroAudio.mp3" controls /> */}
        <audio controls controlsList="nodownload" className="w-full">
          <source src="/Audios/heroAudio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Image src={micPic} alt="micPic" />
      </div>
    </div>
  );
}

export default PodCastCard;
