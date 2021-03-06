const Jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decode = Jwt.verify(authHeader, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    if (error.name.includes('JsonWebTokenError')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next(error);
  }
};

module.exports = authenticateJWT;