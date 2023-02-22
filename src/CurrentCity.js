import React, {useState} from "react";
import "./CurrentCity.css";

export default function CurrentCity({weather}) {
  console.log({weather});
  if (!weather) {
    return (<div>Loading...</div>);
  }

  return (
    <div className="CurrentCity g-col-6">
      <h2 className="City">
        <span id="search-city">{weather.city}</span>
      </h2>
      <p className="CurrentTemp">
        <span className="CurrentTempNow float-left" id="current-temp-now">
          {weather.temperature} {" "}
        </span>
        <span className="Units">
          <a href="/" id="celsius-link-current" className="Active">
           °C
          </a>{" "}
          |{" "}
          <a href="/" id="fahrenheit-link-current">
            °F
          </a>
        </span>
      </p>
      <p id="feels-like">Feels like: {weather.feels_like}°</p>
    </div>
  );
}
