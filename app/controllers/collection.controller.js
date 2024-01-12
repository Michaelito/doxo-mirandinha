const db = require("../models");
const Collection = db.collection;
const Op = db.Sequelize.Op;
const { uuid } = require('uuidv4');


// Retrieve all from the database.
exports.findAll = (req, res) => {
  
    const code = req.query.code;
    var condition = code ? {
        code: {
            [Op.like]: `%${code}%`
        }
    } : null;

    Collection.findAll({ where: condition })
        .then(data => {
            res.send({
                status: true,
                message: "The request has succeeded",
                data: {
                    collection: data
                }
            }).status(200);
        })
        .catch(err => {
            res.send({
                status: false,
                message: "The request has not succeeded",
                data: null,
            }).status(500);
        });
};

// Create and Save a new Data
exports.create = (req, res) => {
    // Validate request
    if (!req.body.code) {
        res.status(400).send({
            message: "Content Code can not be empty!"
        });
        return;
    }

    // Create a Data
    const obj = {
        uuid: uuid(),
        code: req.body.code,
        description: req.body.description
    };

    // Save Data in the database
    Collection.create(obj)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Data."
            });
        });
};


