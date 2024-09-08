const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Board = new Schema(
  {
    boardName: { type: String, required: true },
    description: { type: String },
    ownerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    columnID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Column",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Board", Board);
