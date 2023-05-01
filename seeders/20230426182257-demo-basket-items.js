'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BasketItems', [
      { basket_Id: 1, item_Id: 1 },
      { basket_Id: 1, item_Id: 2 },
      { basket_Id: 1, item_Id: 3 },
      { basket_Id: 2, item_Id: 4 },
      { basket_Id: 2, item_Id: 5 },
      { basket_Id: 2, item_Id: 6 },
      { basket_Id: 3, item_Id: 7 },
      { basket_Id: 3, item_Id: 8 },
      { basket_Id: 3, item_Id: 9 },
      { basket_Id: 4, item_Id: 10 },
      { basket_Id: 4, item_Id: 11 },
      { basket_Id: 4, item_Id: 12 },
      { basket_Id: 5, item_Id: 13 },
      { basket_Id: 5, item_Id: 14 },
      { basket_Id: 5, item_Id: 15 },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};