const userRoutes = require('express').Router();

// const { getAll, getById, create, update, remove } = require('../controllers/ProductsController');

userRoutes.route('/')
  .get()
  .post();

userRoutes.route('/:id')
  .get()
  .put()
  .delete();

module.exports = userRoutes;