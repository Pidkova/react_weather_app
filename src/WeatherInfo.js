import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="overview">
      <div className="box location">
        <h1>{props.data.city}</h1>
        <FormattedDate date={props.data.date} />
      </div>
      <div className="box weather-icon">
        <div className="icon-png">
          <img
            className="main-weather-icon"
            id="main-icon"
            src={props.data.icon}
            alt="sunny"
          />
        </div>
        <div className="icon-description">
          <h5 id="description" className="description">
            {props.data.description}
          </h5>
        </div>
      </div>
      <div className="box humidity">
        <span>
          <h3 className="humidity-percentage" id="humidity-percentage">
            {props.data.humidity}
          </h3>
          <span className="humidity-units">%</span>
        </span>
        <div className="humidity-discription">
          <span className="drop">
            <i className="fa-solid fa-droplet"></i>
          </span>
          <span>
            <h5>humidity</h5>
          </span>
        </div>
      </div>
      <div className="box wind">
        <span>
          <strong className="wind-speed" id="wind-speed">
            {Math.round(props.data.wind)}
          </strong>
          <span className="wind-speed-units">km/h</span>
        </span>
        <div>
          <span className="blowing-wind">
            <i className="fa-solid fa-wind"></i>
          </span>
          <span className="wind-speed-name">
            <div>wind</div>
            <div>speed</div>
          </span>
        </div>
      </div>
      <div className="box current temperature">
        <strong className="current-temperature" id="current-temperature">
          {Math.round(props.data.temperature)}
        </strong>
        <span className="units celsius">
          <a href="./" className="units celsius active" id="celsius-link">
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
    </div>
  );
}
