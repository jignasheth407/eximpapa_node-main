const mongoose = require("mongoose");
const User = require("./user-model");

const postproduct = new mongoose.Schema(
  {
    productname: {
      type: String,
    },
    availableunit: {
      type: String,
    },
    availableqty: {
      type: String,
    },
    countryoforigin: {
      type: String,
    },
    offerprice: {
      type: String,
    },
    other: {
      type: String,
    },
    productimage: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        text: String,
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Postproduct", postproduct);
