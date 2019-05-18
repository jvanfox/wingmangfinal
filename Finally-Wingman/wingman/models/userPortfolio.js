module.exports = function(sequelize, DataTypes) {
  var UserPortfolio = sequelize.define("UserPortfolio", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companion: {
      type: DataTypes.STRING
    }
  });

  return UserPortfolio;
};
