const jwt = require("jsonwebtoken");
const JWT_TOKEN = process.env.ACCESS_TOKEN_SECRET;

const createAccessToken = (payload) => {
  return jwt.sign(payload, JWT_TOKEN);
}

module.exports = {
  createAccessToken,
}