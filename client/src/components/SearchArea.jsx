import React, { useState, useEffect } from "react";

function SearchArea(props) {
  //usState object to store city name and temp
  const [city, setCity] = useState("");

  //   useEffect(() => {
  //     fetch(
  //       "https://api.openweathermap.org/data/2.5/weather?q=" +
  //         city +
  //         "&appid=" +
  //         "e0510037a8dda7f1b676abfb08e30234" +
  //         "&units=" +
  //         "imperial"
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setWeatherInfo(json));
  //   }, [city]);

  function handleChange(event) {
    const cityName = event.target.value;
    setCity(cityName);
  }

  function submitCity(event) {
    props.onAdd(city);
    event.preventDefault();
    setCity("");
  }

  return (
    <div>
      <form>
        <p>Enter city name: </p>
        <input
          onChange={handleChange}
          name="name"
          placeholder="e.g. Los Angeles"
          value={city}
        />
        <button onClick={submitCity}>Get Temperature</button>
      </form>
    </div>
  );
}

export default SearchArea;
