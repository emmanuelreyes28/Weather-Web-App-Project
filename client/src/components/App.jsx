import React, { useEffect, useState } from "react";
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
  const [citiesArr, setCitiesArr] = useState([{}]);
  // const [weatherContent, setWeatherContent] = useState([
  //   {
  //     name: "test",
  //     temp: "",
  //   },
  // ]);

  //why is react still rendering city temp when any other route is used
  useEffect(() => {
    fetch("/test")
      .then((response) => response.json())
      .then((data) => setCityTemperature(data.main.temp));
  }, []);

  useEffect(() => {
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
  }, [cityName]);

  // console.log(cityWeather);
  console.log(citiesArr);

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

  //seperate weatherContent to be just an object
  //create a new states that is an array that can be used to store multiple weather objects

  //setting weather content in api fetch causes infinited loop

  //json.main.temp
  //json.name

  // console.log([...weatherContent, { name: "London", temp: "69" }]);

  function addCityWeather(city) {
    setCityName(city); //used as a dependecy for useEffect to fetch api request
    setCitiesArr((prevCities) => {
      return [...prevCities, cityWeather];
    });
  }

  return (
    <div>
      <Header />
      <SearchArea onAdd={addCityWeather} />
      <CityWeather />
    </div>
  );
}

export default App;
