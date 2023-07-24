const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
  res.render("User");
});

router.get("/user/:id", (req, res) => {
  res.render("User" + req.params.id);
});

module.exports = router;