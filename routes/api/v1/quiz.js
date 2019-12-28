const express = require("express");
const router = express.Router();

const { teacherAuth } = require("../../../middlewares/auth");
const {
  createQuestion,
  getQuestions,
  createQuiz,
  getQuiz,
  startQuiz,
  attemptQuiz,
  getQuizzes
} = require("../../../controllers/quiz_controller");

router.post("/add-question", teacherAuth, createQuestion);
router.get("/questions", teacherAuth, getQuestions);
router.post("/create-quiz", teacherAuth, createQuiz);
router.get("/", teacherAuth, getQuizzes);

router.get("/:code", getQuiz);
router.post("/:code", attemptQuiz);

module.exports = router;
