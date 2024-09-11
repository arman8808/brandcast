import Image from "next/image";
import Navbar from "@/Components/Navbar/page";
import HeroSection from "@/Components/Home/HeroSection/page";
import AboutSection from "@/Components/Home/AboutSextion/AboutSection";
import Logos from "@/Components/Home/Logos/Logos";
import OurMission from "@/Components/Home/OurMission/OurMission";
import LatestPodCast from "@/Components/Home/LatestPodCast/LatestPodCast";
import WhatWeOffer from "@/Components/WhatWeOffer/WhatWeOffer";
import FindASong from "@/Components/FindASong/FindASong";
import Testimonial from "@/Components/Testimonial/Testimonial";
import InterViewWithTopThinker from "@/Components/InterViewWithTopThinker/InterViewWithTopThinker";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[1rem] gap-[2rem]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Logos />
      <OurMission />
      <LatestPodCast />
      <WhatWeOffer />
      <FindASong />
      <Testimonial />
      <InterViewWithTopThinker />
      <Footer />
    </main>
  );
}
