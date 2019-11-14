const express = require("express");

const Muppets = require("./muppets/muppetModel");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ api: "is go" });
});

server.post("/", (req, res) => {
  const muppet = req.body;
  Muppets.insert(muppet)
    .then(newMuppet =>
      res.status(201).json({ newMuppet, message: "made a muppet" })
    )
    .catch(error => res.status(500).json(error.message));
});

server.delete("/", (req, res) => {
  const { id } = req.params;
  Muppets.remove(id)
    .then(muppet => res.status(200).json({ message: "muppet terminated" }))
    .catch(err =>
      res.setMaxListeners(500).json({ message: "database infested" })
    );
});

module.exports = server;
