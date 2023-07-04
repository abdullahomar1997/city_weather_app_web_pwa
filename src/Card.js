import React from 'react';
import './App.css';
import { CityContainer, CityIcon, CityName, CountrySup, Description, InfoContainer, Temperature } from './StyledApp';



const Card = ({ weather }) => {
  return (
    <CityContainer>
      <CityName>
        <span>{weather.name}</span>
        <CountrySup>{weather.sys.country}</CountrySup>
      </CityName>
      <Temperature>
        {Math.round(weather.main.temp)}
        <sup>&deg;C</sup>
      </Temperature>
      <InfoContainer>
        <CityIcon src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <Description>{weather.weather[0].description}</Description>
      </InfoContainer>
    </CityContainer>
  );
};

export default Card;
