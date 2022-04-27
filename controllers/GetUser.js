const Service = require('../services');

const GetUserController = async (req, res, next) => {
  try {
    const gotUser = await Service.GetUser(req.params.id);
    if (gotUser.message) return res.status(gotUser.status).json({ message: gotUser.message });
    delete gotUser.dataValues.password;
    return res.status(200).json(gotUser);
  } catch (error) { 
    next(error);
  }
};

module.exports = GetUserController;