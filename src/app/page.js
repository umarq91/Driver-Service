import Image from "next/image";
import HeroPage from "./(components)/Hero";
import HowThisWorks from "./(components)/HowThisWorks";
import WhatWeOffer from "./(components)/WhatWeOffer";
import OurFleet from "./(components)/OnFleet";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroPage/>
      {/* <HowThisWorks/> */}
      <OurFleet/>
      <WhatWeOffer/>
      </div>
  );
}
