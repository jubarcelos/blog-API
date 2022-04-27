const blogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: null },
  }, { 
    tableName: 'BlogPosts', timestamps: false,
  });

  BlogPost.associate = (models) => {
    models.BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
    models.BlogPost.hasMany(models.Category,
      { foreignKey: 'id', as: 'Categories' });
  };
  return BlogPost;
};

module.exports = blogPost;