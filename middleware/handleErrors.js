const Joi = require('joi');
require('express-async-errors');

const handlerError = (err, req, res, _next) => {
  if (Joi.isError(err)) {
    return res.status(400).json({ message: err.details[0].message });
  }
  console.log(err);
  return res.status(500).json({ message: 'server error' });
};

module.exports = handlerError;