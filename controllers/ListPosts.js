const Service = require('../services');

const ListPostsController = async (req, res, next) => {
  try {
    const posts = await Service.ListPosts();
    return res.status(200).json(posts);
  } catch (error) { 
    next(error);
  }
};

module.exports = ListPostsController;