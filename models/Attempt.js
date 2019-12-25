const mongoose = require("mongoose");

const attemptSchema = mongoose.Schema(
  {
    score: { type: Number, required: true },
    tike_taken: { type: String, required: true },
    attempted_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    quiz: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }]
  },
  {
    timestamps: true
  }
);

module.exports = Attempt = mongoose.model("attempt", attemptSchema);