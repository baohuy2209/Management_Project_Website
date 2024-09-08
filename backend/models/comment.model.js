const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    cardID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Comment", Comment);
