const db = require("../models");
const address_users = db.address_users;
const Op = db.Sequelize.Op;
const { uuid } = require('uuidv4');
const axios = require("axios");
const objValidation = require('../validation/address_users_validation');


// Create and Save a new Tutorial

// Retrieve all from the database.
exports.findAll = (req, res) => {
    const cep = req.query.cep;
    var condition = cep ? {
        cep: {
            [Op.like]: `%${cep}%`
        }
    } : null;

    address_users.findAll({ where: condition })
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

    address_users.findByPk(id)
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
exports.create = async (req, res) => {

    try {
        //Validate request
        const obj = objValidation(req.body);
        //res.send(obj);

        const cep = req.body.cep;
        const cepFormatted = cep.replace(/-/g, '');

        // Make HTTP GET request using Axios
        const response = await axios.get('https://viacep.com.br/ws/' + cepFormatted + '/json/');
        // Parse JSON response
        const jsonResponse = response.data;


        const payload = {
            uuid: uuid(),
            user_id: req.body.user_id,
            cep: req.body.cep,
            logradouro: jsonResponse.logradouro,
            numero: req.body.numero,
            bairro: jsonResponse.bairro,
            complemento: req.body?.complemento,
            cidade: jsonResponse.localidade,
            estado: jsonResponse.uf,
            pais: 'BR',
            ativo: req.body.ativo
        };

        // Save Tutorial in the database
        address_users.create(payload)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating data."
                });
                console.log(err);
            });

        // You can access specific elements of the parsed data like parsedData.elementName
    } catch (error) {
        console.log(error);
        console.error('Error:', error.message);
        res.status(500).send(error.message)
    }
};
exports.delete = async (req, res) => {

    const id = req.params.id;
    try {

        const num = await address_users.destroy({
            where: { id: id }
        })

        if (num == 1) {
            res.send({
                message: "Data was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Data with id=${id}. Maybe Data was not found!`
            });
        }

    } catch (err) {
        return res.status(500).send({
            message: "Could not delete Data with id=" + id
        });
    };
};

// Update User in database
exports.update = async (req, res) => {
    const id = req.params.id;

    try {

        const num = await address_users.update(req.body, {
            where: { id: id }
        });


        if (num == 1) {
            res.send({
                message: "Data was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Data with id=${id}. Maybe DataUser was not found or req.body is empty!`
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Error updating category with id=" + id
        });
    }
};

