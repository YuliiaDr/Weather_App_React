import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  console.log(props.units);
  if (!props.forecast) {
    return null;
  }
  let currentDate = new Date();

  // ------------------------------Forecast Temperature Conversion
  function convertTemperature(temperature, oldUnits, newUnits) {
    if (oldUnits === "metric" && newUnits === "imperial") {
      return Math.round((temperature * 9) / 5 + 32);
    } else if (oldUnits === "imperial" && newUnits === "metric") {
      return Math.round(((temperature - 32) * 5) / 9);
    } else {
      return temperature;
    }
  }

  // ------------------------------Forecast Timestamp
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
  }
  
  function showMonthDate(timestamp){
    currentDate = new Date(timestamp * 1000);
    let month = Number(currentDate.getMonth())+1;
    let date = currentDate.getDate();
    if (date < 10) date= "0"+ date;
    if (month < 10) month= "0"+ month;
    let monthDate = `${date} / ${month}`;
    return (monthDate);
  }

// ------------------------------------Return
  return (
    <div className="WeatherForecast">
      <div className="row row-cols-1 row-cols-sm-5 g-5">
        {props.forecast.map((forecastDay, index) => (
          <div key={index} className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{formatDay(forecastDay.time)}</h3>
                <p className="card-text card-text-date">{showMonthDate(forecastDay.time)}</p>
                <img
                  src={forecastDay.condition.icon_url}
                  alt={forecastDay.condition.description}
                  className="card-img-top"
                />
                <p className="card-text card-text-temp">
                  <span className="card-temp-max">{Math.round(convertTemperature(forecastDay.temperature.maximum, "metric", props.units))}°</span>
                  {" "}
                  <span className="card-temp-min">{Math.round(convertTemperature(forecastDay.temperature.minimum, "metric", props.units))}°</span>
                </p>
              </div>
            </div>
          </div>
          )
        )}
      </div>
    </div>
  )
}
