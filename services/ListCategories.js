const { Category } = require('../models');

const ListCategories = async () => {
  const listedCategories = await Category.findAll();
  return listedCategories;
};

module.exports = ListCategories;