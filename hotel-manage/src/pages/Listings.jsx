import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import HotelListing from "../components/HotelListing";
import BookingSummary from "../components/BookingSummery";

function Listings() {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const handleSelectRooms = (roomDetails) => {
    setSelectedRooms(prevRooms => [...prevRooms, roomDetails]);
  };

  return (
    <div>
      <Navbar />
      <FilterBar />

      <div className="flex">
        <div className="w-3/4">
     
          <HotelListing
            imageUrl="/src/assets/Hotel-img.jpeg"
            title="Deluxe Room"
            capacity={{ beds: 2, baths: 2 }}
            rate="24,000"
            currency="₹"
            availableDates={[{ start: "May 01", end: "May 02" }, { start: "May 03", end: "May 04" }]}
            onSelectRoom={handleSelectRooms} 
          />

<HotelListing
            imageUrl="/src/assets/Hotel-img.jpeg"
            title="Deluxe Room"
            capacity={{ beds: 2, baths: 2 }}
            rate="24,000"
            currency="₹"
            availableDates={[{ start: "May 01", end: "May 02" }, { start: "May 03", end: "May 04" }]}
            onSelectRoom={handleSelectRooms} 
          />
         
         <HotelListing
            imageUrl="/src/assets/Hotel-img.jpeg"
            title="Deluxe Room"
            capacity={{ beds: 2, baths: 2 }}
            rate="24,000"
            currency="₹"
            availableDates={[{ start: "May 01", end: "May 02" }, { start: "May 03", end: "May 04" }]}
            onSelectRoom={handleSelectRooms} 
          />
         
         <HotelListing
            imageUrl="/src/assets/Hotel-img.jpeg"
            title="2XL Deluxe Room"
            capacity={{ beds: 2, baths: 2 }}
            rate="24,000"
            currency="₹"
            availableDates={[{ start: "May 01", end: "May 02" }, { start: "May 03", end: "May 04" }]}
            onSelectRoom={handleSelectRooms} 
          />
         
         
        </div>
        <div className="w-1/4">
          <BookingSummary selectedRooms={selectedRooms} />
        </div>
      </div>
    </div>
  );
}

export default Listings;
