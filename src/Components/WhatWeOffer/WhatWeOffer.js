import React from "react";
import WhatWeOfferCard from "@/Components/WhatWeOfferCard/WhatWeOfferCard";
function WhatWeOffer() {
  return (
    <div className="w-[90%]  mt-[2.5rem] blurBackground rounded-md p-[2rem]">
      <h2 className="text-white text-5xl font-bold flex items-center">
        WHAT WE OFFER <span className="text-golden">!</span>
      </h2>
      <div className="mt-4 grid grid-cols-4 gap-4 mt-[3.5rem] mt-4 sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <WhatWeOfferCard />
        <WhatWeOfferCard />
        <WhatWeOfferCard />
        <WhatWeOfferCard />
      </div>
    </div>
  );
}

export default WhatWeOffer;
