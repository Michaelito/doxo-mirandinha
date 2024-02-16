module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('Users', {
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
    // token: {
    //   type: Sequelize.STRING(150),
    // },
    // refresh_token: {
    //   type: Sequelize.STRING(150),
    // },
    profile: {
      type: Sequelize.STRING(50),
      comment: 'Admin: 1, B2B: 2, B2C: 3',
    },
    // date_last_login: {
    //   type: Sequelize.DATE,
    // },
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
    // created_userid: {
    //   type: Sequelize.INTEGER,
    // },
    // update_userid: {
    //   type: Sequelize.INTEGER,
    // },
    // deleted_userid: {
    //   type: Sequelize.INTEGER,
    // },
  });


  return Users;
};
