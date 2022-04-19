const blogPost = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { 
    tableName: 'BlogPosts',
    timestamps: false,
  });

  // BlogPosts.associate = (models) => {
  //   models.BlogPosts.belongsTo(models.User,
  //     { 
  //       foreignKey: 'userId',
  //       as: 'users',
  //     });
  // };
  return BlogPosts;
};

module.exports = blogPost;