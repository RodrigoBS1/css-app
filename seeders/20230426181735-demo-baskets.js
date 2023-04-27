// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Baskets', [
      { name: 'Vitality Boost', price: 10.00, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Energy Pack', price: 12.00, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Immunity Boost', price: 15.00, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mindful Munchies', price: 9.00, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Green Goodness', price: 14.00, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Baskets', null, {});
  },
};
