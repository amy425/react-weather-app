import React from "react";
import "./LocationSection.css";

export default function LocationSection() {
  return (
    <div className="LocationSection">
      <div className="row align-items-center">
        <div className="col-md-6 offset-md-3">
          <h1 className="city">London</h1>
        </div>

        <div className="col-md-1">
          <button className="btn btn-primary btn-sm current" type="button">
            <i className="fas fa-location-arrow location"></i>
          </button>
        </div>
      </div>
    </div>
  );
}