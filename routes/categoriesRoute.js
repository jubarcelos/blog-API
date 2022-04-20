const categoriesRoutes = require('express').Router();
const authenticateJWT = require('../middleware/authentication');

categoriesRoutes.route('/')
  .use(authenticateJWT)
  .get()
  .post();

categoriesRoutes.route('/:id')
  .use(authenticateJWT)
  .get()
  .put()
  .delete();

module.exports = categoriesRoutes;