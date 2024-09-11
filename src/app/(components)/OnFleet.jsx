import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCarAlt, FaCalendarAlt } from 'react-icons/fa'

function OurFleet() {
  return (
    <div className="font-bold max-w-6xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl text-center mb-4">Our Fleet</h1>
      <hr className="my-5 border-t-2 border-gray-300" />
      
      {/* Fleet Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* BMW Card */}
        <div className="relative group h-72 sm:h-96">
          <Image
            src="https://hips.hearstapps.com/hmg-prod/images/2024-bmw-x5-m60i-102-6602d48787fb7.jpg?crop=0.772xw:0.651xh;0.0897xw,0.171xh&resize=2048:*"
            layout="fill"
            className="object-cover rounded-3xl"
            alt="BMW"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>

          {/* BMW Details */}
          <h3 className="absolute text-4xl font-sans top-5 left-5 text-white flex items-center gap-2">
            <FaCarAlt /> BMW
          </h3>
          <p className="absolute text-lg top-14 left-6 text-white">Reliable</p>

          {/* Book Now Button */}
          <div className="absolute bottom-4 right-6">
          <Link href="/booking" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2">
              <FaCalendarAlt /> Book Now
            </Link>
          </div>
        </div>

        {/* Second Car Card */}
        <div className="relative group h-72 sm:h-96">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/59a18fe46b8f5be647f23512/1632086885978-1RPPQL92APS54O2GJOHU/B5394C52-6153-4ACF-81E4-B6C35EC4F162.jpeg"
            layout="fill"
            className="object-cover rounded-3xl"
            alt="Mercedes"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>

          {/* Car Details */}
          <h3 className="absolute text-3xl font-sans top-5 left-5 text-white flex items-center gap-2">
            <FaCarAlt /> Mercedes
          </h3>
          <p className="absolute text-lg top-14 left-6 text-white">Luxury & Comfort</p>

          {/* Book Now Button */}
          <div className="absolute bottom-4 right-6">
            <Link href="/booking" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2">
              <FaCalendarAlt /> Book Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurFleet
