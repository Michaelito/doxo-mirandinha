const db = require("../models");
const Discount = db.discount;
const Op = db.Sequelize.Op;
const { uuid } = require('uuidv4');


// Retrieve all from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {
        name: {
            [Op.like]: `%${name}%`
        }
    } : null;

    Discount.findAll({ where: condition })
        .then(data => {
            res.send({
                status: true,
                message: "The request has succeeded",
                data: {
                    grupo: data
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

    Discount.findByPk(id)
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
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Data
    const discount = {
        uuid: uuid(),
        code: req.body.coce,
        name: req.body.name,        
        discount: req.body.discount,        
        category_id: req.body.category_id        
    };

    // Save Data in the database
    Discount.create(discount)
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

    Discount.update(req.body, {
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

    Discount.destroy({
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
