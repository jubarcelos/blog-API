const userRoutes = require('express').Router();
const Schema = require('../schemas'); 
const validInputs = require('../middleware/validInputs'); 
const controller = require('../controllers');
const authenticateJWT = require('../middleware/authentication');

userRoutes.route('/')
  .post(validInputs(Schema.input.userPOST), controller.createUser)
  .get(authenticateJWT, controller.listUsers);

userRoutes.route('/:id')
  .get(authenticateJWT, 
    validInputs(Schema.input.userGET),
    Schema.auth,
    controller.getUser);
  // .put()
  // .delete();

module.exports = userRoutes;