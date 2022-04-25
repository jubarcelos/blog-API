const Service = require('../services');

const listPostsController = async (req, res, next) => {
  try {
    const posts = await Service.listPosts();
    return res.status(200).json(posts);
  } catch (error) { 
    next(error);
  }
};

module.exports = listPostsController;