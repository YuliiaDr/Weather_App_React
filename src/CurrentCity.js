import React, {useState} from "react";
import "./CurrentCity.css";

export default function CurrentCity({weather}) {
  return (
    <div className="CurrentCity g-col-6">
      <h2 className="City">
        <span id="search-city">Kyiv</span>
      </h2>
      <p className="CurrentTemp">
        <span className="CurrentTempNow float-left" id="current-temp-now">
          {weather.temperature}{" "}
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
      <p id="feels-like">Feels like: -5</p>
    </div>
  );
}
