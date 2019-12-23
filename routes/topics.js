const router = require("express").Router();
let Topic = require("../models/topic.model");

router.route("/").post((req, res) => {
  const items = req.body.topics;
  Topic.find()
    .then(topics => {
      topics = topics.filter(topic => items.find(item => item === topic.id));
      res.json(topics);
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { name, id, issues } = req.body;

  const newTopic = new Topic({
    name,
    id,
    issues
  });

  newTopic
    .save()
    .then(() => res.json("Topic added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
