const { User } = require('../models');

const listUsers = async () => {
  const listedUsers = await User.findAll();
  return listedUsers;
};

module.exports = listUsers;