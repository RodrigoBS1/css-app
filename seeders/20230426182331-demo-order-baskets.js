// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     await queryInterface.bulkInsert('OrderBaskets', [
//       { orderId: 1, basketId: 1 },
//       { orderId: 2, basketId: 2 },
//       { orderId: 3, basketId: 3 },
//       { orderId: 4, basketId: 4 },
//       { orderId: 5, basketId: 5 },
//       { orderId: 6, basketId: 1 },
//     ]);
//   },

//   async down (queryInterface, Sequelize) {
//     await queryInterface.bulkDelete('OrderBaskets', null, {});
//   }
// };

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('OrderBaskets', [
      { order_id: 1, basket_id: 1 },
      { order_id: 2, basket_id: 2 },
      { order_id: 3, basket_id: 3 },
      { order_id: 4, basket_id: 4 },
      { order_id: 5, basket_id: 5 },
      { order_id: 6, basket_id: 1 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderBaskets', null, {});
  },
};