module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("productMixes", {
        uuid: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        currency: {
            type: Sequelize.STRING
        },
        minValue: {
            type: Sequelize.FLOAT
        },
        contributionMargin: {
            type: Sequelize.FLOAT
        },
        discount: {
            type: Sequelize.FLOAT
        },
        startDate: {
            type: Sequelize.DATE
        },
        endDate: {
            type: Sequelize.DATE
        }

    });
    return Model;
};