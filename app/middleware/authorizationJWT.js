const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){ 

    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido.' });
    }

    if (tokensBlacklist.includes(token)) {
        return res.status(401).json({ message: 'Token inválido.' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido.' });
        }

        req.user = decoded;
        next();
    });

};