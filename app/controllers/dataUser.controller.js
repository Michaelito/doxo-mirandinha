const { where } = require("sequelize");
const db = require("../models");
const DataUser = db.dataUser;
const Op = db.Sequelize.Op;
const { uuid } = require('uuidv4');
const dataUserModel = require("../models/dataUser.model");

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.fullName) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const dataUser = {
        uuid: uuid(),
        fullName: req.body.fullName,
        cpf: req.body.cpf,
        rg: req.body.rg,
        birthDate: req.body.birthDate,
    }

    // Save Tutorial in the database
    DataUser.create(dataUser)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};