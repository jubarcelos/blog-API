// const CreateCategory = require('../services/CreateCategory');

// const CreateCategoryController = async (req, res, next) => {
//   try {
//     const { name } = req.body;
//     const category = await CreateCategory({
//       name,
//     });
//     if (category.message) return res.status(category.status).json({ message: category.message });
//     return res.status(201).json(category);
//   } catch (error) { 
//     next(error);
//   }
// };

// module.exports = CreateCategoryController;

// const Services = require('../services');

// const CreatePostController = async (req, res, next) => {
//   try {
//     const { title, content, categoryIds } = req.body;
//     const post = await Services.CreatePost({
//       title,
//       userId: req.user.data.id,
//       content,
//       categoryIds,
//     });
//     if (post.message) return res.status(post.status).json({ message: post.message });
//     return res.status(201).json(post);
//   } catch (error) { 
//     next(error);
//   }
// };

// module.exports = CreatePostController;

// const CreateUser = require('../services/CreateUser');
// const token = require('../helpers/jwt');

// const CreateUserController = async (req, res, next) => {
//   try {
//     const { displayName, email, password, image } = req.body;
//     const user = await CreateUser({
//       displayName,
//       email,
//       password,
//       image,
//     });
//     if (user.message) return res.status(user.status).json({ message: user.message });
//     return res.status(201).json({ token: token(user) });
//   } catch (error) { 
//     next(error);
//   }
// };

// module.exports = CreateUserController;

// const Service = require('../services');

// const GetUserController = async (req, res, next) => {
//   try {
//     const gotUser = await Service.GetUser(req.params.id);
//     if (gotUser.message) return res.status(gotUser.status).json({ message: gotUser.message });
//     delete gotUser.dataValues.password;
//     return res.status(200).json(gotUser);
//   } catch (error) { 
//     next(error);
//   }
// };

// module.exports = GetUserController;

// const Service = require('../services');

// const ListCategoriesController = async (req, res, next) => {
//   try {
//     const categories = await Service.ListCategories();
//     return res.status(200).json(categories);
//   } catch (error) { 
//     next(error);
//   }
// };

// module.exports = ListCategoriesController;

// const Service = require('../services');

// const ListPostsController = async (req, res, next) => {
//   try {
//     const posts = await Service.ListPosts();
//     return res.status(200).json(posts);
//   } catch (error) { 
//     next(error);
//   }
// };

// module.exports = ListPostsController;

// const Service = require('../services');

// const ListUsersController = async (req, res, next) => {
//   try {
//     const listUsers = await Service.ListUsers();
//     return res.status(200).json(listUsers);
//   } catch (error) { 
//     next(error);
//   }
// };

// module.exports = ListUsersController;

// const Service = require('../services');
// const tokenGenerator = require('../helpers/jwt');

// const CheckLogin = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const user = await Service.Login({
//       email,
//       password,
//     });
//     if (user.message) return res.status(user.status).json({ message: user.message });
//     return res.status(200).json({ token: tokenGenerator(user) });
//   } catch (error) { 
//     next(error);
//   }
// };

// module.exports = CheckLogin;