const db = require("../models");
const EnderecoUsers = db.enderecoUsers;
const Op = db.Sequelize.Op;
const { uuid } = require('uuidv4');
const axios = require('axios');
const objValidation = require('../validation/enderecoUsersValidation');


// Create and Save a new Tutorial

// Retrieve all from the database.
exports.findAll = (req, res) => {
    const cep = req.query.cep;
    var condition = cep ? {
        cep: {
            [Op.like]: `%${cep}%`
        }
    } : null;

    EnderecoUsers.findAll({ where: condition })
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

    EnderecoUsers.findByPk(id)
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
            user_id: 1,
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
        EnderecoUsers.create(payload)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating data."
                });
            });

        // You can access specific elements of the parsed data like parsedData.elementName
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send(error.message)
    }
};
