('use strict');
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'MERCHANTS', // Table name
      'MDRPERCENTAGE', // New column name
      {
        type: Sequelize.INTEGER, // Data type (adjust if necessary)
        defaultValue: 0, // Default value
        allowNull: false, // Ensuring it is not null
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('TRANSACTIONS', 'MDRPERCENTAGE');
  },
};
