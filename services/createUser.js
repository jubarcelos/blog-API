const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return { status: 409, message: 'User already registered' };
  }
  const createdUser = await User.create({
  displayName,
  email,
  password,
  image,
});

// reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
  delete createdUser.dataValues.password;
  return createdUser;
};

module.exports = createUser;