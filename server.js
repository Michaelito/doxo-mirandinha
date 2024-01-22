const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http');
const debug = require('debug')('nodestr:server');


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//request methods
// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader("Content-Type", "application/json");
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     next();
// });



// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Load Routes
require("./app/routes/api/v1/tutorial.routes")(app);
require("./app/routes/api/v1/group.routes")(app);
require("./app/routes/api/v1/discount.routes")(app);
require("./app/routes/api/v1/category.routes")(app);
require("./app/routes/api/v1/collection.routes")(app);
require("./app/routes/api/v1/productMix.routes")(app);
require("./app/routes/api/v1/salesCampaign.routes")(app);
require("./app/routes/api/v1/paymentCondition.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// simple route index || status
app.get(["/", "/status"], (req, res) => {

    res.status(200).send({
        title: 'Welcome to API',
        version: '1.0.0',
    });
});