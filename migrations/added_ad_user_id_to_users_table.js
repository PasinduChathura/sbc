('use strict');
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'USERS', // Table name
      'ADUSERID', // New column name
      {
        type: Sequelize.Sequelize.STRING(10), // Data type (adjust if necessary)
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('USERS', 'ADUSERID');
  },
};
