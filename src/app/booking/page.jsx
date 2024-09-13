"use client";
import React, { useState, Suspense } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import emailjs from 'emailjs-com';
import { carsData } from '@/lib/carData';
import CarCards from '@/components/carCards';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import BookingSummary from './(components)/BookingSummary'; // Import server component

function BookingPage() {
  const { toast } = useToast();
  const navigate = useRouter();

  // Define a separate component to handle search params logic
  const BookingContent = () => {
    const queryParams = useSearchParams();
    const date = queryParams.get('date');
    const time = queryParams.get('time');
    const pickUpLocation = queryParams.get('pickUpLocation');
    const dropOffLocation = queryParams.get('dropOffLocation');
    const days = queryParams.get('days');
    const service = queryParams.get('service');

    const [passengers, setPassengers] = useState('');
    const [suitcases, setSuitcases] = useState('');
    const [selectedCar, setSelectedCar] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [userInfo, setUserInfo] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      flightNumber: '',
      message: '',
      pax: '',
      luggage: ''
    });

    // Filter cars based on passengers and suitcases
    const filteredCars = carsData.filter(car => {
      const meetsPassengerCriteria = passengers === '' || car.numberofPeople >= parseInt(passengers);
      const meetsSuitcaseCriteria = suitcases === '' || car.numberofSuitcases >= parseInt(suitcases);
      return meetsPassengerCriteria && meetsSuitcaseCriteria;
    });

    const handleBookClick = (car) => {
      setSelectedCar(car);
      setPassengers(car.numberofPeople);
      setSuitcases(car.numberofSuitcases);
      setShowModal(true);
    };

    const handleModalSubmit = (e) => {
      e.preventDefault();
      const emailContent = `
        Offer Enquiry
        Booking Details:
        Date: ${date}
        Time: ${time}
        Pick Up Location: ${pickUpLocation}
        ${dropOffLocation && ` Drop Off Location: ${dropOffLocation}` }
        ${days && ` Days: ${days}` }
        Service: ${service}
        Car Name: ${selectedCar.name}
        PaxCapacity: ${passengers}
        luggageCapacity: ${suitcases}
        User Information:
        Full Name: ${userInfo.fullName}
        Email: ${userInfo.email}
        Flight Number: ${userInfo.flightNumber}
        phone number : ${userInfo.phoneNumber}
        pax: ${userInfo.pax}
        luggage: ${userInfo.luggage}
        Message: ${userInfo.message}
      `;

      emailjs.send('service_oxx754x', 'template_7uq7eqg', {
        to_name: "Company Name",
        from_name: userInfo.fullName,
        message: emailContent,
      }, 'ZB0s5MrgpcBV07keG')
        .then(() => {
          setShowModal(false);
          setSelectedCar(null);
          setUserInfo({
            fullName: '',
            email: '',
            phoneNumber: '',
            flightNumber: '',
            message: '',
            pax: '',
            luggage: ''
          });
          toast({
            title: "Email Sent",
            description: `Requested a quote for ${selectedCar.name}`,
            className: "bg-white text-gray-800"
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }).catch(() => {
          setShowModal(false);
          setSelectedCar(null);
          toast({
            title: "Email Failed",
            description: 'Failed to send booking request.',
            className: "bg-white text-red-800"
          });
        });
    };

    return (
      <div className="min-h-screen font-poppins flex flex-col-reverse md:flex-row bg-gray-100 p-6 md:p-8">
        <BookingSummary
          date={date}
          time={time}
          pickUpLocation={pickUpLocation}
          dropOffLocation={dropOffLocation}
          days={days}
          service={service}
        />
        <div className="w-full md:w-3/4 bg-white md:p-6 rounded-lg ">
          <div className="mb-6 bg-gray-100 px-6 py-8 rounded-lg ">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter Results</h2>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className='w-full md:w-1/2 mb-4 md:mb-0'>
                <label htmlFor="passengers" className="block text-gray-700 mb-2 font-medium">Passengers</label>
                <select
                  id="passengers"
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                >
                  <option value="">Any</option>
                  {[...Array(7)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div className='w-full md:w-1/2'>
                <label htmlFor="suitcases" className="block text-gray-700 mb-2 font-medium">Suitcases</label>
                <select
                  id="suitcases"
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={suitcases}
                  onChange={(e) => setSuitcases(e.target.value)}
                >
                  <option value="">Any</option>
                  {[...Array(5)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredCars.map((car) => (
            <CarCards
              key={car.name}
              car={car}
              handleModalSubmit={handleModalSubmit}
              userInfo={userInfo}
              handleBookClick={handleBookClick}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}

export default BookingPage;
