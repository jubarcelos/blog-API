const loginRoutes = require('express').Router();
const validInputs = require('../middleware/validInputs');
const Schema = require('../schemas');
const controller = require('../controllers');

loginRoutes.route('/')
  .post(validInputs(Schema.input.loginPOST), controller.Login)
  .get(controller.Login);

module.exports = loginRoutes;