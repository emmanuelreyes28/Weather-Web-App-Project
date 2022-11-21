import React, { useEffect, useState } from "react";
import CityWeather from "./CityWeather";
import Header from "./Header";
import SearchArea from "./SearchArea";

function App() {
  //make api call using city name and render temp
  const [cityTemperature, setCityTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [weatherContent, setWeatherContent] = useState([
    {
      name: "test",
      temp: "",
    },
  ]);

  console.log(weatherContent[0].name);

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
      .then((json) =>
        setWeatherContent([
          ...weatherContent,
          { name: json.name, temp: json.main.temp },
        ])
      );
  });

  //seperate weatherContent to be just an object
  //create a new states that is an array that can be used to store multiple weather objects

  //setting weather content in api fetch causes infinited loop

  //json.main.temp
  //json.name

  console.log([...weatherContent, { name: "London", temp: "69" }]);

  function addCityWeather(city) {
    setCityName(city);
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
