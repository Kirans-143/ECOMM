let controller = require("./../controller/auth.controller");
let express = require("express");
const verifySignUp = require("../middlewares/VerifySignUp");
let expressApp = express();
let router = express.Router();

expressApp.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/signup",
  [verifySignUp.checkDuplicateName, verifySignUp.checkRolesExisted],
  controller.signup
);
router.post("/signin", controller.signin);
module.exports = router;
