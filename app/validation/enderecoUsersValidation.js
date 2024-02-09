const Joi = require('joi');

module.exports = function (obj, next) {

    console.log(obj)

    // Definindo um esquema para o objeto
    const schema = Joi.object({
        cep: Joi.string().alphanum().min(3).max(30).required(),
        // Adicione mais campos e validações conforme necessário
    });

    // Validando o objeto
    const { error } = schema.validate(obj);

    // Verificando se há erro
    if (error) {
        console.error('Erro de validação:', error.details);
        return error.details;
    }

};