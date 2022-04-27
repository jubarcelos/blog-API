const { BlogPost } = require('../models');
const getCategory = require('./GetCategory');

const createPost = async ({ title, userId, content, categoryIds }) => {
  const checkCategories = await Promise.all(categoryIds.map((id) => getCategory(id)));
  const haveInvalidCategory = checkCategories.some((item) => item.message);
  if (haveInvalidCategory) {
    return { status: 400, message: '"categoryIds" not found' };
  }
  
  const post = await BlogPost.findOne({ where: { title, content } });
  if (post) {
    return { status: 409, message: 'Post already registered' };
  }

  const newPost = await BlogPost.create({
    title,
    userId,
    content,
    categoryIds,
  });
  return newPost;
};

module.exports = createPost;