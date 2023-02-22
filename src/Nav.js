import React, { useState } from "react";
import { useId } from "react";
import axios from "axios";
import "./Nav.css";

export default function Nav(props) {
  let searchForm = useId();
  let searchInput = useId();

  const [query, setQuery] = useState("");


  function handleCity(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.searchCity(query);
    setQuery("");
  }

  return (
    <div className="Nav">
      <form className="SearchForm" id={searchForm} onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city"
          className="SearchInput"
          autoFocus="on"
          autoComplete="off"
          id={searchInput}
          value={query}
          onChange={handleCity}
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
      >
        <i className="fa-solid fa-location-dot"></i>
      </button>
    </div>
  );
}
