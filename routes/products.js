const router = require("express").Router();
let Product = require("../models/product.model");

router.route("/").get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { name, id, altNames, imageUrl, platforms, topics } = req.body;

  const newProduct = new Product({
    name,
    id,
    altNames,
    imageUrl,
    platforms,
    topics
  });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
