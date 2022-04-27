const createUser = require('../services/CreateUser');
const token = require('../helpers/jwt');

const createUserController = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await createUser({
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

module.exports = createUserController;