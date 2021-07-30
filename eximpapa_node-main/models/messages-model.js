const mongoose = require("mongoose");

const message = new mongoose.Schema({
  senderid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    trim: true,
  },
  receiverid:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
  }
},{
    timestamps:true
});

module.exports=mongoose.model('Message',message)
