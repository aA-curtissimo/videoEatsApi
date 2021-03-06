'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TagInstances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Businesses',
          key: 'id'
        }
      },
      tagId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Tags',
          key: 'id'
        }
      },
      reviewId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Reviews',
          key: 'id'
        }
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TagInstances');
  }
};