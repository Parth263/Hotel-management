import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComp({ selectedDate, onChange, label, id }) {
  return (
    <div className=" flex flex-col">
      <label htmlFor={id} className="text-[10px] text-white mb-1">
        {label}
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        className="bg-white text-black rounded-md border p-1 h-8 w-36"
        id={id}
      />
    </div>
  );
}

export default DatePickerComp;
