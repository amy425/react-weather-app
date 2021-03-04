import React from "react";
import "./TempButton.css";

export default function TempButton() {
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
      >
        °C
      </button>
      <button
        type="button"
        className="btn btn-secondary rounded-0 fahrenheit-link"
        href="#"
        data-bs-toggle="button"
      >
        °F
      </button>
    </div>
  );
}