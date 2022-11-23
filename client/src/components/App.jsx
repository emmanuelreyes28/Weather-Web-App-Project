import React, { useEffect, useState, useRef } from "react";
import CityWeather from "./CityWeather";
import Header from "./Header";
import SearchArea from "./SearchArea";

function App() {
  const [cityName, setCityName] = useState(""); //use to fetch data from api and as dependecy on useEffect
  const isMounted = useRef(false); //used to stop useEffect from rendering on first render
  const [weatherContent, setWeatherContent] = useState([]); //contains all cities and respective temps

  //fetches data from api and sets new data to weatherContent
  useEffect(() => {
    if (isMounted.current) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          cityName +
          "&appid=" +
          "e0510037a8dda7f1b676abfb08e30234" +
          "&units=" +
          "imperial"
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherContent((prevWeatherContent) => {
            return [
              ...prevWeatherContent,
              { name: data.name, temp: data.main.temp },
            ];
          });
        });
    } else {
      isMounted.current = true;
    }
  }, [cityName]);

  //initiates useEffect
  function addCityWeather(city) {
    setCityName(city); //used as a dependecy for useEffect to fetch api request
  }

  return (
    <div>
      <Header />
      <SearchArea onAdd={addCityWeather} />
      <div>
        {weatherContent.map((cityInfo, index) => (
          <CityWeather
            key={index}
            id={index}
            city={cityInfo.name}
            temp={cityInfo.temp}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
