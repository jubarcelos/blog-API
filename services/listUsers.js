const { User } = require('../models');

const listUser = async () => {
  const listedUsers = await User.findAll();
  return listedUsers;
};

module.exports = listUser;