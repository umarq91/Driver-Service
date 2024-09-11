// hero-page-client.js (client-side component)
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import HeroPageServer from './HeroText';

export default function HeroPageClient() {
  const router = useRouter();
  const [service, setService] = useState('fullDayChauffeur');
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [days, setDays] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!startDate || !time || !pickUpLocation || (service === 'airportTransfer' && !dropOffLocation) || 
        (service === 'fullDayChauffeur' && (days < 1 || days > 8))) {
      setErrorMessage('Please fill all the fields correctly.');
      return;
    }

    const queryParams = new URLSearchParams({
      date: startDate.toISOString().split('T')[0],
      time,
      pickUpLocation,
      dropOffLocation: service === 'airportTransfer' ? dropOffLocation : undefined,
      days: service === 'fullDayChauffeur' ? days : undefined,
      service,
    }).toString();

    router.push(`/booking?${queryParams}`);
  };

  return (
    <section className="bg-gray-100 bg-white text-gray-800">
        <HeroPageServer/>
      <div className="container mx-auto max-w-4xl">
        <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Book Your Ride</h2>

          <div className="grid gap-4 sm:grid-cols-2 mb-4">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Select Service</label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="airportTransfer">Airport Transfer</option>
                <option value="fullDayChauffeur">Full Day Chauffeur</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Pick Up Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="mt-1 block w-full p-2 border-gray-300 rounded-md"
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Pick Up Time</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="pickUpLocation" className="block text-sm font-medium text-gray-700">Pick Up Location</label>
              <input
                type="text"
                id="pickUpLocation"
                value={pickUpLocation}
                onChange={(e) => setPickUpLocation(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter pick up location"
              />
            </div>

            {service === 'airportTransfer' && (
              <div>
                <label htmlFor="dropOffLocation" className="block text-sm font-medium text-gray-700">Drop Off Location</label>
                <input
                  type="text"
                  id="dropOffLocation"
                  value={dropOffLocation}
                  onChange={(e) => setDropOffLocation(e.target.value)}
                  className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter drop off location"
                />
              </div>
            )}

            {service === 'fullDayChauffeur' && (
              <div>
                <label htmlFor="days" className="block text-sm font-medium text-gray-700">Number of Days</label>
                <input
                  type="number"
                  id="days"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  min="1"
                  max="8"
                  className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            )}
          </div>

          {errorMessage && <p className="text-red-600 text-sm mb-4">{errorMessage}</p>}

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}
