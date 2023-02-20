import React, {useState} from "react";
import { useId } from "react";
import axios from "axios";
import "./Nav.css";
// import CurrentCity from "./CurrentCity";
import Main from "./Main";

export default function Nav() {
  let searchForm = useId();
  let searchInput = useId();
  let currentLocationBtn = useId();

  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState();

  function showCityInfo(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon_url
    });
  }

  function handleCity(e) {
    setQuery(e.target.value);
  }

  function searchCity(e) {
    e.preventDefault();
    let apiKey = `9422f0o3bf27abc2b46fcabt0cf2c5f3`;
    let units = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=${units}`;
    axios.get(url).then(showCityInfo);
  }

  return (
    <div className="Nav">
      <form className="SearchForm" id={searchForm} onSubmit={searchCity}>
        <input
          type="search"
          placeholder="Search for a city"
          className="SearchInput"
          autoFocus="on"
          autoComplete="off"
          id={searchInput}
          onChange = {handleCity}
        />
        <button
          type="submit"
          title="Search city"
          className="btn btn-outline-light"
        >
          <i className="fa-solid fa-magnifying-glass-location"></i>
        </button>
      </form>
      <button
        type="submit"
        title="Search current location"
        className="btn btn-outline-light CurrentLocationBtn"
        id={currentLocationBtn}
      >
        <i className="fa-solid fa-location-dot"></i>
      </button>
      {loaded && <Main {...weather} />}
    </div>
  );
}