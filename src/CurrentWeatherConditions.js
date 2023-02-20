import React from "react";
import "./CurrentWeatherConditions.css";
import { useId } from "react";

export default function CurrentWeatherConditions() {
  let description = useId();
  let humidity = useId();
  let wind = useId();
  return (
    <ul className="CurrentConditions">
      <li id={description}>Broken clouds</li>
      <li id={humidity}>Humidity: 83% 💧</li>
      <li id={wind}>Wind: 2km/h 💨</li>
    </ul>
  );
}
