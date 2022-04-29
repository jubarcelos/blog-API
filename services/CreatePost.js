const { BlogPost, PostCategory } = require('../models');
const GetCategory = require('./GetCategory');

const CreatePost = async ({ title, userId, content, categoryIds }) => {
  const checkCategories = await Promise.all(categoryIds.map((id) => GetCategory(id)));
  const haveInvalidCategory = checkCategories.some((item) => item.message);
  if (haveInvalidCategory) {
    return { status: 400, message: '"categoryIds" not found' };
  }
  
  const post = await BlogPost.findOne({ where: { title, content } });
  if (post) {
    return { status: 409, message: 'Post already registered' };
  }

  const newPost = await BlogPost.create({ title, userId, content, categoryIds });
  await Promise.all(categoryIds.map((id) => PostCategory.create({
    postId: newPost.dataValues.id, categoryId: id,
  })));

  return newPost;
};

module.exports = CreatePost;