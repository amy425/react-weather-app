import React from "react";
import "./Search.css";

export default function () {
  return (
    <div className="Search">
      <form id="search-feature">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              autoComplete="off"
              className="form-control form-control-sm"
              id="search-bar"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              id="search-button"
              className="btn btn-primary w-100 btn-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
}