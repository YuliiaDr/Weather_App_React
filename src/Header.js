import React from "react";
import HeaderInfo from "./HeaderInfo";
import Nav from "./Nav";

import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <div className="Header">
        <HeaderInfo/>
        <Nav searchCity={props.searchCity}/>  
      </div>
    </header>
  );
}
