const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Card = new Schema(
  {
    cardName: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true }, // to do, in progress, done
    dueDate: { type: Date, required: true },
    columnID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Column",
    },
    assignedUserID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    commentID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    attachmentID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attachment",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Card", Card);
s;
