const db = require("../data/dbConfig");

async function insert(muppet) {
  return db("muppets")
    .insert(muppet, "id")
    .then(([id]) => {
      return db("muppets")
        .where({ id })
        .first();
    });
}

async function update(id, changes) {
  return db("muppets")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("muppets")
    .where({ id })
    .del();
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
