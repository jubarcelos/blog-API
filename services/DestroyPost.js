const GetPost = require('./GetPost');
const { BlogPost } = require('../models');

const DestroyPost = async (postId, userId) => {
  const post = await GetPost(postId);

  if (post.userId !== userId) {
    return { status: 401, message: 'Unauthorized user' };
  }

  const deleted = await BlogPost.destroy({ where: { id: postId } });
  return deleted;
};

module.exports = DestroyPost;