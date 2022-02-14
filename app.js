const express = require("express");

const bodyParser = require("body-parser");
const db = require("./config/database");

db.authenticate()
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => console.log(err));
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
