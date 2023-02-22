import React from "react";
import "./CurrentWeatherConditions.css";
// import { useId } from "react";

export default function CurrentWeatherConditions({weather}) {
  // let description = useId();
  // let humidity = useId();
  // let wind = useId();
  // console.log(props);
  if (!weather) {
    return (<div>Loading...</div>);
  }
  return (
    <ul className="CurrentConditions">
      <li> {weather.description}</li>
      <li>Humidity: {weather.humidity}% 💧</li>
      <li>Wind: {weather.wind}km/h 💨</li>
    </ul>
  );
}
