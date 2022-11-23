import React, { useState } from "react";

function SearchArea(props) {
  //usState object to store city name
  const [city, setCity] = useState("");

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
