let jwt = require("jsonwebtoken");
let config = require("./../config/auth.config");

let VerifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).json({
      message: "Invalid Token",
    });
    return;
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: "Unothorized",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = {
  VerifyToken,
};
