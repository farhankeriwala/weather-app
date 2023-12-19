import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./weather.css";
const Weather = ({data}) => {
    return(
        <div className={"current-weather"}>
            <p className={"city txt-heading text-success p-1"}>{data.city}</p>
            <div className={"current-weather-container"}>
                <div className={"left"}>
                    <img alt={"weather"} className={"weather-icon"} src={`weather_icons/${data.weather[0].icon}.png`}/>
                    <div className={"current-conditions"}>
                        <p className={"condition txt"}>{data.weather[0].description.toUpperCase()}</p>
                        <p className={"temperature txt"}>{Math.round(data.main.temp)}°C</p>
                    </div>
                </div>
                <div className={"right"}>
                    <div className={"details"}>
                        <p className={"txt txt-heading p-1"}>Details</p>
                        <div className={"detail-row"}>
                            <div className={"row-cols-6 detail-label txt"}>Feels Like</div>
                            <div className={"row-cols-6 detail-value txt"}>{Math.round(data.main.feels_like)}°C</div>
                        </div>
                        <div className={"detail-row"}>
                            <div className={"row-cols-6 detail-label txt"}>Wind Speed</div>
                            <div className={"row-cols-6 detail-value txt"}>{Math.round(data.wind.speed)} mph</div>
                        </div>
                        <div className={"detail-row"}>
                            <div className={"row-cols-6 detail-label txt"}>Humidity</div>
                            <div className={"row-cols-6 detail-value txt"}>{data.main.humidity}%</div>
                        </div>
                        <div className={"detail-row"}>
                            <div className={"row-cols-6 detail-label txt"}>Pressure</div>
                            <div className={"row-cols-6 detail-value txt"}>{data.main.pressure} hPa</div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
export default Weather;