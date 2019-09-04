const express = require("express");
const server = express();
server.use(express.json());

server.use(logger);

const projectsRoute = require("./routes/projectsRoutes");
server.use("/projects", projectsRoute);

const resourceRoute = require("./routes/resourceRoutes");
server.use("/resources", resourceRoute);

const tasksRoute = require("./routes/tasksRoute");
server.use("/tasks", tasksRoute);

server.get("/", (req, res) => {
  res.send(`Working!`);
});

function logger(req, res, next) {
  console.log(
    `Method: ${req.method}, url: ${
      req.url
    }, timestamp: [${new Date().toISOString()}]`
  );
  next();
}

module.exports = server;
