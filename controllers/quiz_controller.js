module.exports.createQuestion = async (req, res) => {
    let { question, answer, options, marks } = req.body;
    options = options.map(option => option);
    
    let ques = new Question({
        question, answer, marks, options, created_by: req.user.id
    });

    try {
        await Question.create(ques);
        return res.status(200).json({message: "question created", error: false, data: ques});
    }
    catch(err) {
        return res.status(401).json({message: err.message, error: true, data: null});
    }
}

module.exports.getQuestions = async (req, res) => {
    try {
        let questions = await Question.find({});
        return res.status(200).json({message: "success", error: false, data: {questions}});
    }
    catch(err) {
        return res.status(401).json({message: err.message, error: true, data: null});
    } 
}

module.exports.createQuiz = async (req, res) => {
    
}