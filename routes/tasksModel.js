const db = require("../dbConfig");

module.exports = {
  getTasks,
  addTask
};

function getTasks() {
  return db("tasks");
}

function addTask(data) {
  return db("tasks").insert(data);
}
