const db = require("../models");
const Card = db.card;
const Op = db.Sequelize.Op;
const { uuid } = require('uuidv4');


// Retrieve all from the database.
exports.findAll = (req, res) => {
    const number = req.query.number;
    var condition = number ? {
        number: {
            [Op.like]: `%${number}%`
        }
    } : null;

    Card.findAll({ where: condition })
        .then(data => {
            res.send({
                status: true,
                message: "The request has succeeded",
                data: {
                    Card: data
                }
            }).status(200);
        })
        .catch(err => {
            res.send({
                status: false,
                message: "The request has not succeeded",
                data: null
            }).status(500);
        });
};

// Find a single Data with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Card.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Data with id=" + id
            });
        });
};

// Create and Save a new Data
exports.create = (req, res) => {

    // Create a Data
    const card = {
        uuid: uuid(),
        id: req.body.id,
        cardHolder: req.body.cardHolder,
        number: req.body.number,
        expirationDate: req.body.expirationDate,
        codeSecurity: req.body.codeSecurity
    };

    // Save Data in the database
    Card.create(card)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Data."
            });
        });
};

// Update a Data by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Card.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Data was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Data with id=" + id
            });
        });
};

// Delete a Data with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Card.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Data was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Data with id=${id}. Maybe Data was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Data with id=" + id
            });
        });
};
