import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

// export default function App() {
//   const [weather, setWeather] = useState(null);
//   const [location, setLocation] = useState(null);
//   const [units, setUnits] = useState("metric");

//   let apiKey = `9422f0o3bf27abc2b46fcabt0cf2c5f3`;

//   useEffect(() => {
//     // searchCity("Kyiv"); // make an API call for the default city when the component mounts
//     getCurrentLocation(); // get the user's current location when the component mounts
//   }, []);

//   function setBackgroundColor(response) {
//     const iconCondition = response.data.condition.icon;
//     const background = document.querySelector("#background");

//     if (iconCondition.includes("day")) {
//       background.classList.add("day");
//       background.classList.remove("night");
//     } else {
//       background.classList.add("night");
//       background.classList.remove("day");
//     }
//   }

//   function updateWeather(response) {
//     setWeather({
//       city: response.data.city,
//       temperature: Math.round(response.data.temperature.current),
//       description: response.data.condition.description,
//       humidity: response.data.temperature.humidity,
//       wind: Math.round(response.data.wind.speed),
//       icon: response.data.condition.icon_url,
//       icon_descr: response.data.condition.icon,
//       feels_like: Math.round(response.data.temperature.feels_like),
//     });
//     setBackgroundColor(response);
//   }

//   function searchCity(query) {
//     let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=${units}`;
//     axios
//       .get(url)
//       .then((response) => {
//         updateWeather(response);
//       })
//       .catch((error) => {
//         console.error(error);
//         // handle the error
//       });
//   }

//   function setCurrentWeather(response) {
//     updateWeather(response);
//   }

//   function getCurrentLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;

//           let apiKey = `9422f0o3bf27abc2b46fcabt0cf2c5f3`;
//           let url = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;

//           axios
//             .get(url)
//             .then((response) => {
//               setLocation({
//                 city: response.data.city,
//                 country: response.data.country,
//                 timezone: response.data.timezone,
//                 coordinates: {
//                   latitude: response.data.location?.latitude,
//                   longitude: response.data.location?.longitude,
//                 },
//               });
//               updateWeather(response);
//             })
//             .catch((error) => {
//               console.error(error);
//               // handle the error
//             });
//         },
//         (error) => {
//           console.error(error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   }

//   function celsius() {
//     setUnits("metric");
//     if (weather) {
//       let url = `https://api.shecodes.io/weather/v1/current?query=${weather.city}&key=${apiKey}&units=${units}`;
//       axios
//         .get(url)
//         .then((response) => {
//           updateWeather(response);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }

//   function fahrenheit() {
//     setUnits("imperial");
//     if (weather) {
//       let url = `https://api.shecodes.io/weather/v1/current?query=${weather.city}&key=${apiKey}&units=${units}`;
//       axios
//         .get(url)
//         .then((response) => {
//           updateWeather(response);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }

//   // function toCelsius(fahrenheit) {
//   //   return Math.round((fahrenheit - 32) / 1.8);
//   // }
//   // function toFahrenheit(celsius) {
//   //   return Math.round(celsius * 1.8 + 32);
//   // }
//   return (
//     <div
//       className={`background ${
//         weather && weather.icon.includes("day") ? "day" : "night"
//       }`}
//     >
//       <Header updateWeather={updateWeather} searchCity={searchCity} setCurrentWeather={setCurrentWeather} getCurrentLocation={getCurrentLocation}/>
//       <Main weather={weather} location={location} />
//       <Footer />
//     </div>
//   );
// }

export default function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [units, setUnits] = useState("metric");

  let apiKey = "9422f0o3bf27abc2b46fcabt0cf2c5f3";

  useEffect(() => {
    getCurrentLocation();
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
      feels_like: Math.round(response.data.temperature.feels_like)
    });
    setBackgroundColor(response);
  }

  function searchCity(query) {
    let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=${units}`;
    axios.get(url).then((response) => {
      updateWeather(response);
    });
  }

  function setCurrentWeather(response) {
    updateWeather(response);
  }

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          let url = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;
          axios.get(url).then((response) => {
            setLocation({
              city: response.data.city,
              country: response.data.country,
              timezone: response.data.timezone,
              coordinates: {
                latitude: response.data.location?.latitude,
                longitude: response.data.location?.longitude,
              },
            });
            updateWeather(response);
          });
        },
        () => {
          console.error("Geolocation is not supported by this browser.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  // function celsiusToFahrenheit(temp) {
  //   return (temp * 9) / 5 + 32;
  // }

  // function fahrenheitToCelsius(temp) {
  //   return ((temp - 32) * 5) / 9;
  // }

  // function toggleUnit() {
  //   const newUnit = units === "metric" ? "imperial" : "metric";
  //   setUnits(newUnit);
  //   const newTemp =
  //     newUnit === "metric"
  //       ? Math.round(fahrenheitToCelsius(weather.temperature))
  //       : Math.round(celsiusToFahrenheit(weather.temperature));
  //   setWeather((prevState) => ({ ...prevState, temperature: newTemp, unit: newUnit }));
  // }

  return (
    <div className={`background ${weather && weather.icon && weather.icon.includes("day") ? "day" : "night"}`} id="background">
      <Header
        updateWeather={updateWeather}
        searchCity={searchCity}
        setCurrentWeather={setCurrentWeather}
        getCurrentLocation={getCurrentLocation}
        // toggleUnit={toggleUnit}
        // fahrenheitToCelsius= {weather.temperature}
        // celsiusToFahrenheit = {weather.temperature}
        unit={units}
      />
      <Main weather={weather} location={location} />
      {/* <Main weather={weather} location={location} toggleUnit={toggleUnit} /> */}
      <Footer />
    </div>
  );
}
