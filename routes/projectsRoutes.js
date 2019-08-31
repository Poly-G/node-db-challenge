const express = require("express");

const db = require("./projectsModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await db.getProjects();
    const fullProject = projects.map(project => {
      if (project.completed === 1) {
        project.completed = true;
      } else {
        project.completed = false;
      }

      return project;
    });

    if (projects.length) {
      res.status(200).json(fullProject);
    } else {
      res.status(400).json({
        message: "No projects in db"
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

router.post("/", async (req, res) => {
  const newProject = req.body;

  if (!newProject.completed) {
    newProject.completed = false;
  }

  try {
    if (newProject.name) {
      const project = await db.addProject(newProject);

      if (project) {
        res.status(201).json(project);
      }
    } else {
      res.status(400).json({
        message: "Error"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error"
    });
  }
});

module.exports = router;
