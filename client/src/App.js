import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  //const [backEndData, setBackendData] = useState([{}]);
  const [cityTemperature, setCityTemperature] = useState(0);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);

  //why is react still rendering city temp when any other route is used
  useEffect(() => {
    fetch("/test")
      .then((response) => response.json())
      .then((data) => setCityTemperature(data.main.temp));
  }, []);

  return (
    <Router>
      <div>
        {/* {typeof backEndData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backEndData.users.map((user, i) => <p key={i}>{user}</p>)
      )} */}

        <p>{cityTemperature}</p>

        {/* <Route path="/">
          <p>I am home</p>
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
