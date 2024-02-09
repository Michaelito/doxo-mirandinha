module.exports = (sequelize, Sequelize) => {
    const DataUser = sequelize.define('DataUsers', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        uuid: {
            type: Sequelize.STRING(36),
            allowNull: false,
        },
        fullName: {
            type: Sequelize.STRING(50),
        },
        cpf: {
            type: Sequelize.STRING(50),
        },
        rg: {
            type: Sequelize.STRING(50),
        },
        birthDate: {
            type: Sequelize.DATEONLY,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: Sequelize.DATE,
        },
        deletedAt: {
            type: Sequelize.DATE,
        },

    });
    DataUser.associate = (models) => {
        DataUser.belongsTo(models.User,
            { foreignKey: 'user_id', as: 'dataUsers' });
    };

    return DataUser;
};
