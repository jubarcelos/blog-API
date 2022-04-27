const categoriesRoutes = require('express').Router();
const Schema = require('../schemas'); 
const validInputs = require('../middleware/validInputs'); 
const controller = require('../controllers');
const authenticateJWT = require('../middleware/authentication');

categoriesRoutes.route('/')
.get(authenticateJWT,
  Schema.auth,
  controller.ListCategories)
.post(authenticateJWT, 
  validInputs(Schema.input.categoriesPOST),
  Schema.auth,
  controller.CreateCategory);

// categoriesRoutes.route('/:id')
//   .get()
//   .put()
//   .delete();

module.exports = categoriesRoutes;
//