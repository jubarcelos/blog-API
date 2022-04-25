const { Categories } = require('../models');

const listCategories = async () => {
  const listedCategories = await Categories.findAll();
  return listedCategories;
};

module.exports = listCategories;