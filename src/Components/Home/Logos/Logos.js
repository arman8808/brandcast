import React from "react";
import cleverClicks from "@/Assets/Mask group.png";
import Branding360 from "@/Assets/Mask group-1.png";
import Brandast from "@/Assets/Mask group-2.png";
import Blisslens from "@/Assets/Mask group-3.png";
import Image from "next/image";
function Logos() {
  return (
    <div className="w-[90%]  mt-[2.5rem] grid grid-cols-4 xs:grid-cols-2 sm:grid-cols-4">
      <Image src={cleverClicks} alt="cleverclicks" className="object-contain" />
      <Image src={Branding360} alt="Branding360" className="object-contain" />
      <Image src={Brandast} alt="Brandast" className="object-contain" />
      <Image src={Blisslens} alt="Blisslens" className="object-contain" />
    </div>
  );
}

export default Logos;
