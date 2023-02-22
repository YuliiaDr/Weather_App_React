import React from "react";
import "./CurrentWeatherConditions.css";
// import { useId } from "react";

export default function CurrentWeatherConditions(props) {
  // let description = useId();
  // let humidity = useId();
  // let wind = useId();
  return (
    <ul className="CurrentConditions">
      <li> {props.description}</li>
      <li>Humidity: {props.humidity}% 💧</li>
      <li>Wind: {props.wind}km/h 💨</li>
    </ul>
  );
}
