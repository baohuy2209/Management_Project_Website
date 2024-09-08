const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
    },
    role: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    lastLogin: { type: Date },
    boardID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Board",
        default: null,
      },
    ],
    notificationID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notification",
        default: null,
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", User);
