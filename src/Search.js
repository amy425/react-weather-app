import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search(props) {
  const [todaysInfo, setTodaysInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.starterCity);
  function displayTodaysInfo(response) {
    setTodaysInfo ({
      ready: true,
      name: response.data.city.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      temperature: Math.round(response.data.list[0].main.temp),
      description: response.data.list[0].weather[0].description,
      feelsLike: Math.round(response.data.list[0].main.feels_like),
      humidity: response.data.list[0].main.humidity,
      windSpeed: Math.round(response.data.list[0].wind.speed)
    })
  }

  function search() {
  const apiKey = `4581002eb6d6effa90c6392584a38b4b`;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTodaysInfo);
  }

  function citySearch(event) {
    event.preventDefault();
    search();
  }

  function cityUpdate(event) {
    setCity(event.target.value);
  }
  
  if (todaysInfo.ready) {
    return (
    <div className="Search">
      <form className="search-feature" onSubmit={citySearch}>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              autoComplete="off"
              className="form-control form-control-sm search-bar"
              autoFocus="on"
              onChange={cityUpdate}
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
      <div>
      {todaysInfo.name}
      {todaysInfo.iconUrl},
      {todaysInfo.temperature},
      {todaysInfo.description},
      {todaysInfo.feelsLike},
      {todaysInfo.humidity},
      {todaysInfo.time},
      {todaysInfo.day}
      </div>
    </div>
  );
  } else {
    search();
    return "Searching..."
  }
}