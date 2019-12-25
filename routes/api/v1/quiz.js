const express = require("express");
const router = express.Router();

const { teacherAuth } = require("../../../middlewares/auth");
const { createQuestion } = require("../../../controllers/quiz_controller");

router.get("/add-question", teacherAuth, createQuestion);

module.exports = router;
