const postRoutes = require('express').Router();
// const authenticateJWT = require('../middleware/authentication');

postRoutes.route('/')
  // .use(authenticateJWT)
  .get()
  .post();

postRoutes.route('/:id')
  // .use(authenticateJWT)
  .get()
  .put()
  .delete();

module.exports = postRoutes;