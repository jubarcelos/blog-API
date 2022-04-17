const postRoutes = require('express').Router();

// const { getAll, getById, create, update, remove } = require('../controllers/ProductsController');

postRoutes.route('/')
  .get()
  .post();

postRoutes.route('/:id')
  .get()
  .put()
  .delete();

module.exports = postRoutes;