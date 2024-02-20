const db = require("../models");
const users = db.users;
const datausers = db.data_users;
const address_users = db.address_users;
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

    users.hasOne(datausers, {
        foreignKey: 'user_id'
    });

    users.hasOne(address_users, {
        foreignKey: 'user_id'
    });

    users.findAll({
        where: condition,
        attributes: { exclude: ['password'] },
        include: [
            {
                model: datausers,
                required: false,
                attributes: ['fullName', 'cpf', 'rg', 'birthDate']
            },
            {
                model: address_users,
                required: false,
                attributes: ['cep', 'logradouro', 'numero', 'complemento', 'cidade', 'bairro', 'estado']
            }
        ]
    })
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
    users.hasMany(datausers, {
        foreignKey: 'id'
    });

    users.hasMany(address_users, {
        foreignKey: 'id'
    });
    const id = req.params.id;

    users.findByPk(id, {
        attributes: { exclude: ['password'] },
        include: [
            {
                model: datausers,
                required: false,
                attributes: ['fullName', 'cpf', 'rg', 'birthDate']
            },
            {
                model: address_users,
                required: false,
                attributes: ['cep', 'logradouro', 'numero', 'complemento', 'cidade', 'bairro', 'estado']
            }
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving data with id=" + id
            });
        });
};

// Create and Save a new User
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
    users.create(payload)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating data."
            });
        });
};
// Update User in database
exports.update = async (req, res) => {
    const id = req.params.id;

    try {

        const num = await users.update(req.body, {
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

exports.delete = async (req, res) => {

    const id = req.params.id;
    try {

        const num = await users.destroy({
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
