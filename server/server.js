const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
});

//server will use port 5000 bc react uses port 3000 by default
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
