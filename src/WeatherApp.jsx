import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";


export default function WeatherApp() {

    const [ weatherInfo, setWeatherInfo ] = useState({
        temp: 300.05, tempMin: 300.05, tempMax: 300.05, humidity: 79, 
                feelsLike: 370.05, weather: "light rain", city: "Wonderland"
    })


    let updateInfo = (newInfo) => {

        setWeatherInfo(newInfo);

    }


    return (

        <div className="weather-app">
            <h2 className="app-title">Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>

    )

}