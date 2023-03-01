import React from "react";
import { Triangle } from "react-loader-spinner";
import "./CurrentCityExtra.css";
import CurrentWeatherConditions from "./CurrentWeatherConditions";
import Blockquote from "./Blockquote";

export default function CurrentCityExtra({weather, units, onUnitsChange}) {
  if (!weather) {
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
    <div className="CurrentCityExtra">
      <CurrentWeatherConditions weather={weather} units={units} onUnitsChange={onUnitsChange}/>
      <Blockquote weather={weather}/>
    </div>
  );
}
