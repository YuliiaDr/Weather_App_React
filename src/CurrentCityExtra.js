import React from "react";
import { Triangle } from "react-loader-spinner";
import CurrentWeatherConditions from "./CurrentWeatherConditions";
import Blockquote from "./Blockquote";

import "./CurrentCityExtra.css";

export default function CurrentCityExtra(props) {
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
  return (
    <div className="CurrentCityExtra">
      <CurrentWeatherConditions weather={props.weather} units={props.units} onUnitsChange={props.onUnitsChange}/>
      <Blockquote weather={props.weather}/>
    </div>
  );
}
