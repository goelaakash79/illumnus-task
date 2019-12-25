const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    type: { type: String, default: "mcq" },
    options: [{ a1: String }, { a2: String }, { a3: String }, { a4: String }],
    answer: { type: String, enum: ["a1", "a2", "a3", "a4"] },
    marks: { type: Number, required: true },
    question: { type: String, required: true },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

module.exports = Question = mongoose.model("question", questionSchema);