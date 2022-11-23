import React from "react";

function CityWeather(props) {
  return (
    <div>
      <p>Name of City: {props.city}</p>
      <p>Temperature in Faranheit: {props.temp}</p>
    </div>
  );
}

export default CityWeather;
