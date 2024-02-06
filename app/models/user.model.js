module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('Users', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        uuid: {
          type: Sequelize.STRING(36),
          allowNull: false,
        },
        login: {
          type: Sequelize.STRING(50),
        },
        password: {
          type: Sequelize.STRING(50),
        },
        profile: {
          type: Sequelize.STRING(50),
          comment: 'Admin: 1, B2B: 2, B2C: 3',
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: 1,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
        deletedAt: {
          type: Sequelize.DATE,
        },
        createduserId: {
          type: Sequelize.INTEGER,
        },
        updateuserId: {
          type: Sequelize.INTEGER,
        },
        deleteduserId: {
          type: Sequelize.INTEGER,
        },
      });
  
    return User;
  };
  