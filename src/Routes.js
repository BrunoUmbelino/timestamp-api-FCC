const express = require("express");
const Controller = require("./Controller");

const routes = express.Router();

routes.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

routes.get("/api/:date?", Controller.date);

module.exports = routes;
