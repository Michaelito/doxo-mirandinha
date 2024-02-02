module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("discount", {
    uuid: {
      type: Sequelize.STRING
    },
    code: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    discount: {
      type: Sequelize.DECIMAL
    },
    status: {
      type: Sequelize.BOOLEAN
    },
    createduser_id: {
      type: Sequelize.INTEGER
    },
    updateduser_id: {
      type: Sequelize.INTEGER
    },
    deleteduser_id: {
      type: Sequelize.INTEGER
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    deletedAt: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
    }

  });

  return Model;
};
