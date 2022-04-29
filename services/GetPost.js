const { BlogPost, User, Category } = require('../models');

const GetPost = async (id) => {
  const gotPost = await BlogPost.findOne({ where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ] });
  if (!gotPost) {
    return { status: 404, message: 'Post does not exist' };
  }
  return gotPost;
};

module.exports = GetPost;