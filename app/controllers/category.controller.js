const db = require("../models");
const Category = db.category;
const Op = db.Sequelize.Op;

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
    const category = {
        code: req.body.code,
        name: req.body.name        
    };

    // Save Data in the database
    Category.create(category)
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

    Category.findAll({ where: condition })
        .then(data => {
            res.send({
                status: true,
                message: "The request has succeeded",
                data: {
                    category: data
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

    Category.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Data with id=" + id
            });
        });
};

// Update a Data by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Category.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Data was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Data with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Grupo with id=" + id
            });
        });
};

// Delete a Data with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Category.destroy({
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

// Delete all Datas from the database.
exports.deleteAll = (req, res) => {
    Category.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Data were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Datas."
            });
        });
};
