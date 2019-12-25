const express = require("express");
const router = express.Router();

const { teacherAuth } = require("../../../middlewares/auth");
const { createQuestion, getQuestions, createQuiz, getQuiz } = require("../../../controllers/quiz_controller");

router.post("/add-question", teacherAuth, createQuestion);
router.get("/questions", teacherAuth, getQuestions);
router.post("/create-quiz", teacherAuth, createQuiz);
router.get("/:code", getQuiz);

module.exports = router;
