const GetPost = require('./GetPost');
const { BlogPost } = require('../models');

const UpdatePost = async ({ title, content }, idPost, userId) => {
  const post = await GetPost(idPost);
  if (!post) {
    return { status: 404, message: 'Post does not exist' };
  }
  if (post.userId !== userId) {
    return { status: 401, message: 'Unauthorized user' };
  }
  await BlogPost.update({ title, content },
    { where: { id: idPost } });

  const updated = await GetPost(idPost);
    return updated;
};

module.exports = UpdatePost;