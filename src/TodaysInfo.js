import React from "react";
import "./TodaysInfo.css";

export default function TodaysInfo() {
  return (
    <div className="TodaysInfo row align-items-center" id="todays-info">
      <div className="col-6">
        <ul>
          <li>
            Today is Friday<span id="date"></span>
          </li>
          <li>
            21:00<span id="today-time"></span>
          </li>
          <li>
            Overcast clouds<span id="conditions"></span>
          </li>
        </ul>
      </div>

      <div className="col-6">
        <ul>
          <li>
            Feels Like: 4<span id="feels-like" className="temp"></span>
            <span className="cfunit fl-temp">°C</span>
          </li>
          <li>
            Humidity: 20<span id="humidity"></span>%
          </li>
          <li>
            Wind Speed: 3<span id="wind-speed"></span>km/h
          </li>
        </ul>
      </div>
    </div>
  );
}