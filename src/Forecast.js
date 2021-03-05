import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props){
    
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
  
    function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  
  if (loaded) {
      return (
        <div className="Forecast carouselExampleControls carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                       
                        <div className="carousel-item active">
                            <img src="https://webgradients.com/public/webgradients_png/004%20Juicy%20Peach.png" className="d-block w-100 forecast-image" alt="Tomorrow's Forecast" />
                            <div className="carousel-caption">
                                <h3>Tomorrow's Forecast</h3>
                                <h2><span className="second-day-temp temp">{Math.round(forecast.list[8].main.temp)}</span><span className="cfunit">°C</span></h2>
                                <ul>
                                    <li>
                                        <span className="second-day-description">{forecast.list[8].weather[0].description}</span>
                                    </li>
                                    <li>
                                        ↓ <span className="second-day-min temp">{Math.round(forecast.list[8].main.temp_min)}</span><span className="cfunit">°C</span> | ↑ <span className="second-day-max temp"></span>{Math.round(forecast.list[8].main.temp_max)}<span className="cfunit">°C</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="https://webgradients.com/public/webgradients_png/007%20Sunny%20Morning.png"
                                className="d-block w-100" alt="Forecast" />
                            <div className="carousel-caption">
                                <h3><span className="third-day"></span>'s Forecast</h3>
                                <h2><span className="third-day-temp temp">{Math.round(forecast.list[16].main.temp)}</span><span className="cfunit">°C</span></h2>
                                <ul>
                                    <li>
                                        <span className="third-day-description">{forecast.list[16].weather[0].description}</span>
                                    </li>
                                    <li>
                                        ↓ <span className="third-day-min temp">{Math.round(forecast.list[16].main.temp_min)}</span><span className="cfunit">°C</span> | ↑ <span className="third-day-max temp">{Math.round(forecast.list[16].main.temp_max)}</span><span className="cfunit">°C</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="https://webgradients.com/public/webgradients_png/126%20Colorful%20Peach.png"
                                className="d-block w-100" alt="Forecast" />
                            <div className="carousel-caption">
                                <h3><span className="fourth-day"></span>'s Forecast</h3>
                                <h2><span className="fourth-day-temp temp"></span><span className="cfunit">°C</span></h2>
                                <ul>
                                    <li>
                                        <span className="fourth-day-description"></span>
                                    </li>
                                    <li>
                                        ↓ <span className="fourth-day-min temp"></span><span className="cfunit">°C</span> | ↑ <span className="fourth-day-max temp"></span><span className="cfunit">°C</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="https://webgradients.com/public/webgradients_png/005%20Young%20Passion.png"
                                className="d-block w-100" alt="Forecast" />
                            <div className="carousel-caption">
                                <h3><span className="fifth-day"></span>'s Forecast</h3>
                                <h2><span className="fifth-day-temp temp"></span><span className="cfunit">°C</span></h2>
                                <ul>
                                    <li>
                                        <span className="fifth-day-description"></span>
                                    </li>
                                    <li>
                                        ↓ <span className="fifth-day-min temp"></span><span className="cfunit">°C</span> | ↑ <span className="fifth-day-max temp"></span><span className="cfunit">°C</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>

                </div>
    );
  } else {
    const apiKey = `4581002eb6d6effa90c6392584a38b4b`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.starterCity}&units=${units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayForecast);

    return null
}
}