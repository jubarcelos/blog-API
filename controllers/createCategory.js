const CreateCategory = require('../services/CreateCategory');

const CreateCategoryController = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await CreateCategory({
      name,
    });
    if (category.message) return res.status(category.status).json({ message: category.message });
    return res.status(201).json(category);
  } catch (error) { 
    next(error);
  }
};

module.exports = CreateCategoryController;