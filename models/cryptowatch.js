'use strict';
const {
  Model
} = require('sequelize');
const db = require('.');
module.exports = (sequelize, DataTypes) => {
  class CryptoWatch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  CryptoWatch.init({
      currency: DataTypes.STRING,
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      status: DataTypes.STRING,
      price: DataTypes.INTEGER,
      price_date: DataTypes.INTEGER,
      price_timestamp: DataTypes.STRING,
      symbol: DataTypes.STRING,
      circulating_supply: DataTypes.INTEGER,
      max_supply: DataTypes.INTEGER,
      name: DataTypes.STRING,
      logo_url: '',
      market_cap: DataTypes.INTEGER,
      market_cap_dominance: DataTypes.INTEGER,
      transparent_market_cap: DataTypes.INTEGER,
      num_exchanges: DataTypes.INTEGER,
      num_pairs: DataTypes.INTEGER,
      num_pairs_unmapped: DataTypes.INTEGER,
      first_candle: DataTypes.STRING,
      first_trade: DataTypes.STRING,
      first_order_book: DataTypes.STRING,
      first_priced_at: DataTypes.STRING,
      rank: DataTypes.INTEGER,
      rank_delta: DataTypes.INTEGER,
      high: DataTypes.INTEGER,
      high_timestamp: DataTypes.INTEGER,
      // 1d: {}
  }, {
    sequelize,
    modelName: 'CryptoWatch',
  });
  return CryptoWatch;
};