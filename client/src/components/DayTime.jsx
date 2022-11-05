import React from "react";

/* 1. Write a JavaScript program to display the current day
and time in the following format.

Sample Output : Today is : Tuesday. ✅
Current time is : 10 PM : 30 : 38 */

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
    return (
        <div>The current day is {date} </div>
    );
};

export default DayTime;