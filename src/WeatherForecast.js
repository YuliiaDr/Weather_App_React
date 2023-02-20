import React from "react";
import { useId } from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  let forecast = useId();
  return <div className="WeatherForecast" id={forecast}></div>;
}
