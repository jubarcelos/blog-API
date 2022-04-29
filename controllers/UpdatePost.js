const Services = require('../services');

const UpdatePostController = async (req, res, next) => {
  try {
    const post = await Services.UpdatePost(req.body, req.params.id, req.user.data.id);
    if (post.message) return res.status(post.status).json({ message: post.message });
    return res.status(200).json(post);
  } catch (error) { 
    next(error);
  }
};

module.exports = UpdatePostController;