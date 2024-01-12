module.exports = app => {

    //controllers
    const controller = require("../../../controllers/grupo.controller.js");

    var router = require("express").Router();

    // // Create a new Grupos
    router.post("/", controller.create);

    // Retrieve all controller
    router.get("/", controller.findAll);

     // Retrieve a single Grupo with id
     router.get("/:id", controller.findOne);

     // Update a Grupo with id
    router.put("/:id", controller.update);

     // Delete a Grupo with id
     router.delete("/:id", controller.delete);

      // Delete all controller
    router.delete("/", controller.deleteAll);

    app.use('/api/v1/grupo', router);


};