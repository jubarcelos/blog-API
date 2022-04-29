const Service = require('../services');

const GetPostController = async (req, res, next) => {
  try {
    const gotPost = await Service.GetPost(req.params.id);
    if (gotPost.message) return res.status(gotPost.status).json({ message: gotPost.message });
    return res.status(200).json(gotPost);
  } catch (error) { 
    next(error);
  }
};

module.exports = GetPostController;