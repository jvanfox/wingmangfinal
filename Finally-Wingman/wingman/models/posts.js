module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fkPostUserID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgLink: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Post;
};
