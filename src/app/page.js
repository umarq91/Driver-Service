import Image from "next/image";
import HeroPage from "./(components)/Hero";
import HowThisWorks from "./(components)/HowThisWorks";
import WhatWeOffer from "./(components)/WhatWeOffer";
import OurFleet from "./(components)/OnFleet";
import { TracingBeam } from "@/components/ui/tracing-beam";
import HeroPageServer from "./(components)/HeroText";

export default function Home() {
  return (
    <div className='min-h-screen'>
              <HeroPageServer/>
      <TracingBeam>
      <HeroPage/>
      {/* <HowThisWorks/> */}

      <OurFleet/>
      <WhatWeOffer/>
      </TracingBeam>
      </div>
  );
}