const express = require("express"); //import express
const router = express.Router();

const apiController = require("../controller/apiController");

// multiple routes
router.get("/students", apiController.getStudents);
router.get("/courses", apiController.getCourses);
router.get("/teachers", apiController.getTeachers);

module.exports = router;