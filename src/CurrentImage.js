import React from "react";
import { Triangle } from "react-loader-spinner";

import "./CurrentImage.css";

export default function CurrentImage(props) {
  if (!props.weather) {
    return ((<Triangle
      height="100"
      width="100"
      color="#26C9FC"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
    ))
  }
  return (
    <div className="CurrentImage">
      <img
        style={{
          width: 200
        }}
        src={props.weather.icon}
        alt="Weather conditions"
      />
    </div>
  );
}
