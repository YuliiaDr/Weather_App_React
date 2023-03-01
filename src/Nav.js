import React, { useState } from "react";
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
    props.getCurrentLocation();
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
