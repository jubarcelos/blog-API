const Service = require('../services');

const ListCategoriesController = async (req, res, next) => {
  try {
    const categories = await Service.ListCategories();
    return res.status(200).json(categories);
  } catch (error) { 
    next(error);
  }
};

module.exports = ListCategoriesController;