// paymentMethod.model.js

module.exports = (sequelize, Sequelize) => {
    const paymentMethod = sequelize.define('paymentMethod', {
        uuid: {
            type: Sequelize.STRING
        },
        method: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
        },
        cardId: {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
                model: 'cards',
                key: 'id'
            }

        },

    });
    return paymentMethod;
};
