const mongoose = require("mongoose");

const attemptSchema = mongoose.Schema(
  {
    code: String,
    score: { type: Number },
    time_taken: { type: String },
    // attempted_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    attemptBy: { name: String, email: String },
    // quiz: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }]
  },
  {
    timestamps: true
  }
);

module.exports = Attempt = mongoose.model("attempt", attemptSchema);
