import React from "react";
import "./CurrentCityExtra.css";
import CurrentWeatherConditions from "./CurrentWeatherConditions";
import Blockquote from "./Blockquote";

export default function CurrentCityExtra({weather}) {
  if (!weather) {
    return (<div>Loading...</div>);
  }
  return (
    <div className="CurrentCityExtra g-col-4">
      <CurrentWeatherConditions weather={weather}/>
      <Blockquote weather={weather}/>
    </div>
  );
}
