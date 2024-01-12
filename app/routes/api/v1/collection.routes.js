module.exports = app => {

    //controllers
    const controller = require("../../../controllers/collection.controller.js");

    var router = require("express").Router();
    
    // Retrieve all controller
    router.get("/", controller.findAll);
    
    router.post("/", controller.create);

    app.use('/api/v1/collection', router);


};