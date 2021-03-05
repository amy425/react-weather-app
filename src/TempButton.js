import React, { useState } from "react";
import "./TempButton.css";

export default function TempButton() {
const [unit, setUnit] = useState("celsius");

    function displayCelsius(event) {
      event.preventDefault();
      setUnit("celsius");
    }
    
    function displayFahrenheit(event) {
      event.preventDefault();
      setUnit("fahrenheit");
    }
    
    if (unit === "celsius") {
    return (
    <div
      className="TempButton btn-group col-12 button-section"
      role="group"
      aria-label="Unit converter"
    >
      <button
        type="button"
        className="btn btn-secondary rounded-0 active celsius-link"
        href="#"
        data-bs-toggle="button"
        aria-pressed="true"
        onClick={displayCelsius}
      >
        °C
      </button>
      <button
        type="button"
        className="btn btn-secondary rounded-0 fahrenheit-link"
        href="#"
        data-bs-toggle="button"
        onClick={displayFahrenheit}
      >
        °F
      </button>
    </div>
  );
    } else {
      return (
      <div
      className="TempButton btn-group col-12 button-section"
      role="group"
      aria-label="Unit converter"
    >
      <button
        type="button"
        className="btn btn-secondary rounded-0 celsius-link"
        href="#"
        data-bs-toggle="button"
        onClick={displayCelsius}
      >
        °C
      </button>
      <button
        type="button"
        className="btn btn-secondary rounded-0 active fahrenheit-link"
        href="#"
        data-bs-toggle="button"
        aria-pressed="true"
        onClick={displayFahrenheit}
      >
        °F
      </button>
    </div>
  );
    }
}