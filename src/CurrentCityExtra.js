import React from "react";
import "./CurrentCityExtra.css";
import CurrentWeatherConditions from "./CurrentWeatherConditions";
import Blockquote from "./Blockquote";

export default function CurrentCityExtra(weather) {
  return (
    <div className="CurrentCityExtra g-col-4">
      <CurrentWeatherConditions />
      <Blockquote />
    </div>
  );
}
