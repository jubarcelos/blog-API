const { Categories } = require('../models');

const listCategories = async () => {
  const listedCategories = await Categories.findAll();
  console.log(listedCategories);
  return listedCategories;
};

module.exports = listCategories;