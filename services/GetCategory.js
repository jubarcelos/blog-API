const { Category } = require('../models');

const GetCategory = async (id) => {
  const gotCategory = await Category.findOne({ where: { id } });
  if (!gotCategory) {
    return { status: 404, message: 'Category does not exist' };
  }
  return gotCategory;
};

module.exports = GetCategory;