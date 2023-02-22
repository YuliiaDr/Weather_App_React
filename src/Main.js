import React from "react";
import CurrentCity from "./CurrentCity";
import CurrentImage from "./CurrentImage";
import CurrentCityExtra from "./CurrentCityExtra";
import WeatherForecast from "./WeatherForecast";

import "./Main.css";

export default function Main({weather}) {
  // console.log(weather);
  if (!weather) {
    return (<main>
    <section className="CurrentForecast">
      <div className="Current grid">
        <CurrentCity weather={weather}/>
        <CurrentImage weather={weather}/>
        <CurrentCityExtra weather={weather}/>
      </div>
    </section>
    <WeatherForecast />
  </main>);
  }

  return (
    <main>
      <section className="CurrentForecast">
        <div className="Current grid">
          <CurrentCity weather={weather}/>
          <CurrentImage weather={weather}/>
          <CurrentCityExtra weather={weather}/>
        </div>
      </section>
      <WeatherForecast />
    </main>
  );
}
