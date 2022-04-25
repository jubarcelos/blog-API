const { Categories } = require('../models');

const createCategory = async ({ name }) => {
  const someCategory = await Categories.findOne({ where: { name } });
  if (someCategory) {
    return { status: 409, message: 'Category already registered' };
  }
  const category = await Categories.create({
  name,
});
  return category;
};

module.exports = createCategory;