const userRoutes = require('express').Router();
const Schema = require('../schemas'); 
const validInputs = require('../middleware/validInputs'); 
const controller = require('../controllers');
const authenticateJWT = require('../middleware/authentication');

userRoutes.route('/')
  .post(validInputs(Schema.userPOST), controller.createUser)
  .use(authenticateJWT)
  .get(controller.listUsers);

// userRoutes.route('/:id')
// .use(authenticateJWT)
//   .get()
//   .put()
//   .delete();

module.exports = userRoutes;