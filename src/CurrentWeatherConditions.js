import React from "react";
import "./CurrentWeatherConditions.css";

export default function CurrentWeatherConditions({ weather, units}) {
  console.log(weather, units);
  console.log(weather.wind);
  if (!weather) {
    return <div>Loading...</div>;
  }

  const windSpeed = units === "imperial" ? Math.round(weather.wind * 2.23694) : weather.wind;

  return (
    <ul className="CurrentConditions">
      <li>{weather.description}</li>
      <li>Humidity: {weather.humidity}% 💧</li>
      <li>Wind: {windSpeed} {units === "imperial" ? "mph" : "m/s"} 💨</li>
    </ul>
  );
}