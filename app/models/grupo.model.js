module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("grupos", {
    uuid: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    },
  
    deletedAt: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
    },
  });

  return Model;
};
