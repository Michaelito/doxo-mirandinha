
require("dotenv-safe").config();

module.exports = app => {
    const auth = require('../../../middleware/auth.js');

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/login", auth.login);
    router.post("/logout", auth.logout);


    app.use('/api/v1/auth', router);


};