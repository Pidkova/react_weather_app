import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Zurich" />
      <br />
      <div className="author">
        <span className="me-2">
          <a
            className="code-link"
            href="https://github.com/Pidkova/react_weather_app"
          >
            Coded with ♥
          </a>
        </span>
        by Tania Pidkova
      </div>
    </div>
  );
}

export default App;
