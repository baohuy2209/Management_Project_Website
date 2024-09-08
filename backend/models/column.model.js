const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Column = new Schema(
  {
    columnName: { type: String, required: true },
    boardID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
    },
    position: {
      type: Number,
      required: true,
    },
    cardID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
      },
    ],
  },
  {
    timestampe: true,
  }
);
module.exports = mongoose.model("Column", Column);
