const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Notification = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    cardID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Notification", Notification);
