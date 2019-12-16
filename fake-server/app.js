const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 4000;

const printInputsOptions = require("./dummy-data/print-inputs-options.json")
const getSensors = require("./dummy-data/get-sensors.json")
const getSensorsById = require("./dummy-data/get-sensors-by-id.json");
const app= express();

app.use(cors());
app.use(bodyParser.json());


app.get("/print-inputs-options",(req,res)=>{
    res.json(printInputsOptions);
});
app.post("/print-resistance-table",(req,res)=>{
    res.send();
});
app.get("/get-sensors",(req,res)=>{
    res.json(getSensors);
});
app.get("/get-sensors/:_id",(req,res)=>{
    res.json(getSensorsById);
});
app.post("/curing-table",(req,res)=>{
    res.send();
});

app.listen(port,()=>{console.log(`server running on port ${port}`)});