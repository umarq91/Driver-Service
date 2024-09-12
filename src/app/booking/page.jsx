"use client";
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import emailjs from 'emailjs-com';
import { carsData } from '@/lib/carData';
import CarCards from '@/components/carCards';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import BookingSummary from './(components)/BookingSummary'; // Import server component

function BookingPage() {
  const { toast } = useToast();
  const queryParams = useSearchParams();
  const navigate = useRouter();
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

    This is a new offer enquiry for a Apollo transport service.

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
    pax: ${userInfo.numberOfPeople}
    luggage: ${userInfo.numberOfSuitcases}
    Message: ${userInfo.message}
  `;

    emailjs.send('service_oxx754x', 'template_7uq7eqg', {
      to_name: "Company Name", // Company Name
      from_name: userInfo.fullName,
      message: emailContent,
    }, 'ZB0s5MrgpcBV07keG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowModal(false);
        setSelectedCar(null);
        setUserInfo(initialUserInfo);
        toast({
          title: "Email Sent",
          description: `Requested a quote for ${selectedCar.name}`,
          className: "bg-white text-gray-800"
        });

        // Send Copy To the Client email as well 
        const clientMessage = `
        Dear ${userInfo.fullName},

        Thank you for choosing our services for your transportation needs. 

        We have successfully received your booking request with the following details:

        **Booking Details:**
        Date: ${date}
        Time: ${time}
        Pick Up Location: ${pickUpLocation}
        ${dropOffLocation ? `Drop Off Location: ${dropOffLocation}` : ''}
        ${days ? `Days: ${days}` : ''}
        Service: ${service}

        **Car Details:**
        Car Name: ${selectedCar.name}
        Pax Capacity: ${passengers}
        Luggage Capacity: ${suitcases}

        **User Information:**
        Full Name: ${userInfo.fullName}
        Email: ${userInfo.email}
        Phone Number: ${userInfo.phoneNumber}
        Flight Number: ${userInfo.flightNumber}
        Message: ${userInfo.message}

        Our team is now processing your request and will get back to you shortly with a confirmation and further details.

        If you have any questions or need to make changes to your booking, please do not hesitate to contact us.

        For cancellation or additional information, please do not hesitate to contact us.
        Email : info@atsworld.com
        

        Best regards,
        Apollo transport service
        `;

        emailjs.send('service_oxx754x', 'template_fdjemvn', {
          to_email: userInfo.email,
          from_name: "Luxury Transport & Chauffeur Service",
          message: clientMessage,
        }, 'ZB0s5MrgpcBV07keG').then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }).catch((error) => {
          toast({
            title: "Email Failed",
            description: 'Failed to send booking request.',
            className: "bg-white text-red-800"
          })
        })

      }, (error) => {
        console.log('FAILED...', error);
        setShowModal(false);
        setSelectedCar(null);
        setUserInfo(initialUserInfo);
        toast({
          title: "Email Failed",
          description: 'Failed to send booking request.',
          className: "bg-white text-red-800"
        });
      });
      setTimeout(() => {
        window.location.reload()
      }, 2000);
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
          {/* Filter and Car Listings */}
          {/* Filter */}
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
  
          {/* Car Listings */}
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
  }
  
  export default BookingPage;
  