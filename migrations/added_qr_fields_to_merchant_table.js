('use strict');
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'MERCHANTS', // Table name
      'QRPAN', // New column name
      {
        type: Sequelize.STRING(30), // Data type (adjust if necessary)
      }
    );

    await queryInterface.addColumn(
      'MERCHANTS', // Table name
      'ISQR', // New column name
      {
        type: Sequelize.BOOLEAN, // Data type (adjust if necessary)
        defaultValue: false, // Default value
        allowNull: false, // Ensuring it is not null
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('TRANSACTIONS', 'QRPAN');
    await queryInterface.removeColumn('TRANSACTIONS', 'ISQR');
  },
};
