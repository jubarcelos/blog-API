const { User } = require('../models');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  console.log(user);
  if (!user) {
    return { status: 400, message: 'Invalid fields' };
  }
  delete user.dataValues.password;
  return user;
};

// reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
 
module.exports = login;