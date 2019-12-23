const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productScheme = mongoose.Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true },
    altNames: { type: String },
    imageUrl: { type: String },
    platforms: { type: Array },
    topics: { type: Array }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", productScheme);

module.exports = Product;
