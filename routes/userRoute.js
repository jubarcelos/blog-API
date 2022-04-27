const userRoutes = require('express').Router();
const Schema = require('../schemas'); 
const validInputs = require('../middleware/validInputs'); 
const controller = require('../controllers');
const authenticateJWT = require('../middleware/authentication');

userRoutes.route('/')
  .post(validInputs(Schema.input.userPOST), controller.CreateUser)
  .get(authenticateJWT, controller.ListUsers);

userRoutes.route('/:id')
  .get(authenticateJWT,
    Schema.auth,
    controller.GetUser);
  // .put()
  // .delete();

module.exports = userRoutes;