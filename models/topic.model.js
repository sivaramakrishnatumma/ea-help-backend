const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const topicScheme = mongoose.Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true },
    issues: { type: Array }
  },
  {
    timestamps: false
  }
);

const Topic = mongoose.model("Topic", topicScheme);

module.exports = Topic;
