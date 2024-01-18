module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("paymentCondition", {
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
        },
        idOrigin: {
            type: Sequelize.INTEGER
        }

    });
    return Model;
};