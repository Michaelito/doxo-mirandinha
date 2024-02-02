module.exports = app => {

    //controllers
    const controller = require("../../../controllers/discount.controller.js");

    var router = require("express").Router();

    // Retrieve all controller
    router.get("/", controller.findAll);

    // Retrieve a single Data with id
    router.get("/:id", controller.findOne);

    // Create
    router.post("/", controller.create);

    // Update a Data with id
    router.put("/:id", controller.update);

    // Delete a Data with id
    router.delete("/:id", controller.delete);

    app.use('/api/v1/discount', router);


};