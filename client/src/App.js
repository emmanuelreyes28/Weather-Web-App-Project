import React, { useEffect, useState } from "react";

function App() {
  const [backEndData, setBackendData] = useState([{}]);
  //const [cityTemperature, setCityTemperature] = useState(0);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  useEffect(() => {
    fetch("/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      {typeof backEndData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backEndData.users.map((user, i) => <p key={i}>{user}</p>)
      )}

      {/* <p>{cityTemperature}</p> */}
    </div>
  );
}

export default App;
