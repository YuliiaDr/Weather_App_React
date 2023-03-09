import React from "react";
import HeaderInfo from "./HeaderInfo";
import Nav from "./Nav";

import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <div className="Header">
        <HeaderInfo/>
        <Nav updateWeather={props.updateWeather} searchCity={props.searchCity} setCurrentWeather={props.setCurrentWeather} getCurrentLocation={props.getCurrentLocation} getForecast={props.getForecast}/>  
      </div>
    </header>
  );
}
