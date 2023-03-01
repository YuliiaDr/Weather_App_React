import React from "react";
import "./HeaderInfo.css";

export default function HeaderInfo(props) {
  console.log(props);
  const { time } = props;

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
    const date = new Date(time * 1000);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dateString = `${month}, ${day} ${year}`;
    return dateString;
  };

  const formatTime = (time) => {
    const date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const timeString = hours + ":" + minutes;
    return timeString;
  };

  return (
    <div className="HeaderInfo">
      <h1>Weather Forecast</h1>
      <div className="CurrentDate">
        <p>
          {formatDate(time)}
        </p>
        <p>{formatTime(time)}</p>
      </div>
    </div>
  );
}
