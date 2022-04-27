const { Category } = require('../models');

const listCategories = async () => {
  const listedCategories = await Category.findAll();
  return listedCategories;
};

module.exports = listCategories;