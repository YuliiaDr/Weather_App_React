import React, { useState } from "react";
import axios from "axios";
import "./Nav.css";

export default function Nav(props) {
  const [query, setQuery] = useState("");

  function handleCity(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.searchCity(query);
    setQuery("");
  }

  function handleCurrentLocation(event) {
    event.preventDefault();
    let apiKey = `9422f0o3bf27abc2b46fcabt0cf2c5f3`;
    let units = "metric";

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          axios
            .get(
              `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`
            )
            .then((response) => {
              props.setCurrentWeather(response);
            })
            .catch((error) => {
              console.error(error);
            });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div className="Nav">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city"
          className="SearchInput"
          autoFocus="on"
          autoComplete="off"
          value={query}
          onChange={handleCity}
        />
        <button
          type="submit"
          title="Search city"
          className="btn btn-outline-light"
        >
          <i className="fa-solid fa-search"></i>
        </button>
      </form>
      <button
        className="btn btn-outline-light CurrentLocationBtn"
        onClick={handleCurrentLocation}
      >
        <i className="fa-solid fa-map-marker"></i>
      </button>
    </div>
  );
}
