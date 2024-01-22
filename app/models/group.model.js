module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("groups", {
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
    }
  });

  return Model;
};
