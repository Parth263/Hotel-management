import React from "react";

import { FaFilter } from "react-icons/fa";

const FilterBar = () => {
  const handleFilter = (filterType) => {
    console.log(filterType);
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md p-2 rounded-lg">
      <button
        className="flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-gray-500 border border-gray-300 hover:text-gray-700 focus:outline-none"
        onClick={() => handleFilter("filterSearch")}
      >
        <FaFilter className="mr-2" />
        Filter Your Search
      </button>

      <div className="flex space-x-4">
        <button
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-500 border border-gray-300 hover:text-gray-700 focus:outline-none"
          onClick={() => handleFilter("compareRooms")}
        >
          Compare Rooms
        </button>
        <div className="text-sm text-gray-500 mt-2">Rates are in INR (₹)</div>
        <div className="text-sm font-medium text-gray-700 mt-2">
          Show Price:
        </div>
        <button
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-500 border border-gray-300 hover:text-gray-700 focus:outline-none"
          onClick={() => handleFilter("perRoomPerNight")}
        >
          Per Room Per Night
        </button>
        <button
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-500 border border-gray-300 hover:text-gray-700 focus:outline-none"
          onClick={() => handleFilter("priceForWholeStay")}
        >
          Price For Whole Stay
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
