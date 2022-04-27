const CreateUser = require('../services/CreateUser');
const token = require('../helpers/jwt');

const CreateUserController = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await CreateUser({
      displayName,
      email,
      password,
      image,
    });
    if (user.message) return res.status(user.status).json({ message: user.message });
    return res.status(201).json({ token: token(user) });
  } catch (error) { 
    next(error);
  }
};

module.exports = CreateUserController;