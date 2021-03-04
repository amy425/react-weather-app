import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search(props) {
  const [todaysInfo, setTodaysInfo] = useState({ ready: false });
  function displayTodaysInfo(response) {
    setTodaysInfo ({
      ready: true,
      name: response.data.city.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      temperature: Math.round(response.data.list[0].main.temp),
      description: response.data.list[0].weather[0].description,
      feelsLike: Math.round(response.data.list[0].main.feels_like),
      humidity: response.data.list[0].main.humidity,
      windSpeed: Math.round(response.data.list[0].wind.speed),
      time: new Date(response.data.list[0].dt * 1000),
      day: new Date(response.data.list[0].dt * 1000)
    })
  }
  
  if (todaysInfo.ready) {
    return (
    <div className="Search">
      <form className="search-feature">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              autoComplete="off"
              className="form-control form-control-sm search-bar"
              autoFocus="on"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 btn-sm search-button"
            />
          </div>
        </div>
      </form>
      {todaysInfo.name}
      {todaysInfo.iconUrl},
      {todaysInfo.temperature},
      {todaysInfo.description},
      {todaysInfo.feelsLike},
      {todaysInfo.humidity},
      {todaysInfo.windSpeed},
      {todaysInfo.time},
      {todaysInfo.day}
    </div>
  );
  } else {
    const apiKey = `4581002eb6d6effa90c6392584a38b4b`;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.starterCity}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTodaysInfo);

  return "Searching..."
  }
}