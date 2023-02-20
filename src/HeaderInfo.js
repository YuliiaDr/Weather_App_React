import React from "react";
import "./HeaderInfo.css";
import { useId } from "react";

export default function HeaderInfo() {
  let currentCity = useId();
  let dayMonthYear = useId();
  let hoursMinutes = useId();
  return (
    <div className="HeaderInfo">
      <h1 id={currentCity}>Weather Forecast</h1>
      <div className="CurrentDate">
        <p id={dayMonthYear}>Tuesday February 7, 2023</p>
        <p id={hoursMinutes}>20:34</p>
      </div>
    </div>
  );
}
