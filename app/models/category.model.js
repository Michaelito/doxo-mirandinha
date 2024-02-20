module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("categorys", {
    uuid: {
      type: Sequelize.STRING
    },
    code: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    }
   
  });

  return Model;
};
