const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send({ error: "Unauthorized: Missing token" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.error("Token verification error:", err);
      return res.status(403).send({ error: "Forbidden: Invalid token" });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
