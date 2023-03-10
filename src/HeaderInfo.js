import React from "react";
import { Triangle } from "react-loader-spinner";

import "./HeaderInfo.css";

export default function HeaderInfo() {
  const time = new Date();
  console.log(time);

  // ---------------------------------------------------Setting Date
  const formatDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = time.getDate();
    const month = months[time.getMonth()];
    const year = time.getFullYear();
    const dateString = `${month}, ${day} ${year}`;
    return dateString;
  };

  // ---------------------------------------------------Setting Time
  const formatTime = (time) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const timeString = hours + ":" + minutes;
    return timeString;
  };

  // ---------------------------------------------------Return Part
  if ( time === null) {
    return (
      <div className="HeaderInfo">
        <h1>Weather Forecast</h1>
        <Triangle
          height="100"
          width="100"
          color="#26C9FC"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}/>
        </div>);
  }
  return (
    <div className="HeaderInfo">
      <h1>Weather Forecast</h1>
      <div className="CurrentDate">
        <p>
          {formatDate(time)}
        </p>
        <p>
          {formatTime(time)}
        </p>
      </div>
    </div>
  );
}
