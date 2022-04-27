const Service = require('../services');

const ListUsersController = async (req, res, next) => {
  try {
    const listUsers = await Service.ListUsers();
    return res.status(200).json(listUsers);
  } catch (error) { 
    next(error);
  }
};

module.exports = ListUsersController;