const mongoose = require("mongoose");

const quizSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true },
    duration: { type: String, required: true },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    code: { tyoe: String },
    marks: { type: Number },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }]
  },
  {
    timestamps: true
  }
);

module.exports = Quiz = mongoose.model("quiz", quizSchema);
