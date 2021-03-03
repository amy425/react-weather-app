import React from "react";
import "./TempButton.css";

export default function TempButton() {
  return (
    <div
      className="TempButton btn-group col-12"
      role="group"
      aria-label="Unit converter"
      id="button-section"
    >
      <button
        type="button"
        className="btn btn-secondary rounded-0 active"
        href="#"
        data-bs-toggle="button"
        aria-pressed="true"
        id="celsius-link"
      >
        °C
      </button>
      <button
        type="button"
        className="btn btn-secondary rounded-0"
        href="#"
        data-bs-toggle="button"
        id="fahrenheit-link"
      >
        °F
      </button>
    </div>
  );
}