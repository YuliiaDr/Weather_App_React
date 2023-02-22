import React, {useState} from "react";
import { useId } from "react";
import "./CurrentImage.css";

export default function CurrentImage(weather) {
  let icon = useId();
  return (
    <div className="CurrentImage g-col-2">
      <img
        style={{
          width: 200
        }}
        src={weather.icon}
        // src={require("./images/sun.png")}
        alt="Weather conditions"
        id={icon}
      />
    </div>
  );
}
