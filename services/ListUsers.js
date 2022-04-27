const { User } = require('../models');

const ListUsers = async () => {
  const listedUsers = await User.findAll();
  return listedUsers;
};

module.exports = ListUsers;