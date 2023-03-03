import React, { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";

import "./CurrentCity.css";

export default function CurrentCity(props) {

  const [temperature, setTemperature] = useState(null);
  const [feelsLikeTemperature, setFeelsLikeTemperature] = useState(null);
  const [feelsLikeUnits, setFeelsLikeUnits] = useState("C");

  // ---------------------------------------------------Update Component State on Weather Props Change
  useEffect(() => {
    if (props.weather) {
      setTemperature(props.weather.temperature);
      setFeelsLikeTemperature(props.weather.feels_like);
    }
  }, [props.weather]);

  // ---------------------------------------------------Toggle Temp Unit between Celsius and Fahrenheit
  function handleUnitsClick(e, isImperial) {
    e.preventDefault();
    if ((isImperial && props.units !== "imperial") || (!isImperial && props.units !== "metric")) {
      const newUnits = isImperial ? "imperial" : "metric";
      const newTemperature = isImperial ? Math.round((temperature * 9) / 5 + 32) : props.weather.temperature;
      const newFeelsLikeTemperature = isImperial ? Math.round((feelsLikeTemperature * 9) / 5 + 32) : props.weather.feels_like;
      const newFeelsLikeUnits = isImperial ? "F" : "C";
      setTemperature(newTemperature);
      setFeelsLikeTemperature(newFeelsLikeTemperature);
      setFeelsLikeUnits(newFeelsLikeUnits);
      props.onUnitsChange(newUnits);
    }
  }

  // ---------------------------------------------------Return Part
  if (temperature === null || feelsLikeTemperature === null || props.weather.city === undefined) {
    return (<Triangle
      height="100"
      width="100"
      color="#26C9FC"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />);
  }
  return (
    <div className="CurrentCity">
      <h2 className="City">
        <span>{props.weather.city}</span>
      </h2>
      <p className="CurrentTemp">
         <span className="CurrentTempNow float-left">
          {temperature}{" "}
        </span>
        <span className="Units">
          <a
            href="/"
            className={props.units === "metric" ? "Active" : ""}
            onClick={(e) => handleUnitsClick(e, false)}
          >
            °C
          </a>{" "}
          |{" "}
          <a
            href="/"
            className={props.units === "imperial" ? "Active" : ""}
            onClick={(e) => handleUnitsClick(e, true)}
          >
            °F
          </a>
        </span>
      </p>
      <p>Feels like: {feelsLikeTemperature} {" "} °{feelsLikeUnits}</p>
    </div>
  );
}
