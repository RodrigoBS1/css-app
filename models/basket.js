'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate(models) {
      Basket.belongsToMany(models.Item, {
        through: 'BasketItems',
        foreignKey: 'basket_Id',
      });
    }
  }
  Basket.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};