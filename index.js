const express = require("express");
const mongoose = require("mongoose");
const reportRouter = require("./routes/reportRoute");

const app = express();

app.use(express.json());
app.use(reportRouter);

mongoose.connect("mongodb://localhost:27017/market", () => {
  console.log("Database Connected");
});

const port = 4000;
app.listen(port, () => {
  console.log("Server is ready to response");
});
