const router = require("express").Router();
let Platform = require("../models/platform.model");

router.route("/").post((req, res) => {
  const items = req.body.platforms;
  Platform.find()
    .then(platforms => {
      platforms = platforms.filter(platform =>
        items.find(item => item === platform.id)
      );
      res.json(platforms);
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { name, id, imageUrl } = req.body;

  const newPlatform = new Platform({
    name,
    id,
    imageUrl
  });

  newPlatform
    .save()
    .then(() => res.json("Platform added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
