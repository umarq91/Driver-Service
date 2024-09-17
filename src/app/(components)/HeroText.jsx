// hero-page-server.js (server-side component)
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Cover } from '@/components/ui/cover';
import Image from 'next/image';

export default function HeroPageServer() {
  return (
    // <div className="relative min-h-screen w-full  bg-cover flex items-center justify-center bg-fixed"
    //      aria-label="Business services ">
    //   <div className="absolute inset-0 bg-black opacity-60"></div>
    //   <div className="relative z-20 text-center text-white px-4 md:px-0">
    //     {/* <h1 className="text-5xl font-bold leading-tight mb-4">Top-Quality Chauffeur Services</h1>
    //     <p className="text-xl mb-8">Book your next ride with our premium international ground transportation services.</p> */}
    //      <div>
    //   <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto  font-poppins text-center mt-6 relative z-20 py-6 bg-clip-text  text-white">
    //     Top Quality <br /> <Cover>Chauffeur Services</Cover>
    //   </h1>
    // </div>
    //     <BackgroundBeams/>
    //   </div>
    // </div>
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-2xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Xenon Chauffeur Service
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Book your next ride with our premium international ground transportation services
        </p>

      </div>
      <BackgroundBeams />
    </div>
  );
}
