// const { Category } = require('../models');

// const createCategory = async ({ name }) => {
//   const someCategory = await Category.findOne({ where: { name } });
//   if (someCategory) {
//     return { status: 409, message: 'Category already registered' };
//   }
//   const category = await Category.create({
//   name,
// });
//   return category;
// };

// module.exports = createCategory;

// const { BlogPost } = require('../models');
// const getCategory = require('./GetCategory');

// const createPost = async ({ title, userId, content, categoryIds }) => {
//   const checkCategories = await Promise.all(categoryIds.map((id) => getCategory(id)));
//   const haveInvalidCategory = checkCategories.some((item) => item.message);
//   if (haveInvalidCategory) {
//     return { status: 400, message: '"categoryIds" not found' };
//   }
  
//   const post = await BlogPost.findOne({ where: { title, content } });
//   if (post) {
//     return { status: 409, message: 'Post already registered' };
//   }

//   const newPost = await BlogPost.create({
//     title,
//     userId,
//     content,
//     categoryIds,
//   });
//   return newPost;
// };

// module.exports = createPost;

// const { User } = require('../models');

// const createUser = async ({ displayName, email, password, image }) => {
//   const user = await User.findOne({ where: { email } });
//   if (user) {
//     return { status: 409, message: 'User already registered' };
//   }
//   const createdUser = await User.create({
//   displayName,
//   email,
//   password,
//   image,
// });

// // reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
//   delete createdUser.dataValues.password;
//   return createdUser;
// };

// module.exports = createUser;

// const { Category } = require('../models');

// const getCategory = async (id) => {
//   const gotCategory = await Category.findOne({ where: { id } });
//   if (!gotCategory) {
//     return { status: 404, message: 'Category does not exist' };
//   }
//   return gotCategory;
// };

// module.exports = getCategory;

// const { User } = require('../models');

// const getUser = async (id) => {
//   const gotUser = await User.findOne({ where: { id } });
//   if (!gotUser) {
//     return { status: 404, message: 'User does not exist' };
//   }
//   return gotUser;
// };

// module.exports = getUser;

// const { Category } = require('../models');

// const listCategories = async () => {
//   const listedCategories = await Category.findAll();
//   return listedCategories;
// };

// module.exports = listCategories;

// const { BlogPost, User, Category } = require('../models');

// const listPosts = async () => {
//   const listedPosts = await BlogPost.findAll({ 
//     include: [
//       { model: User, as: 'user', attributes: { exclude: ['password'] } },
//       { model: Category, as: 'categories' },
//     ] });
//   return listedPosts;
// };

// module.exports = listPosts;

// const { User } = require('../models');

// const listUsers = async () => {
//   const listedUsers = await User.findAll();
//   return listedUsers;
// };

// module.exports = listUsers;

// const { User } = require('../models');

// const login = async ({ email, password }) => {
//   const user = await User.findOne({ where: { email, password } });
//   if (!user) {
//     return { status: 400, message: 'Invalid fields' };
//   }
//   delete user.dataValues.password;
//   return user;
// };

// // reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
 
// module.exports = login;