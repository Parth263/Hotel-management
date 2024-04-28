import React from "react";
import { Link } from "react-router-dom";
import DatePickerComp from "./DatePickerComp";
import { MdLocalOffer } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { useState } from "react";
import { FaHome } from "react-icons/fa"; // Home
import { FaInfoCircle } from "react-icons/fa"; // Hotel Info
import { FaSignInAlt } from "react-icons/fa"; // Login
import { FaPhone } from "react-icons/fa"; // Contact
import { FaMapMarkerAlt } from "react-icons/fa"; // Map
import { FaCalendarTimes } from "react-icons/fa"; // Cancel Bookings

function Navbar() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="bg-gray-800 text-white p-4 w-full flex flex-col md:h-36 ">
      <div className=" container mx-auto flex justify-between items-center">
        <div className="text-lg">Blue Jay Hostel</div>
        <div className="space-x-4 text-sm">
          <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded">
            Hotel info
          </Link>
          <Link to="/services" className="hover:bg-gray-700 px-3 py-2 rounded">
            login
          </Link>
          <Link to="/booking" className="hover:bg-gray-700 px-3 py-2 rounded">
            Contact
          </Link>
          <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">
            Map
          </Link>
          <Link to="/Cancel" className="hover:bg-gray-700 px-3 py-2 rounded">
            Cancel Bookings
          </Link>
        </div>
      </div>
      {/* Booking System  */}
      <div className=" flex items-center justify-center gap-3 mt-6">
        <DatePickerComp
          selectedDate={checkInDate}
          onChange={setCheckInDate}
          label="Check In"
          id="checkInDate"
        />
        <DatePickerComp
          selectedDate={checkOutDate}
          onChange={setCheckOutDate}
          label="Check Out"
          id="checkOutDate"
        />
        <button className=" p-2 mt-4 text-md" onClick={onclick}>
          Check Availability
        </button>
        <div className="flex items-center mt-4">
          <MdLocalOffer className="text-lg text-white" />
          <button className="p-2 text-sm" onClick={onclick}>
            Promotional Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
