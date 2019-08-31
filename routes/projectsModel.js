const db = require("../dbConfig");

module.exports = {
  getProjects,
  addProject
};

function getProjects() {
  return db("projects");
}

function addProject(data) {
  return db("projects").insert(data);
}
