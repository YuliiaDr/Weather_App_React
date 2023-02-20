import React from "react";
import HeaderInfo from "./HeaderInfo";
import Nav from "./Nav";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="Header">
        <HeaderInfo />
        <Nav />
      </div>
    </header>
  );
}
