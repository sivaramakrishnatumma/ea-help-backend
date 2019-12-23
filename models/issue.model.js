const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const issueScheme = mongoose.Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true }
  },
  {
    timestamps: false
  }
);

const Issue = mongoose.model("Issue", issueScheme);

module.exports = Issue;
