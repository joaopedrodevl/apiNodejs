const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'John Doe',
        email: 'a@ab.com',
        password_hash: await bcrypt.hash('12345678910', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe2',
        email: 'a@ba.com',
        password_hash: await bcrypt.hash('12345678910', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe3',
        email: 'a@acc.com',
        password_hash: await bcrypt.hash('12345678910', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {},
};
