import React from "react";
import "../styles/DayTime.css";

/* 1. Write a JavaScript program to display the current day
and time in the following format.

Sample Output : Today is : Tuesday. ✅
Current time is : 10 PM ✅*/

const DayTime = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const current = new Date();
    const date = days[current.getDay()];
    const hour = current.toLocaleString('en-US', { hour: 'numeric', hour12: true});
    return (
      <div className="Time">
        <p className="text">The current day is {date}</p>
        <p className="text">The current time is {hour}</p>
      </div>
    );
};

export default DayTime;