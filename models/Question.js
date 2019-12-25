const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    type: { type: String, default: "mcq" },
    options: [{ type: String }],
    answer: { type: String, enum: ["1", "2", "3", "4"] },
    marks: { type: Number, required: true },
    question: { type: String, required: true },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

module.exports = Question = mongoose.model("question", questionSchema);