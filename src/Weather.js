import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  let form = (
    <form id="search-form" className="mt-5 mb-3">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city.."
            className="form-control"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-dark w-100" />
        </div>
      </div>
    </form>
  );
  if (weatherData.ready) {
    return (
      <div className="container">
        {form}
        <div className="overview">
          <div className="box location">
            <h1>{weatherData.city}</h1>
            <FormattedDate date={weatherData.date} />
          </div>
          <div className="box weather-icon">
            <div className="icon-png">
              <img
                className="main-weather-icon"
                id="main-icon"
                src={weatherData.icon}
                alt="sunny"
              />
            </div>
            <div className="icon-description">
              <h5 id="description" className="description">
                {weatherData.description}
              </h5>
            </div>
          </div>
          <div className="box humidity">
            <span>
              <h3 className="humidity-percentage" id="humidity-percentage">
                {weatherData.humidity}
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
                {Math.round(weatherData.wind)}
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
              {Math.round(weatherData.temperature)}
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
      </div>
    );
  } else {
    let apiKey = `b17d53a040db418cb82668d499282cb4`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
}
