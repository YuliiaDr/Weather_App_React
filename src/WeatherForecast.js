import React , {useState, useEffect} from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {

  let currentDate = new Date();
  const [forecast, setForecast] = useState(null);

// ---------------------------------------------------Getting Weather Forecast
  useEffect(() => {
    if (props.weather) {
      let apiKey = "9422f0o3bf27abc2b46fcabt0cf2c5f3";
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.weather.city}&key=${apiKey}&units=${props.units}`;
      axios.get(apiUrl).then((response) => {
        setForecast(response.data.daily.slice(1, 6));
      });
    }
  }, [props.weather, props.units]);

  if (!props.weather || !forecast) {
    return null;
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
        {forecast.map((forecastDay, index) => (
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
                  <span className="card-temp-max">{Math.round(forecastDay.temperature.maximum, "metric", props.units)}°</span>
                  {" "}
                  <span className="card-temp-min">{Math.round(forecastDay.temperature.minimum, "metric", props.units)}°</span>
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
