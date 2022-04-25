const categoriesRoutes = require('express').Router();
const Schema = require('../schemas'); 
const validInputs = require('../middleware/validInputs'); 
const controller = require('../controllers');
const authenticateJWT = require('../middleware/authentication');

categoriesRoutes.route('/')
.get(authenticateJWT, 
  validInputs(Schema.input.categoriesGET),
  Schema.auth,
  controller.listCategories)
.post(authenticateJWT, 
  validInputs(Schema.input.categoriesPOST),
  Schema.auth,
  controller.createCategory);

// categoriesRoutes.route('/:id')
//   .get()
//   .put()
//   .delete();

module.exports = categoriesRoutes;