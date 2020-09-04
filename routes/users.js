const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator/check");

// @route  POST  api/users
// @desc   Register a user
// @access Public
router.post(
  "/",
  [
    check("name", "Please enter name").not().isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password of minimum 6 characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.send("Passed");
  }
);

module.exports = router;
