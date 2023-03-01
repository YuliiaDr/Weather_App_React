import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "./index.css"

export default function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [units, setUnits] = useState("metric");
  const [timestamp, setTimestamp] = useState(null);
  const [isDaytime, setIsDaytime] = useState(true);
  
  let apiKey = "9422f0o3bf27abc2b46fcabt0cf2c5f3";

  function handleUnitsChange(newUnits) {
    setUnits(newUnits);
    if (weather) {
      setWeather({
        ...weather,
        temperature: convertTemperature(weather.temperature, units, newUnits),
        feels_like: convertTemperature(weather.feels_like, units, newUnits)
      });
    }
  }
  function convertTemperature(temperature, oldUnits, newUnits) {
    if (oldUnits === "metric" && newUnits === "imperial") {
      return Math.round((temperature * 9) / 5 + 32);
    } else if (oldUnits === "imperial" && newUnits === "metric") {
      return Math.round(((temperature - 32) * 5) / 9);
    } else {
      return temperature;
    }
  }

  function setBackgroundColor(response) {
    const iconCondition = response.data.condition.icon;
    if (iconCondition.includes("day")) {
      setIsDaytime(true);
    } else {
      setIsDaytime(false);
    }
  }

  useEffect(() => {
    document.body.className = isDaytime ? "day" : "night";
  }, [isDaytime]);

  function updateWeather(response) {
    if (!timestamp) {
      setTimestamp(response.data.time);
    }
    setWeather({
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon_url,
      icon_descr: response.data.condition.icon,
      feels_like: Math.round(response.data.temperature.feels_like),
      time: response.data.time
  
    });
    setBackgroundColor(response);
  }

  function searchCity(query) {
    let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=${units}&t=${new Date().getTime()}`;
    axios.get(url).then((response) => {
      updateWeather(response);
    });
  }

  // function getCurrentLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         let url = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}&t=${new Date().getTime()}`;
  //         axios.get(url).then((response) => {
  //           setLocation({
  //             city: response.data.city,
  //             country: response.data.country,
  //             time: response.data.time,
  //             coordinates: {
  //               latitude: response.data.location?.latitude,
  //               longitude: response.data.location?.longitude,
  //             },
  //           });
  //           updateWeather(response);
  //         });
  //       },
  //       () => {
  //         console.error("Geolocation is not supported by this browser.");
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // }
  
  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          let url = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}&t=${new Date().getTime()}`;
          axios.get(url).then((response) => {
            const location = response.data.location;
            setLocation({
              city: response.data.city,
              country: response.data.country,
              time: response.data.time,
              coordinates: {
                latitude: location ? location.latitude : null,
                longitude: location ? location.longitude : null,
              },
            });
            updateWeather(response);
          });
        },
        () => {
          alert("Geolocation is not supported by this browser. Please, allow this function.");
          searchCity("Kyiv") ;
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <Header
        time={timestamp ? timestamp : (weather && weather.time)} // use timestamp if available
        searchCity={searchCity}
        updateWeather={updateWeather}
        getCurrentLocation={getCurrentLocation}
      />
      <Main
        weather={weather}
        units={units}
        onUnitsChange={handleUnitsChange} 
        location={location} 
      />
      <Footer />
    </div>
  );
}
