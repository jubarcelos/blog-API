module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostCategories', {
    categoryId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
  }, { 
    tableName: 'PostCategories',
    timestamps: false,
  });
  return PostsCategories;
};