const Joi = require('joi');

const schemas = {
  userPOST: Joi.object().keys({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string().required(),
}),
  loginPOST: Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
    password: Joi.string().min(6).required(),
}),
  postPOST: Joi.object().keys({
    
  }),
};

module.exports = schemas;

// consulted https://joi-tester.corneroftheinternet.rocks/public/html/docs.html#stringemailoptions
// consulted https://softchris.github.io/pages/joi.html#introducing-joi