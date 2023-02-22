import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    searchCity("Kyiv"); // make an API call for the default city when the component mounts
  }, []);

  function setBackgroundColor(response) {
    const iconCondition = response.data.condition.icon;
    const background = document.querySelector("#background");
   
    if (iconCondition.includes("day")) {
      background.classList.add("day");
      background.classList.remove("night");
    } else {
      background.classList.add("night");
      background.classList.remove("day");
    }
  }

  function updateWeather(response) {
    setWeather({
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon_url,
      icon_descr: response.data.condition.icon,
      feels_like: Math.round(response.data.temperature.feels_like),
    });
    setBackgroundColor(response);
  }

  function searchCity(query) {
    let apiKey = `9422f0o3bf27abc2b46fcabt0cf2c5f3`;
    let units = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=${units}`;
    axios.get(url).then((response) => {
      updateWeather(response);
    }).catch((error) => {
      console.error(error);
      // handle the error
    });
  }

  return (
    <div className = {`background ${weather && weather.icon.includes("day") ? "day" : "night"}`}>
      <Header updateWeather={updateWeather} searchCity={searchCity} />
      <Main weather={weather} />
      <Footer />
    </div>
  );
}
