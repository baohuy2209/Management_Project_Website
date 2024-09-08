const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Attachment = new Schema(
  {
    fileName: { type: String, required: true },
    filePath: { type: String, required: true },
    cardID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Attachment", Attachment);
