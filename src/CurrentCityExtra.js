import React from "react";
import { Triangle } from "react-loader-spinner";
import "./CurrentCityExtra.css";
import CurrentWeatherConditions from "./CurrentWeatherConditions";
import Blockquote from "./Blockquote";

export default function CurrentCityExtra({weather, units, onUnitsChange}) {
  if (!weather) {
    return (<Triangle
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />);
  }
  return (
    <div className="CurrentCityExtra g-col-4">
      <CurrentWeatherConditions weather={weather} units={units} onUnitsChange={onUnitsChange}/>
      <Blockquote weather={weather}/>
    </div>
  );
}
