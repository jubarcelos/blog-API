const Jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '20d',
};

const token = (payload = {}) => Jwt.sign({ data: payload }, process.env.JWT_SECRET, jwtConfig);

module.exports = token;