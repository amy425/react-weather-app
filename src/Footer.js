import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <nav className="fixed-bottom">
        <div id="footer">
          <p id="footer-text">
            Coded by Amy |{" "}
            <a
              href="https://github.com/amysteel/final-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://sharp-montalcini-6f47d3.netlify.app/"
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