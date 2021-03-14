import React from "react";
import "./LocationSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

export default function LocationSection() {

  function displayLocationInfo(response) {
    console.log(response.data.city.name,
      Math.round(response.data.list[0].main.temp),
      response.data.list[0].weather[0].description,
      Math.round(response.data.list[0].main.feels_like),
      response.data.list[0].main.humidity,
      Math.round(response.data.list[0].wind.speed));
  }

  function searchCurrentLocation(position) {
  
  let latitudeValue = position.coords.latitude;
  let longitudeValue = position.coords.longitude;

  let apiKey = "4581002eb6d6effa90c6392584a38b4b";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitudeValue}&lon=${longitudeValue}&units=${units}`;

  console.log(`${apiUrl}&appid=${apiKey}`);

  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayLocationInfo);
}

function findCurrentLocation() {
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
}

  return (
    <div className="LocationSection">
      <div className="row align-items-center">
        <div className="col-md-6 offset-md-3">
          <h1 className="city">London</h1>
        </div>

        <div className="col-md-1">
          <button onClick={findCurrentLocation} className="btn btn-primary btn-sm current" type="button">
            <FontAwesomeIcon icon={faLocationArrow} />
          </button>
        </div>
      </div>
    </div>
  );
}