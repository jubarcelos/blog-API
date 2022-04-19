const { User } = require('../models');

const createUser = async () => {
  const createdUser = await User.findAll();
  return createdUser;
};

module.exports = createUser;