import React, { useState, useEffect } from "react";
import "./CurrentCity.css";

export default function CurrentCity({ weather, units, onUnitsChange }) {
  console.log(weather, units);
  const [temperature, setTemperature] = useState(null);
  const [feelsLikeTemperature, setFeelsLikeTemperature] = useState(null);
  const [feelsLikeUnits, setFeelsLikeUnits] = useState("C");

  useEffect(() => {
    if (weather) {
      setTemperature(weather.temperature);
      setFeelsLikeTemperature(weather.feels_like);
    }
  }, [weather]);

  function handleUnitsClick(e, isImperial) {
    e.preventDefault();
    if ((isImperial && units !== "imperial") || (!isImperial && units !== "metric")) {
      const newUnits = isImperial ? "imperial" : "metric";
      const newTemperature = isImperial ? Math.round((temperature * 9) / 5 + 32) : weather.temperature;
      const newFeelsLikeTemperature = isImperial ? Math.round((feelsLikeTemperature * 9) / 5 + 32) : weather.feels_like;
      const newFeelsLikeUnits = isImperial ? "F" : "C";
      setTemperature(newTemperature);
      setFeelsLikeTemperature(newFeelsLikeTemperature);
      setFeelsLikeUnits(newFeelsLikeUnits);
      onUnitsChange(newUnits);
    }
  }

  if (temperature === null || feelsLikeTemperature === null) {
    return <div>Loading...</div>;
  }

  const unitsSymbol = units === "imperial" ? "F" : "C";

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
            onClick={(e) => handleUnitsClick(e, false)}
          >
            °C
          </a>{" "}
          |{" "}
          <a
            href="/"
            id="FahrenheitLink"
            className={units === "imperial" ? "Active" : ""}
            onClick={(e) => handleUnitsClick(e, true)}
          >
            °F
          </a>
        </span>
      </p>
      <p id="feels-like">Feels like: {feelsLikeTemperature} {" "} °{feelsLikeUnits}</p>
    </div>
  );
}
