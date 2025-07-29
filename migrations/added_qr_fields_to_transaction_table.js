('use strict');
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'TRANSACTIONS', // Table name
      'TRANREF', // New column name
      {
        type: Sequelize.STRING(100), // Data type (adjust if necessary)
      }
    );

    await queryInterface.addColumn(
      'TRANSACTIONS', // Table name
      'TRANORG', // New column name
      {
        type: Sequelize.STRING(100), // Data type (adjust if necessary)
      }
    );

    await queryInterface.addColumn(
      'TRANSACTIONS', // Table name
      'CARDHOLDER', // New column name
      {
        type: Sequelize.STRING(100),
      }
    );

    await queryInterface.addColumn(
      'TRANSACTIONS', // Table name
      'MCC', // New column name
      {
        type: Sequelize.STRING(50),
      }
    );

    await queryInterface.addColumn(
      'TRANSACTIONS', // Table name
      'QRTYPE', // New column name
      {
        type: Sequelize.STRING(30),
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('TRANSACTIONS', 'TRANREF');
    await queryInterface.removeColumn('TRANSACTIONS', 'TRANORG');
    await queryInterface.removeColumn('TRANSACTIONS', 'CARDHOLDER');
    await queryInterface.removeColumn('TRANSACTIONS', 'MCC');
    await queryInterface.removeColumn('TRANSACTIONS', 'QRTYPE');
  },
};
