import React from "react";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Philadelphia",
    description: "Sunny",
    date: "Tuesday 20:30",
    humidity: "30",
    wind: "10",
    temperature: "25",
    imgUrl:
      "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png"
  };
  return (
    <div className="App">
      <div className="main-container">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  id="city"
                  placeholder="Search city or zipcode"
                  className="form-control"
                />
              </div>

              <div className="col-3">
                <input type="submit" value="🔍" className="form-control" />
              </div>

              <div className="col-3">
                <h1>
                  <span></span>
                  <span className="units">
                    {weatherData.temperature}
                    °C  |°F
                  </span>
                </h1>
              </div>
            </div>
          </form>

          <h2 className="image">
            <img src={weatherData.imgUrl} />
          </h2>

          <h3>{weatherData.city}</h3>
          <p>{weatherData.description}</p>

          <div className="info">
            <li>
              Humidity: {weatherData.humidity}
              <span></span>%
            </li>
            <li>
              Wind: {weatherData.wind}
              <span></span> km/h
            </li>
          </div>

          <div className="today">
            <div className="card">
              <div className="card-body">
                <h4>
                  Today, <br />
                  <li>{weatherData.date}</li>
                </h4>
              </div>
            </div>
          </div>

          <div className="previsions">
            <div className="row">
              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <p>
                      <li>🌞</li>
                      <li>Have</li>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <p>
                      <li>🌞</li>
                      <li>A</li>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <p>
                      <li>🌞</li>
                      <li>Good</li>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <p>
                      <li>🌞</li>
                      <li>Day</li>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
            <a
              href="https://github.com/BarbaraCB/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>{" "}
            by Barbara Bousquet
          </footer>
    </div>
  );
}