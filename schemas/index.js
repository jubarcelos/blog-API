const joi = require('joi');
const { celebrate, Joi, Segments } = require('celebrate');

const input = {
  userPOST: joi.object().keys({
    displayName: joi.string().min(8).required(),
    email: joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
    password: joi.string().length(6).required(),
    image: joi.string().required(),
}),
  loginPOST: joi.object().keys({
    email: joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
    password: joi.string().min(6).required(),
}),
  categoriesPOST: joi.object().keys({
    name: joi.string().min(3).required(),
  }),
  postPOST: joi.object().keys({
    title: joi.string().min(3).required(),
    content: joi.string().min(3).required(),
    categoryIds: joi.array().required(),
  }),
  putPOST: joi.object().keys({
    title: joi.string().min(3).required(),
    content: joi.string().min(3).required(),
    categoryIds: joi.any().forbidden().messages({ 'any.unknown': 'Categories cannot be edited' }),
  }),
};

const auth = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

module.exports = { input, auth };

// consulted https://joi-tester.corneroftheinternet.rocks/public/html/docs.html#stringemailoptions
// consulted https://softchris.github.io/pages/joi.html#introducing-joi
// consulted https://stackoverflow.com/questions/65106628/validate-a-header-parameter-with-joi-nodejs