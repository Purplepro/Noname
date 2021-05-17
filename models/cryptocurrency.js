'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cryptocurrency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cryptocurrency.init({
    Label: DataTypes.STRING,
    Name: DataTypes.STRING,
    Price: DataTypes.INTEGER,
    Volume_24h: DataTypes.INTEGER,
    Timestamp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cryptocurrency',
  });
  return Cryptocurrency;
};