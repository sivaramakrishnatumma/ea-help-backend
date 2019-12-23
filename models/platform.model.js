const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const platformScheme = mongoose.Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true },
    imageUrl: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Platform = mongoose.model("Platform", platformScheme);

module.exports = Platform;
