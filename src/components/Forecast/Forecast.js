import "bootstrap/dist/css/bootstrap.css"
import "./forecast.css"
import {findAllByDisplayValue} from "@testing-library/react";
const DAYS_OF_THE_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const Forecast = ({data}) =>{
    const currentDay = new Date().getDay()
    const forecastedDays = DAYS_OF_THE_WEEK.slice(currentDay, DAYS_OF_THE_WEEK.length).concat(DAYS_OF_THE_WEEK.slice(0,currentDay))
    return(
        <>
            <div className={"forecast-container"}>
                <p className={"txt txt-heading text-success"}>The week ahead...</p>
                {data.list.splice(0, 7).map((item, i) => (
                    <>
                        <div className="daily-forecast">
                            <p className="day">{forecastedDays[i]}</p>
                            <div className={"forecast-main"}>
                                <div className={"condition"}>
                                    <img src={`weather_icons/${item.weather[0].icon}.png`} className="icon-small"
                                         alt="weather"/>
                                    <p className="forecast-description">{item.weather[0].description.toUpperCase()}</p>
                                </div>
                                <div className={"daily-details"}>
                                    <p className={"forecast-temp"}>{Math.round(item.main.temp)}°C</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default Forecast;