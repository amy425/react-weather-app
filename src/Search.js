import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-feature">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              autoComplete="off"
              className="form-control form-control-sm search-bar"
              autoFocus="on"
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
    </div>
  );
}