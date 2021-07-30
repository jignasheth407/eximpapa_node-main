const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim:true
    },
    mobilenumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    countrycode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    profile: {
      type: String,
    },
    companyname: {
      type: String,
    },
    position: {
      type: String,
    },
    type: {
      type: String,
    },
    companylocationcity: {
      type: String,
    },
    companylocationcountry: {
      type: String,
    },
    contactinfo: {
      type: String,
    },
    contactemail: {
      type: String,
    },
    productlist: {
      type: String,
    },
    iscomplete: {
      type: Boolean,
      default: false,
    },
    cropname: {
      type: String,
    },
    minimumproductioncapacity: {
      type: String,
    },
    availableland: {
      type: String,
    },
    countryname: {
      type: String,
    },
    cityname: {
      type: String,
    },
    area: {
      type: String,
    },
    servicesincountry: {
      type: String,
    },
    coveredportname: {
      type: String,
    },
    serveincity: {
      type: String,
    },
    serveincountry: {
      type: String,
    },
    approxprice: {
      type: String,
    },
    routefromcitytocity: {
      type: String,
    },
    schedule: {
      type: String,
    },
    loadingcapacity: {
      type: String,
    },
    approxprice: {
      type: String,
    },

    holdingcapacity: {
      type: String,
    },
    approxcharges: {
      type: String,
    },
    countryselected: {
      type: String,
    },
    serveinthecity: {
      type: String,
    },
    serveinthecountry: {
      type: String,
    },
    approxcharges: {
      type: String,
    },
    raisefund: {
      type: String,
    },
    profileimage: {
      type: String,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
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

const User = mongoose.model("User", user);
module.exports = User;
