const userRoutes = require('express').Router();
const Schema = require('../schemas'); 
const validInputs = require('../middleware/validInputs'); 
const controller = require('../controllers');

userRoutes.route('/')
  .get(controller.listUsers)
  .post(validInputs(Schema.userPOST), controller.createUser);

// userRoutes.route('/:id')
//   .get()
//   .put()
//   .delete();

module.exports = userRoutes;