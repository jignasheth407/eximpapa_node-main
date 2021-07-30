const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth");
  if (!token) {
    return res.send({ message: "Access Denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (e) {
    return res.send({ error: e });
  }
}

module.exports = auth;
