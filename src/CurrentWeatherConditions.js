import React from "react";
import { Triangle } from "react-loader-spinner";

import "./CurrentWeatherConditions.css";

export default function CurrentWeatherConditions(props) {
  if (!props.weather) {
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

  const windSpeed = props.units === "imperial" ? Math.round(props.weather.wind * 2.23694) : props.weather.wind;

  return (
    <ul className="CurrentConditions">
      <li>{props.weather.description}</li>
      <li>Humidity: {props.weather.humidity}% 💧</li>
      <li>Wind: {windSpeed} {props.units === "imperial" ? "mph" : "m/s"} 💨</li>
    </ul>
  );
}