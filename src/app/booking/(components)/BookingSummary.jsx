// BookingSummary.js (Server Component)

export default function BookingSummary({ date, time, pickUpLocation, dropOffLocation, days, service }) {
  return (
    <div className="w-full md:w-1/4 bg-white p-6 rounded-lg mb-6 md:mb-0">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Booking Summary</h1>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <div className="text-gray-400 uppercase text-sm">Date</div>
          <div className="text-gray-800 text-base">{date}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-gray-400 uppercase text-sm">Time</div>
          <div className="text-gray-800 text-base">{time}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-gray-400 uppercase text-sm">Pick Up Location</div>
          <div className="text-gray-800 text-base">{pickUpLocation}</div>
        </div>
        {service === 'airportTransfer' && (
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 uppercase text-sm">Drop Off Location</div>
            <div className="text-gray-800 text-base">{dropOffLocation}</div>
          </div>
        )}
        {service === 'fullDayChauffeur' && (
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 uppercase text-sm">Days</div>
            <div className="text-gray-800 text-base">{days}</div>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="text-gray-400 uppercase text-sm">Service Type</div>
          <div className="text-gray-800 text-base capitalize">{service}</div>
        </div>
      </div>
    </div>
  );
}
