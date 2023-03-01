import React from "react";
import { Triangle } from "react-loader-spinner";
import "./CurrentImage.css";

export default function CurrentImage({weather}) {
  if (!weather) {
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
        src={weather.icon}
        alt="Weather conditions"
      />
    </div>
  );
}
