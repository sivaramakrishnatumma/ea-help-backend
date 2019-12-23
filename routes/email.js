const router = require("express").Router();

const mails = require("../utils/mail");

router.route("/").post((req, res) => {

  mails.sendEmail(req.body).then(
    success => {
      res.json({ message: "Email Sent" });
    },
    error => {
      res.status(500).json({ message: "Internal Error" });
    }
  );
});

module.exports = router;
