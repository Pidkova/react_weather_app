import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheits() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="box current temperature">
        <strong className="current-temperature" id="current-temperature">
          {Math.round(props.celsius)}
        </strong>
        <span className="units celsius">
          <a href="./" className="units celsius active" id="celsius-link">
            °C |
          </a>
        </span>
        <span className="units fahrenheit">
          <a
            href="./"
            className="units fahrenheit"
            id="fahrenheit-link"
            onClick={displayFahrenheit}
          >
            °F
          </a>
        </span>
        <div>
          <span className="temperature-icon">
            <i className="fa-solid fa-temperature-low"></i>
          </span>
          <span className="temperature-name">
            <div>current</div>
            <div>temperature</div>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="box current temperature">
        <strong className="current-temperature" id="current-temperature">
          {Math.round(convertToFahrenheits())}
        </strong>
        <span className="units celsius">
          <a
            href="./"
            className="units celsius active"
            id="celsius-link"
            onClick={displayCelsius}
          >
            °C |
          </a>
        </span>
        <span className="units fahrenheit">
          <a href="./" className="units fahrenheit" id="fahrenheit-link">
            °F
          </a>
        </span>
        <div>
          <span className="temperature-icon">
            <i className="fa-solid fa-temperature-low"></i>
          </span>
          <span className="temperature-name">
            <div>current</div>
            <div>temperature</div>
          </span>
        </div>
      </div>
    );
  }
}
