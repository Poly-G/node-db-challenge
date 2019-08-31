const router = require("express").Router();

const db = require("./resourceModel");

router.get("/", async (req, res) => {
  try {
    const resources = await db.getResources();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newResourceData = req.body;
    const newResource = await db.addResource(newResourceData);

    res.status(201).json(newResource);
  } catch (err) {
    res.status(500).json({ message: "Error adding resource" });
  }
});

module.exports = router;
