const categoriesRoutes = require('express').Router();

// const { getAll, getById, create, update, remove } = require('../controllers/ProductsController');

categoriesRoutes.route('/')
  .get()
  .post();

categoriesRoutes.route('/:id')
  .get()
  .put()
  .delete();

module.exports = categoriesRoutes;