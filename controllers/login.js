const loginService = require('../services/login');
const tokenGenerator = require('../helpers/jtw');

const checkLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await loginService({
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