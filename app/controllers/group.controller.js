const db = require("../models");
const Group = db.grupos;
const Op = db.Sequelize.Op;
const { uuid } = require('uuidv4');

// Create and Save a new Group
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Data
    const group = {
        uuid: uuid(),
        name: req.body.name,
        description: req.body.description
    };

    // Save Data in the database
    Group.create(group)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Data."
            });
        });
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {
        name: {
            [Op.like]: `%${name}%`
        }
    } : null;

    Group.findAll({ where: condition })
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

// Find a single Group with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Group.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Group with id=" + id
            });
        });
};

// Update a Group by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Group.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Group was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Group with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Grupo with id=" + id
            });
        });
};

// Delete a Group with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Group.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Group was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Group with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Group with id=" + id
            });
        });
};

// Delete all Groups from the database.
exports.deleteAll = (req, res) => {
    Group.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Groups were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all groups."
            });
        });
};
