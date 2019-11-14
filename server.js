const express = require("express");

const Muppets = require("./muppets/muppetModel");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ api: "api is go" });
});

server.get("/muppets", (req, res) => {});

module.exports = server;
