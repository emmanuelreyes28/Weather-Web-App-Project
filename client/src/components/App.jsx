import React, { useEffect, useState, useRef } from "react";
import CityWeather from "./CityWeather";
import Header from "./Header";
import SearchArea from "./SearchArea";

function App() {
  //make api call using city name and render temp
  const [cityTemperature, setCityTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  //object that holds single city and weather
  const [cityWeather, setCityWeather] = useState({
    name: "",
    temp: "",
  });
  //an array of objects that contains mutliple cities and weather
  const [citiesArr, setCitiesArr] = useState([]);
  //useRef so api call does not render on intial render
  const isMounted = useRef(false);
  const [data, setData] = useState({});
  // const [weatherContent, setWeatherContent] = useState([
  //   { name: "", temp: "" },
  // ]);

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
        .then((data) =>
          setCityWeather({ name: data.name, temp: data.main.temp })
        );
    } else {
      isMounted.current = true;
    }
  }, [cityName]);

  useEffect(() => {
    console.log(citiesArr);
  }, [citiesArr]);

  //console.log(data);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     console.log("not first render");
  //   } else {
  //     isMounted.current = true;
  //   }
  // }, [data]);

  console.log(cityWeather);
  // console.log(citiesArr);

  // useEffect(() => {
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/weather?q=" +
  //       cityName +
  //       "&appid=" +
  //       "e0510037a8dda7f1b676abfb08e30234" +
  //       "&units=" +
  //       "imperial"
  //   )
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setWeatherContent((prevWeatherContent) => {
  //         return [
  //           ...prevWeatherContent,
  //           { name: data.name, temp: data.main.temp },
  //         ];
  //       })
  //     );
  // }, [cityName]);

  function addCityWeather(city) {
    setCityName(city); //used as a dependecy for useEffect to fetch api request
    console.log("is this being called");
    console.log(cityWeather);
    setCitiesArr((prevCities) => {
      return [...prevCities, cityWeather];
    });
    console.log(citiesArr);
  }

  return (
    <div>
      <Header />
      <SearchArea onAdd={addCityWeather} />
      <div>
        {citiesArr.map((cityInfo, index) => (
          <CityWeather
            key={index}
            id={index}
            city={cityInfo.name}
            temp={cityInfo.temp}
          />
        ))}
      </div>
      <CityWeather />
    </div>
  );
}

export default App;
