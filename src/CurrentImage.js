import React from "react";
// import { useId } from "react";
import "./CurrentImage.css";

export default function CurrentImage({weather}) {
  if (!weather) {
    return (<div>Loading...</div>);
  }
  return (
    <div className="CurrentImage g-col-2">
      <img
        style={{
          width: 200
        }}
        src={weather.icon}
        alt="Weather conditions"
      />
    </div>
  );
}
