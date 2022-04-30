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

postRoutes.route('/:id')
  .get(authenticateJWT,
    Schema.auth,
    controller.GetPost)
  .put(authenticateJWT, 
    validInputs(Schema.input.putPOST),
    Schema.auth,
    controller.UpdatePost)
  .delete(authenticateJWT, controller.DestroyPost);

module.exports = postRoutes;