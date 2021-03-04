import React from "react";
import "./TodaysInfo.css";

export default function TodaysInfo() {
  return (
    <div className="TodaysInfo row align-items-center">
      <div className="col-6">
        <ul>
          <li>
            Today is Friday<span id="date"></span>
          </li>
          <li>
            21:00<span className="today-time"></span>
          </li>
          <li>
            Overcast clouds<span className="conditions"></span>
          </li>
        </ul>
      </div>

      <div className="col-6">
        <ul>
          <li>
            Feels Like: 4<span className="feels-like temp"></span>
            <span className="cfunit fl-temp">°C</span>
          </li>
          <li>
            Humidity: 20<span className="humidity"></span>%
          </li>
          <li>
            Wind Speed: 3<span className="wind-speed"></span>km/h
          </li>
        </ul>
      </div>
    </div>
  );
}