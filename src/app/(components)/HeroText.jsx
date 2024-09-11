// hero-page-server.js (server-side component)
import Image from 'next/image';

export default function HeroPageServer() {
  return (
    <div className="relative min-h-screen w-full  bg-cover flex items-center justify-center bg-fixed"
         style={{ backgroundImage: 'url(https://images.pexels.com/photos/8425027/pexels-photo-8425027.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)' }}
         aria-label="Business services background image">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-20 text-center text-white px-4 md:px-0">
        <h1 className="text-5xl font-bold leading-tight mb-4">Top-Quality Chauffeur Services</h1>
        <p className="text-xl mb-8">Book your next ride with our premium international ground transportation services.</p>
      </div>
    </div>
  );
}
