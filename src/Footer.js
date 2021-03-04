import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <nav className="fixed-bottom">
        <div className="footer">
          <p className="footer-text">
            Coded by Amy |{" "}
            <a
              href="https://github.com/amysteel/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://eloquent-roentgen-db484a.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </p>
        </div>
      </nav>
    </div>
  );
}