const postRoutes = require('express').Router();
const Schema = require('../schemas'); 
const validInputs = require('../middleware/validInputs'); 
const controller = require('../controllers');
const authenticateJWT = require('../middleware/authentication');

postRoutes.route('/')
  .get(authenticateJWT,
    Schema.auth,
    controller.ListPosts)
  .post(authenticateJWT, 
    validInputs(Schema.input.postPOST),
    Schema.auth,
    controller.CreatePost);

// postRoutes.route('/:id')
//   .get()
//   .put()
//   .delete();

module.exports = postRoutes;