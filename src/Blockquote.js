import React, { useState, useEffect } from "react";
import "./Blockquote.css";
import { useId } from "react";

export default function Blockquote({ weather }) {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    function setQuoteByWeather(response) {
      switch (response) {
        case "clear-sky-day":
          setQuote(`“Keep your face to the sun and you will never see the shadows.”`);
          break;

        case "clear-sky-night":
          setQuote(`“Look at the stars. See their beauty. And in that beauty, see yourself.”`);
          break;

        case "few-clouds-day":
          setQuote(`“A cloudless plain blue sky is like a flowerless garden.”`);
          break;

        case "few-clouds-night":
          setQuote(`“The night sky is a miracle of infinitude.”`);
          break;

        case "scattered-clouds-day":
          setQuote(`“Even when clouds grow thick, the sun still pours its light earthward.”`);
          break;

        case "scattered-clouds-night":
          setQuote(`“When the sky is totally covered by the dark clouds, be strong enough to see the bright stars beyond them.”`);
          break;

        case "broken-clouds-day":
          setQuote(`“Clouds can never hide the sun forever, so don't complain about clouds but never forget to welcome the sun.”`);
          break;

        case "broken-clouds-night":
          setQuote(`“Above the cloud with its shadow is the star with its light.”`);
          break;

        case "shower-rain-day":
          setQuote(`“The nicest thing about the rain is that it always stops. Eventually.”`);
          break;

        case "shower-rain-night":
          setQuote(`“The rain will stop, the night will end, the hurt will fade. Hope is never so lost that it can’t be found.”`);
          break;

        case "rain-day":
          setQuote(`“Rain is grace; rain is the sky descending to the earth; without rain, there would be no life.”`);
          break;

        case "rain-night":
          setQuote(`“Let the rain beat upon your head with silver liquid drops. It plays a little sleep song on our roof at night...”`);
          break;

        case "thunderstorm-day":
          setQuote(`“Don’t wait for the storms of your life to pass. Learn to dance in the rain.”`);
          break;

        case "thunderstorm-night":
          setQuote(`“The more violent the storm, the quicker it passes.”`);
          break;

        case "snow-day":
          setQuote(`“When it snows, you have two choices: shovel or make snow angels.”`);
          break;

        case "snow-night":
          setQuote(`“When snow falls, nature listens...”`);
          break;

        case "mist-day":
          setQuote(`“Don't be afraid to go into the fog. Be excited because you don't know where you will end up.”`);
          break;

        case "mist-night":
          setQuote(`“Beyond the fog lies clarity.”`);
          break;
        default:
          setQuote(`“Above the cloud with its shadow is the star with its light.”`);
      }
    }

    setQuoteByWeather(weather.icon_descr);
  }, [weather]);
  return (
    <blockquote>
      <p className="Blockquote">
        {quote}
      </p>
    </blockquote>
  );
}
