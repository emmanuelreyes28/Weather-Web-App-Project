require("dotenv").config(); //npm i dotenv --save to hide api key
const https = require("https"); //native node no need for npm install
const express = require("express"); //npm i express to use routes
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
});

app.get("/", (req, res) => {
  const query = "Los Angeles";
  const apiKey = process.env.APIKEY;
  const unit = "imperial";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;

  //print response status code
  // https.get(url, function (response) {
  //   console.log(response.statusCode);

  //   response.on("data", function (data) {
  //     const weatherData = JSON.parse(data);
  //     console.log(weatherData);
  //     res.json(weatherData); //need to send json object over to react with fetch
  //   });
  // });
});

//server will use port 5000 bc react uses port 3000 by default
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

//npm run dev to start nodemon on port 5000
