const express = require("express");
const router = express.Router();

const { teacherAuth } = require("../../../middlewares/auth");
const { createQuestion, getQuestions, createQuiz } = require("../../../controllers/quiz_controller");

router.post("/add-question", teacherAuth, createQuestion);
router.get("/questions", teacherAuth, getQuestions);
router.post("/create-quiz", teacherAuth, createQuiz);

module.exports = router;
