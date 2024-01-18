module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("promotionalDiscount", {
        uuid: {
            type: Sequelize.STRING
        },
        product: {
            type: Sequelize.STRING
        },
        startDate: {
            type: Sequelize.DATEONLY
        },
        endDate: {
            type: Sequelize.DATEONLY
        },
        maxDiscount: {
            type: Sequelize.FLOAT
        }

    });
    return Model;
};