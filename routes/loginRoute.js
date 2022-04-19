const loginRoutes = require('express').Router();
const validInputs = require('../middleware/validInputs');
const Schema = require('../schemas');
const controller = require('../controllers');

loginRoutes.route('/')
  .get(controller.login)
  .post(validInputs(Schema.loginPOST), controller.login);

// loginRoutes.route('/:id')
//   .get()
//   .put()
//   .delete();

module.exports = loginRoutes;