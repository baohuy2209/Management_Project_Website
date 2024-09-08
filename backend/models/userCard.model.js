const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userCard = new Schema(
  {
    UserID: {
      typeof: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    cardID: {
      typeof: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
  },
  {
    timestamps: true,
  }
);
