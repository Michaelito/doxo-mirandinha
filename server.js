const express = require("express");
const jwt = require('jsonwebtoken');

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
//     console.log("Drop and re-sync db.");
// });

const secretKey = '123456789'
const tokensBlacklist = ['123', '1234']

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    console.log(token)

    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido.' });
    }

    // if (tokensBlacklist.includes(token)) {
    //     return res.status(401).json({ message: 'Token inválido.' });
    // }

    // Verify token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Failed to authenticate token' });
        }
        req.user = decoded;
        next();
    });
};

const routesPrivate = (req, res, next) => {
    const token = req.headers['authorization'];

    console.log(token)

    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido.' });
    }

    if (tokensBlacklist.includes(token)) {
        return res.status(401).json({ message: 'Token inválido blacklist.' });
    }

    // Verify token
    if (token != secretKey) {
        return res.status(401).json({ error: 'teste' });
    }

    next();

};

// Login route
app.post('/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'user'
    };

    // Generate JWT token
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
    res.json({ token });
});

// simple route index || status
app.get("/jwt", (req, res) => {

    res.status(200).send({
        title: 'Welcome to API',
        version: '1.0.0',
    });
});


// Load Routes
require("./app/routes/api/v1/tutorial.routes")(app);
require("./app/routes/api/v1/group.routes",)(app);
require("./app/routes/api/v1/user.routes")(app);
require("./app/routes/api/v1/address_users.routes")(app);
require("./app/routes/api/v1/dataUser.routes")(app);
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