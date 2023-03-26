import React from "react";

const Weather = ({ data, checkbox }) => {
  return (
    <div className="container">
      <header className="header">
        <img
          className="icon"
          src={`https://openweathermap.org/img/wn/${
            data.weather ? data.weather[0].icon : null
          }@2x.png`}
          alt=""
        />
        <h2 className="temperature">{data.main ? data.main.temp : null}°C</h2>
        <h3 className="title">{data.name}</h3>
        <p>{data.weather ? data.weather[0].main : null}</p>
      </header>
      <div className="footer">
        <div>
          <p>Wind now</p>
          <h2>{data.main ? data.wind.speed : null} mph</h2>
        </div>
        <div>
          <p>Humidty</p>
          <h2>{data.main ? data.main.humidity : null}%</h2>
        </div>
        <div>
          <p>Max temp</p>
          <h2>
            {data.main ? data.main.temp_max : null}
            °C
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Weather;
