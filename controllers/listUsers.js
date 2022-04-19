const listUserService = require('../services/listUsers');

const listUserController = async (req, res, next) => {
  try {
    const listUsers = await listUserService();
    return res.status(200).json(listUsers);
  } catch (error) { 
    next(error);
  }
};

module.exports = listUserController;