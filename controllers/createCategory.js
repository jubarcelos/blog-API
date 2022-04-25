const createCategory = require('../services/createCategory');

const createCategoryController = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await createCategory({
      name,
    });
    if (category.message) return res.status(category.status).json({ message: category.message });
    return res.status(201).json(category);
  } catch (error) { 
    next(error);
  }
};

module.exports = createCategoryController;