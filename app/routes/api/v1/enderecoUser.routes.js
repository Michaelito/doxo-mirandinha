module.exports = app => {

    //controllers
    const controller = require("../../../controllers/enderecoUser.controller.js");

    var router = require("express").Router();

    // Retrieve all controller
    router.get("/", controller.findAll);

    // Retrieve a single data with id
    router.get("/:id", controller.findOne);

    // Create a new data
    router.post("/", controller.create);

    app.use('/api/v1/enderecoUsers', router);

};