const Services = require('../services');

const CreatePostController = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const post = await Services.CreatePost({
      title,
      userId: req.user.data.id,
      content,
      categoryIds,
    });
    if (post.message) return res.status(post.status).json({ message: post.message });
    return res.status(201).json(post);
  } catch (error) { 
    next(error);
  }
};

module.exports = CreatePostController;