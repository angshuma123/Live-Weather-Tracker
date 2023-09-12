import React, { useState, useEffect } from 'react';

const WeatherCard = ({ weatherInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = weatherInfo;

  let sec = sunset;
  let data = new Date(sec * 1000);
  let Time = `${data.getHours()}:${data.getMinutes()}`;
  
  
  const [weatherMode, setWeatherMode] = useState("wi-day-sunny");

  useEffect(() => {
    
    switch (weathermood) {
      case "Clouds":
        setWeatherMode("wi-day-cloudy");
        break;
        case "Mist":
        setWeatherMode("wi-dust");
        break;
      case "Haze":
        setWeatherMode("wi-fog");
        break;
      case "Clear":
        setWeatherMode("wi-day-sunny");
        break;
      default:
        setWeatherMode("wi-day-sunny");
        break;
    }
  }, [weathermood]);

  return (
    <>
      <article className='widget'>
        <div className="weatherIcon">
          <i className={`wi ${weatherMode}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name}, {country}</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p><i className={"wi wi-sunset"}></i></p>
              <p className='extra-info-leftside'>
                {Time} PM <br/>
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p><i className={"wi wi-humidity"}></i></p>
              <p className='extra-info-leftside'>
                {humidity}<br/>
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p><i className={"wi wi-rain"}></i></p>
              <p className='extra-info-leftside'>
                {pressure} <br/>
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p><i className={"wi wi-strong-wind"}></i></p>
              <p className='extra-info-leftside'>
                {speed} <br/>
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherCard;
