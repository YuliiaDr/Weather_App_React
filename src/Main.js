import React from "react";
import CurrentCity from "./CurrentCity";
import CurrentImage from "./CurrentImage";
import CurrentCityExtra from "./CurrentCityExtra";
import WeatherForecast from "./WeatherForecast";

import "./Main.css";

export default function Main({weather}) {
  return (
    <main>
      <section className="CurrentForecast">
        <div className="Current grid">
          <CurrentCity />
          <CurrentImage />
          <CurrentCityExtra />
        </div>
      </section>
      <WeatherForecast />
    </main>
  );
}
