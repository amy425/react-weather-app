import React from "react";
import "./TopSection.css";

export default function TopSection(props) {
  return (
    <div className="TopSection">
      <div className="row align-items-center">
        <div className="col-6">
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt=""
            className="todays-icon"
          />
        </div>

        <div className="col-6">
          <h2 className="Temp">
            {props.temperature}
            <span className="cfunit">°C</span>
          </h2>
        </div>
      </div>
    </div>
  );
}