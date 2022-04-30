const Service = require('../services');

const DestroyPostController = async (req, res, next) => {
  try {
    const post = await Service.GetPost(req.params.id);
    if (post.message) return res.status(post.status).json({ message: post.message });

    const deleted = await Service.DestroyPost(req.params.id, req.user.data.id);
    if (deleted.message) return res.status(deleted.status).json({ message: deleted.message });
    return res.status(204).end();
  } catch (error) { 
    next(error);
  }
};

module.exports = DestroyPostController;