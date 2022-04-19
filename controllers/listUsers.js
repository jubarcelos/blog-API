const Service = require('../services');

const listUserController = async (req, res, next) => {
  try {
    const listUsers = await Service.listUsers();
    return res.status(200).json(listUsers);
  } catch (error) { 
    next(error);
  }
};

module.exports = listUserController;