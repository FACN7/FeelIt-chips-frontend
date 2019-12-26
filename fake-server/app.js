const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = 4000;

const printInputsOptions = require("./dummy-data/print-inputs-options.json");
const getSensors = require("./dummy-data/get-sensors.json");
const getSensorsById = require("./dummy-data/get-sensors-by-id.json");
const checkAuth = require("./dummy-data/auth-check-successful.json");
const getAllUsers = require("./dummy-data/get-all-users.json");
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.get("/print-inputs-options", (req, res) => {
  res.json(printInputsOptions);
});
app.get("/get-all-users", (req, res) => {
  res.json(getAllUsers);
});
app.post("/print-resistance-table", (req, res) => {
  res.send();
});
app.get("/get-sensors", (req, res) => {
  res.json(getSensors);
});
app.get("/get-sensors/:_id", (req, res) => {
  res.json(getSensorsById);
});
app.post("/curing-table", (req, res) => {
  res.send();
});
app.delete("/delete-user/:_id", (req, res) => {
  res.send();
});

app.post("/invite-user", (req, res) => {
  res.send();
});

app.get("/auth-check", (req, res) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Credentials", "true");
  req.cookies.jwt ? res.json(checkAuth) : res.sendStatus(401);
});

app.post("/edit-dropdown/", (req, res) => {
  res.status(302).end();
});

app.post("/login", (req, res) => {
  req.cookies.jwt = "karem";
  console.log("hello karem");
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Credentials", "true");
  // res.header("Access-Control-Allow-Methods"," GET, POST");
  // res.header("Access-Control-Allow-Headers"," Content-Type, *");
  // const user = req.body;
  // console.log(user);
  res.cookie(
    "jwt",
    JSON.stringify({
      employee: "Jamie Coe",
      admin: true
    })
  );

  res.set('Location', 'http://localhost:3000/'); // this doesn't work
  res.sendStatus(302);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
