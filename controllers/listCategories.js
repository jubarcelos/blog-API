const Service = require('../services');

const listCategoriesController = async (req, res, next) => {
  try {
    const categories = await Service.listCategories();
    return res.status(200).json(categories);
  } catch (error) { 
    next(error);
  }
};

module.exports = listCategoriesController;