import "./App.css";
import Search from "./components/Search";
import Weather from "./components/current_weather/Weather";
import Forecast from "./components/Forecast/Forecast";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { WEATHER_API_URL } from "./API";
import { WEATHER_API_KEY } from "./API";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch]).then(
      async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        console.log("Weather Data:", weatherResponse);
        console.log("Forecast Data:", forecastResponse);
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      }
    );
  };
  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className={"container"}>
        <p className={"text-dark-emphasis title"}>React JS Weather App</p>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Weather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
        <Footer/>
    </div>
  );
}

export default App;
