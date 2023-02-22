// import React, { useState } from "react";
// import { useId } from "react";
// import axios from "axios";
// import "./Nav.css";

// export default function Nav(props) {
//   let searchForm = useId();
//   let searchInput = useId();

//   const [query, setQuery] = useState("");


//   function handleCity(event) {
//     event.preventDefault();
//     setQuery(event.target.value);
//   }

//   // async function handleSubmit(event) {
//   //   event.preventDefault();
//   //   try {
//   //     const response = await axios.get(
//   //       `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid={YOUR_API_KEY}`
//   //     );
//   //     props.searchCity(response.data);
//   //     setQuery("");
//   //   } catch (error) {
//   //     console.error(error);
//   //     alert("City not found. Please enter a valid city name.");
//   //   }
//   // }

//   function handleSubmit(event) {
//     event.preventDefault();
//     props.searchCity(query);
//     setQuery("")
//   // } catch (error) {
//   //   console.error(error);
//   //   alert("City not found. Please enter a valid city name.");
//   // }
//   }

//   return (
//     <div className="Nav">
//       <form className="SearchForm" id={searchForm} onSubmit={handleSubmit}>
//         <input
//           type="search"
//           placeholder="Search for a city"
//           className="SearchInput"
//           autoFocus="on"
//           autoComplete="off"
//           id={searchInput}
//           value={query}
//           onChange={handleCity}
//         />
//         <button
//           type="submit"
//           title="Search city"
//           className="btn btn-outline-light"
//         >
//           <i className="fa-solid fa-magnifying-glass-location"></i>
//         </button>
//       </form>
//       <button
//         type="submit"
//         title="Search current location"
//         className="btn btn-outline-light CurrentLocationBtn"
//       >
//         <i className="fa-solid fa-location-dot"></i>
//       </button>
//     </div>
//   );
// }
import React, { useState } from "react";
import axios from "axios";
import "./Nav.css";

export default function Nav(props) {
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

  function handleCurrentLocation(event) {
    event.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          axios
            .get(
              `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=9422f0o3bf27abc2b46fcabt0cf2c5f3`
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
          <i className="fa-solid fa-magnifying-glass-location"></i>
        </button>
      </form>
      <button
        type="button"
        title="Search current location"
        className="btn btn-outline-light CurrentLocationBtn"
        onClick={handleCurrentLocation}
      >
        <i className="fa-solid fa-location-dot"></i>
      </button>
    </div>
  );
}
