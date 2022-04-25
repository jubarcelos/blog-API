const Service = require('../services');
const tokenGenerator = require('../helpers/jwt');

const checkLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Service.login({
      email,
      password,
    });
    if (user.message) return res.status(user.status).json({ message: user.message });
    return res.status(200).json({ token: tokenGenerator(user) });
  } catch (error) { 
    next(error);
  }
};

module.exports = checkLogin;