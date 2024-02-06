const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const { uuid } = require('uuidv4');


// Create and Save a new Tutorial

// Retrieve all from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {
        name: {
            [Op.like]: `%${name}%`
        }
    } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send({
                status: true,
                message: "The request has succeeded",
                data: {
                    users: data
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

// Find a single data with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving data with id=" + id
            });
        });
};

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.login) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const crypto = require('crypto');

    // Create an MD5 hash object
    const md5Hash = crypto.createHash('md5');

    // Update the hash object with the password
    md5Hash.update(req.body.password);

    // Get the hexadecimal representation of the hash
    const password_md5 = md5Hash.digest('hex');

    const payload = {
        uuid: uuid(),
        login: req.body.login,
        password: req.body.password ? password_md5 : '25d55ad283aa400af464c76d713c07ad',
        profile: req.body.profile
    };

    // Save Tutorial in the database
    User.create(payload)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating data."
            });
        });
};
