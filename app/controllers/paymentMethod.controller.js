const db = require("../models");
const Op = db.Sequelize.Op;
const PaymentMethod = db.paymentMethod;
const Card = db.card;
const { uuid } = require('uuidv4');


exports.create = async (req, res) => {

    try {
        const { cardId, method, description } = req.body;

        const card = await Card.findByPk(cardId);
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }

        const paymentMethod = await PaymentMethod.create({ method, description, cardId });
        res.status(201).json(paymentMethod);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findOne = async () => {
    try {
        const paymentMethod = await PaymentMethod.findByPk(req.params.id, { include: 'card' });
        if (!paymentMethod) {
            return res.status(404).json({ error: 'PaymentMethod not found' });
        }
        res.status(200).json(paymentMethod);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async () => {
    try {
        const paymentMethod = await PaymentMethod.findByPk(req.params.id, { include: 'card' });
        if (!paymentMethod) {
            return res.status(404).json({ error: 'PaymentMethod not found' });
        }
        res.status(200).json(paymentMethod);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async () => {
    try {
        const paymentMethods = await PaymentMethod.findAll();
        res.status(200).json(paymentMethods);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.delete = async () => {
    try {
        const paymentMethod = await PaymentMethod.findByPk(req.params.id);
        if (!paymentMethod) {
            return res.status(404).json({ error: 'PaymentMethod not found' });
        }
        await paymentMethod.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




