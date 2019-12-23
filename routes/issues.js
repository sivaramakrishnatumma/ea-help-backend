const router = require("express").Router();
let Issue = require("../models/issue.model");

router.route("/").post((req, res) => {
  const items = req.body.issues;
  Issue.find()
    .then(issues => {
      issues = issues.filter(issue => items.find(item => item === issue.id));
      res.json(issues);
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { name, id } = req.body;

  const newIssue = new Issue({
    name,
    id
  });

  newIssue
    .save()
    .then(() => res.json("Issue added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
