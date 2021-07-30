const mongoose = require("mongoose");
const User = require("./user-model");

module.exports = mongoose.model(
  "Feedback",
  new mongoose.Schema({
    feedback: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  })
);
