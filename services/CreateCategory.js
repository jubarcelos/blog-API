const { Category } = require('../models');

const CreateCategory = async ({ name }) => {
  const someCategory = await Category.findOne({ where: { name } });
  if (someCategory) {
    return { status: 409, message: 'Category already registered' };
  }
  const category = await Category.create({
  name,
});
  return category;
};

module.exports = CreateCategory;