module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("collections", {
      uuid: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.INTEGER
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
  