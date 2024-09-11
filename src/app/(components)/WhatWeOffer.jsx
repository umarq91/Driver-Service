// pages/what-we-offer.tsx (Server-Side Component)
"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'What We Offer - Explore Our Services',
  description:
    'Discover a variety of services we offer including chauffeur service, airport transfers, meet & greet, and bus rentals. Find the perfect service for your needs.',
};

const services = [
  {
    src: '/images/chauffeur-service.jpg', // local optimized images
    title: 'Chauffeur Service',
    link: '',
  },
  {
    src: '/images/airport-transfer.jpg',
    title: 'Airport Transfer Service',
    link: '',
  },
  {
    src: '/images/meet-and-greet.jpg',
    title: 'Meet & Greet',
    link: '/booking/meetngreet',
  },
  {
    src: '/images/buses-coaches.jpg',
    title: 'Buses and Coaches',
    link: '/booking/busesncoaches',
  },
];

export default function WhatWeOffer() {
  const router = useRouter();

  const handleClick = (link) => {
    if (link) {
      router.push(link);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Our Premium Services
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12">
          Explore the wide range of services we offer for your convenience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleClick(service.link)}
            >
              <Image
                src={service.src}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
