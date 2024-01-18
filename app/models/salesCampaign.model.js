module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("salesCampaign", {
        uuid: {
            type: Sequelize.STRING
        },
        code: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        },
        startDate: {
            type: Sequelize.DATEONLY
        },
        endDate: {
            type: Sequelize.DATEONLY
        }

    });
    return Model;
};