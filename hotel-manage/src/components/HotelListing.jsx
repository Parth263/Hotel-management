import React from 'react';
import { FaBed, FaBath, FaCalendarCheck } from 'react-icons/fa';

function HotelListing({ imageUrl, title, capacity, rate, currency, availableDates, onSelectRoom }) {
    const handleBooking = () => {
        const roomDetails = {  title, capacity, rate, currency, availableDates };
        onSelectRoom(roomDetails); 
    };

    return (
        <div className="flex max-w-4xl mx-auto my-6 bg-white rounded-lg overflow-hidden shadow-lg">
            <img className="w-1/3" src={imageUrl} alt={title} />
            <div className="w-2/3 p-4">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-gray-700 flex items-center gap-2">
                    Room Capacity: <FaBed /> {capacity.beds} <FaBath /> {capacity.baths}
                </p>
                <p>Room Rates Inclusive of Tax</p>
                <div className="my-2">
                    <button className="text-blue-500 hover:text-blue-700 text-sm font-semibold mr-2">Room Info</button>
                    <button className="text-blue-500 hover:text-blue-700 text-sm font-semibold">Enquire</button>
                </div>
                <div className="my-2 p-4 border-t border-b">
                    <div className="flex justify-start space-x-3 mt-2">
                        {availableDates.map((dateRange, index) => (
                            <button key={index} className="bg-green-200 text-green-700 px-2 py-1 rounded">
                                {dateRange.start} - {dateRange.end}
                            </button>
                        ))}
                        <button className="bg-red-200 text-red-700 px-2 py-1 rounded" onClick={handleBooking}>Book Now</button>
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <span className="text-gray-900 font-bold">{currency} {rate}</span>
                    <button className="flex items-center text-blue-500 hover:text-blue-700 text-sm font-semibold">
                        <FaCalendarCheck className="mr-1" />
                        Availability Calendar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HotelListing;
