const loginRoutes = require('express').Router();
const validInputs = require('../middleware/validInputs');
const Schema = require('../schemas');
const controller = require('../controllers');

loginRoutes.route('/')
  .post(validInputs(Schema.input.loginPOST), controller.login)
  .get(controller.login);

module.exports = loginRoutes;