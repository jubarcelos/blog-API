const { BlogPosts } = require('../models');

const listUsers = async () => {
  const listedPosts = await BlogPosts.findAll();
  return listedPosts;
};

module.exports = listUsers;