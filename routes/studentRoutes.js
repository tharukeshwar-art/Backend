const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");


// GET
router.get("/", studentController.getStudents);

// POST
router.post("/", studentController.addStudent);

// PUT
router.put("/:id", studentController.updateStudent);

// DELETE
router.delete("/:id", studentController.deleteStudent);


module.exports = router;