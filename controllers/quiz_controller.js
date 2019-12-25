module.exports.createQuestion = async (req, res) => {
  let { question, answer, options, marks } = req.body;
  // options = options.map(option => option);

  let ques = new Question({
    question,
    answer,
    marks,
    options,
    created_by: req.user.id
  });

  try {
    await Question.create(ques);
    return res
      .status(200)
      .json({ message: "question created", error: false, data: ques });
  } catch (err) {
    return res
      .status(401)
      .json({ message: err.message, error: true, data: null });
  }
};

module.exports.getQuestions = async (req, res) => {
  try {
    let questions = await Question.find({});
    return res
      .status(200)
      .json({ message: "success", error: false, data: { questions } });
  } catch (err) {
    return res
      .status(401)
      .json({ message: err.message, error: true, data: null });
  }
};

module.exports.createQuiz = async (req, res) => {
  // duration is taken in minutes
  try {
    let { title, subject, duration, questions } = req.body;
    let qq = await Question.find({ _id: { $in: questions } }); // quiz questions
    let marks = 0;
    qq.forEach(q => {
      marks += q.marks;
    });
    let quiz = new Quiz({
      title,
      subject,
      duration,
      created_by: req.user.id,
      questions,
      marks
    });
    let code = `ILLUMNUS-${String(quiz._id).slice(18, 24)}`;
    quiz.code = code;
    await Quiz.create(quiz);
    return res
      .status(200)
      .json({ message: "quiz created", error: false, data: null });
  } catch (err) {
    return res
      .status(401)
      .json({ message: err.message, error: true, data: null });
  }
};

module.exports.getQuiz = async (req, res) => {
  let code = `ILLUMNUS-${req.params.code}`;
  try {
    let quiz = await Quiz.findOne(
      { code: code },
      {
        marks: 1,
        questions: 1,
        title: 1,
        subject: 1,
        duration: 1,
        code: 1
      }
    );
    if (quiz) {
      let { marks, title, subject, code, duration } = quiz;
      let questions = await Question.find(
        { _id: { $in: quiz.questions } },
        { question: 1, options: 1, marks: 1 }
      ); // quiz questions

      quiz = { title, subject, questions, marks, duration };

      return res
        .status(200)
        .json({ message: "quiz found", error: false, data: { quiz, comment: "duration is in minutes" } });
    } else
      return res
        .status(404)
        .json({ message: "no quiz", error: true, data: null });
  } catch (err) {
    return res
      .status(200)
      .json({ message: err.message, error: true, data: null });
  }
};
