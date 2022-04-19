const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { 
    tableName: 'Users',
    timestamps: false,
  });

  // User.associate = (models) => {
  //   User.hasMany(models.Profile, 
  //     { 
  //       foreignKey: 'userId',
  //       as: 'blogPosts',
  //     });
  //   };

    return User;
  };

module.exports = user;