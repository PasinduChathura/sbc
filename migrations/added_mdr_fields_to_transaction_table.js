('use strict');
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'TRANSACTIONS', // Table name
      'MDRRATE', // New column name
      {
        type: Sequelize.INTEGER, // Data type (adjust if necessary)
        defaultValue: 0, // Default value
        allowNull: false, // Ensuring it is not null
      }
    );

    await queryInterface.addColumn(
      'TRANSACTIONS', // Table name
      'MDRAMOUNT', // New column name
      {
        type: Sequelize.INTEGER, // Data type (adjust if necessary)
        defaultValue: 0, // Default value
        allowNull: false, // Ensuring it is not null
      }
    );

    await queryInterface.addColumn(
      'TRANSACTIONS', // Table name
      'ACTUALAMOUNT', // New column name
      {
        type: Sequelize.INTEGER, // Data type (adjust if necessary)
        defaultValue: 0, // Default value
        allowNull: false, // Ensuring it is not null
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('TRANSACTIONS', 'MDRRATE');
    await queryInterface.removeColumn('TRANSACTIONS', 'MDRAMOUNT');
    await queryInterface.removeColumn('TRANSACTIONS', 'ACTUALAMOUNT');
  },
};
