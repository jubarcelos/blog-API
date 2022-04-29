const { BlogPost, User, Category } = require('../models');

const ListPosts = async () => {
  const listedPosts = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ] });
  return listedPosts;
};

module.exports = ListPosts;