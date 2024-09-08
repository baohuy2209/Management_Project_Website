const express = require("express");
const router = express.Router();
const verifySignUp = require("../middleware/verifySignUp");
const controller = require("../controllers/AuthController");
router.use(function (req, res, next) {
  res.header("Access-Controll-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});
router.post("/register", controller.register);
router.post("/signin", controller.signin);
router.post("/signout", controller.signout);
module.exports = router;
