import React, { useState, useEffect } from "react";
import "./CurrentCity.css";

export default function CurrentCity({ weather }) {
  const [temperature, setTemperature] = useState(null);
  const [units, setUnits] = useState("metric");
  const [feelsLikeTemperature, setFeelsLikeTemperature] = useState(null);
  const [feelsLikeUnits, setFeelsLikeUnits] = useState("C");

  useEffect(() => {
    if (weather) {
      setTemperature(weather.temperature);
      setFeelsLikeTemperature(weather.feels_like);
    }
  }, [weather]);

  function celsiusToFahrenheit(e) {
    e.preventDefault();
    if (units !== "imperial") {
      let fahrenheitTemp = Math.round((temperature * 9) / 5 + 32);
      setTemperature(fahrenheitTemp);
      setUnits("imperial");
      let fahrenheitFeelsLikeTemp = Math.round((feelsLikeTemperature * 9) / 5 + 32);
      setFeelsLikeTemperature(fahrenheitFeelsLikeTemp);
      setFeelsLikeUnits("F");
    }
  }

  function fahrenheitToCelsius(e) {
    e.preventDefault();
    if (units !== "metric") {
      setTemperature(weather.temperature);
      setUnits("metric");
      setFeelsLikeTemperature(weather.feels_like);
      setFeelsLikeUnits("C");
    }
  }

  if (!weather || !temperature || !feelsLikeTemperature) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CurrentCity g-col-6">
      <h2 className="City">
        <span id="search-city">{weather.city}</span>
      </h2>
      <p className="CurrentTemp">
        <span className="CurrentTempNow float-left" id="current-temp-now">
          {temperature}{" "}
        </span>
        <span className="Units">
          <a
            href="/"
            id="CelsiusLink"
            className={units === "metric" ? "Active" : ""}
            onClick={fahrenheitToCelsius}
          >
            °C
          </a>{" "}
          |{" "}
          <a
            href="/"
            id="FahrenheitLink"
            className={units === "imperial" ? "Active" : ""}
            onClick={celsiusToFahrenheit}
          >
            °F
          </a>
        </span>
      </p>
      <p id="feels-like">Feels like: {feelsLikeTemperature} {" "} °{feelsLikeUnits}</p>
    </div>
  );
}
