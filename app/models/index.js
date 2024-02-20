const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.grupos = require("./grupo.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.address_users = require("./address_users.model.js")(sequelize, Sequelize);
db.data_users = require("./data_user.model.js")(sequelize, Sequelize);
db.grupos = require("./group.model.js")(sequelize, Sequelize);
db.discount = require("./discount.model.js")(sequelize, Sequelize);
db.category = require("./category.model.js")(sequelize, Sequelize);
db.collection = require("./collection.model.js")(sequelize, Sequelize);
db.productMix = require("./productMix.model.js")(sequelize, Sequelize);
db.salesCampaign = require("./salesCampaign.model.js")(sequelize, Sequelize);
db.paymentCondition = require("./paymentCondition.model")(sequelize, Sequelize);

module.exports = db;