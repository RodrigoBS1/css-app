'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderBaskets', [
      { order_Id: 1, basket_Id: 1 },
      { order_Id: 2, basket_Id: 2 },
      { order_Id: 3, basket_Id: 3 },
      { order_Id: 4, basket_Id: 4 },
      { order_Id: 5, basket_Id: 5 },
      { order_Id: 6, basket_Id: 1 },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderBaskets', null, {});
  }
};