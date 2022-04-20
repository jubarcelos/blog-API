const loginRoutes = require('express').Router();
const validInputs = require('../middleware/validInputs');
const Schema = require('../schemas');
const controller = require('../controllers');
// const authenticateJWT = require('../middleware/authentication');

loginRoutes.route('/')
  .post(validInputs(Schema.input.loginPOST), controller.login)
  // .use(authenticateJWT)
  .get(controller.login);

// loginRoutes.route('/:id')
//  .use(authenticateJWT)
//   .get()
//   .put()
//   .delete();

module.exports = loginRoutes;