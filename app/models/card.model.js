// card.model.js

module.exports = (sequelize, Sequelize) => {
    const card = sequelize.define('card', {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            //autoIncrement: true,
        },
        uuid: {
            type: Sequelize.STRING,
        },
        cardHolder: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        number: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        expirationDate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        codeSecurity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });

    card.associate = (models) => {
        card.hasMany(models.PaymentMethod, { foreignKey: 'cardId', as: 'paymentMethods' });
    };

    return card;
};
