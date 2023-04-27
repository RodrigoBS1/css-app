'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      Order.belongsToMany(models.Basket, {
        through: 'OrderBaskets',
        foreignKey: 'order_id',
      })
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    ordered_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};