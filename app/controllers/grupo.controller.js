const db = require("../models");
const Grupo = db.grupos;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial

// Retrieve all from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {
        name: {
            [Op.like]: `%${name}%`
        }
    } : null;

    Grupo.findAll({ where: condition })
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
