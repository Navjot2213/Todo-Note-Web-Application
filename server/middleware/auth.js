const jwt = require("jsonwebtoken");
const secret = "kuchBhiSecret";

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({ msg: "Invalid Authentication" });

    jwt.verify(token, secret , (err, user) => {
      if (err) return res.status(400).json({ msg: "Authorization not valid." });
      
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

module.exports = auth;