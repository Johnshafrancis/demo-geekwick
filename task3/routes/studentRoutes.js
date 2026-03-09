const express = require("express");
const router = express.Router();

const studentController = require("../controller/studentController");

router.get("/students", studentController.getAllStudents);
router.get("/students/:id", studentController.getStudentById);
router.post("/students", studentController.createStudent);

module.exports = router;