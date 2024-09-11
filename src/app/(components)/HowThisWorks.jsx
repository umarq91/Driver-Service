// Server Component for SEO optimization
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'How Our Service Works - Get Your Car in 3 Simple Steps',
  description: 'Learn how our car rental service works in three easy steps. Choose your location, set the pickup date, and book the perfect car.',
};

function HowThisWorks() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-16 px-4">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
        Simplified Chauffeur Service
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-12">
        Fast & Easy: Book Your Ride in 3 Steps
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <Image
            src="https://images.pexels.com/photos/2574078/pexels-photo-2574078.jpeg?cs=srgb&dl=pexels-thinkscotty-2574078.jpg&fm=jpg" // Use local assets for better SEO
            alt="Location Selection"
            className="mb-4"
            width={96}
            height={160}
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Step 1: Choose Location</h3>
          <p className="text-gray-600">
            Select the pickup location nearest to you for fast service.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <img
            src="https://t4.ftcdn.net/jpg/02/66/93/65/360_F_266936504_3w1DXsWwy3CZqCL162jEDdfTPPi6vGlp.jpg"
            alt="Pickup Date"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Step 2: Select Date</h3>
          <p className="text-gray-600">
            Pick the date and time you need the car, and we’ll have it ready.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <img
            src="https://cdn.pixabay.com/photo/2014/04/02/14/11/car-306442_1280.png"
            alt="Book Car"
            className="w-24 h-24 mb-4 object-fill"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Step 3: Book the Car</h3>
          <p className="text-gray-600">
            Choose a car that fits your needs, and confirm your booking.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowThisWorks;
