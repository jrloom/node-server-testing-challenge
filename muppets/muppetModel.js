const db = require("../data/dbConfig");

async function insert(muppet) {
  return db("muppets")
    .insert()
    .then(() => {
      return db("muppets")
        .where()
        .first();
    });
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("muppets");
}

function findById(id) {
  return null;
}

module.exports = {
  getAll,
  findById,
  insert,
  update,
  remove
};
