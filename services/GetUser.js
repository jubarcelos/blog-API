const { User } = require('../models');

const GetUser = async (id) => {
  const gotUser = await User.findOne({ where: { id } });
  if (!gotUser) {
    return { status: 404, message: 'User does not exist' };
  }
  return gotUser;
};

module.exports = GetUser;