const db = require("../dbConfig");

module.exports = {
  getResources,
  addResource
};

function getResources() {
  return db("resources");
}

function addResource(resource) {
  return db("resources").insert(resource);
}