const express = require("express");
const router = express.Router();

const taskController = require("../controller/taskController");

// Get task
router.get("/task", taskController.getTask);

// Create task
router.post("/task", taskController.createTask);

module.exports = router;