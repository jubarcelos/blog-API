const { Categories } = require('../models');

const getCategory = async (id) => {
  const gotCategory = await Categories.findOne({ where: { id } });
  if (!gotCategory) {
    return { status: 404, message: 'Category does not exist' };
  }
  return gotCategory;
};

module.exports = getCategory;