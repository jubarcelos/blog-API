module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostCategory', {}, { 
    tableName: 'PostsCategories', timestamps: false,
  });
  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostsCategory;
};