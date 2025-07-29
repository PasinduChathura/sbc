('use strict');
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'PUSHDEVICE_OPERATION', // Table name
      'RETRYCOUNT ', // New column name
      {
        type: Sequelize.INTEGER, // Data type (adjust if necessary)
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('PUSHDEVICE_OPERATION', 'RETRYCOUNT ');
  },
};
