const mongoose = require("mongoose");
const User = require("./user-model");
const requirement = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    minimumunit: {
      type: String,
    },
    minimumqty: {
      type: String,
    },
    portofdischarge: {
      type: String,
    },
    targetprice: {
      type: String,
    },
    requiredpricetype: {
      type: String,
    },
    paymentterms: {
      type: String,
    },
    equiredquotenos: {
      type: Number,
    },
    origin: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Requirement", requirement);
