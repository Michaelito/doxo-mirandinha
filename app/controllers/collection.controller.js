const { where } = require("sequelize");
const db = require("../models");
const Collection = db.collection;
const Op = db.Sequelize.Op;
const { uuid } = require('uuidv4');


// Retrieve all from the database.
exports.findAll = async (req, res) => {
  try {
    const code = req.query.code;
    var condition = code ? {
      code: {
        [Op.like]: `%${code}%`
      }
    } : null;

    const data = await Collection.findAll({ where: condition })

    return res.send({
      status: true,
      message: "The request has succeeded",
      data: {
        collection: data
      }
    }).status(200);
  } catch (err) {
    res.send({
      status: false,
      message: "The request has not succeeded",
      data: null,
    }).status(500);
  };
};

// Find a single Data with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Collection.findByPk(id);
    return res.send(data);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Data with id=" + id
    });
  };
};

// Create and Save a new Data
exports.create = async (req, res) => {
  try {
    // Validate request
    if (!req.body.code) {
      return res.status(400).send({
        message: "Content Code can not be empty!"
      });
    }

    // Create a Data
    const obj = {
      uuid: uuid(),
      code: req.body.code,
      description: req.body.description
    };

    // Save Data in the database
    const data = await Collection.create(obj);

    return res.send(data);
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the Data."
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    const num = await Collection.update(req.body, {
      where: { id: id }
    });

    if (num == 1) {
      res.send({
        message: "Data was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Data with id=${id}. Maybe Coollection was not found or req.body is empty!`
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Error updating category with id=" + id
    });
  }
};
// Delete a Data with the specified id in the request
exports.delete = async (req, res) => {

  const id = req.params.id;
  try {

    const num = await Collection.destroy({
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

// Delete all Datas from the database.
exports.deleteAll = async (req, res) => {
  try {
    await Collection.destroy({
      where: {},
      truncate: false
    })

    return res.send({ message: `${nums} Data were deleted successfully!` });

  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all Datas."
    });
  };
};