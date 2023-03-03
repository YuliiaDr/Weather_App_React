import React from "react";
import CurrentCity from "./CurrentCity";
import CurrentImage from "./CurrentImage";
import CurrentCityExtra from "./CurrentCityExtra";
import WeatherForecast from "./WeatherForecast";

import "./Main.css";

export default function Main(props) {
  
  // ---------------------------------------------------Return Part
  if (!props.weather) {
    return (<main>
    <section className="CurrentForecast">
      <CurrentCity 
        weather={props.weather}
        units={props.units}
        onUnitsChange={props.onUnitsChange}
      />
      <CurrentImage weather={props.weather}/>
      <CurrentCityExtra
        weather={props.weather}
        units={props.units}
        onUnitsChange={props.onUnitsChange}
      />
    </section>
    <WeatherForecast />
  </main>);
  }
  return (
    <main>
      <section className="CurrentForecast">
        <CurrentCity 
          weather={props.weather}
          units={props.units}
          onUnitsChange={props.onUnitsChange}
        />
        <CurrentImage weather={props.weather}/>
        <CurrentCityExtra
          weather={props.weather}
          units={props.units}
          onUnitsChange={props.onUnitsChange}
        />
      </section>
      <WeatherForecast />
    </main>
  );
}
