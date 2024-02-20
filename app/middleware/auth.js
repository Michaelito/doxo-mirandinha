const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){ 

    const token = req.headers['authorization'];
    const secretKey = '123456789';

    console.log(token)

    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido.' });
    }

    // if (tokensBlacklist.includes(token)) {
    //     return res.status(401).json({ message: 'Token inválido blacklist.' });
    // }

    // Verify token
    if (token != secretKey) {
        return res.status(401).json({ error: 'teste' });
    }
    
    next();

};