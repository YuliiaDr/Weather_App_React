import React from "react";
import HeaderInfo from "./HeaderInfo";
import Nav from "./Nav";
import "./Header.css";

export default function Header(props) {
  console.log(props)
  return (
    <header>
      <div className="Header">
        <HeaderInfo time={props.time}/>
        <Nav updateWeather={props.updateWeather} searchCity={props.searchCity} setCurrentWeather={props.setCurrentWeather} getCurrentLocation={props.getCurrentLocation}/>  
      </div>
    </header>
  );
}
