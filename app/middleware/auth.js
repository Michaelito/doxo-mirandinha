require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const db = require("../models");
var blacklist = [];

function verifyJWT(req, res, next) {

    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    const index = blacklist.findIndex(item => item === token);
    if (index !== -1) return res.status(401).end();

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' })

        req.userId = decoded.id;
        next();
    });
}

async function login(req, res,) {

    var User = db.users;
    const user = await User.findOne({
        where: {
            login: req.body.login,
            password: req.body.password
        },
        raw: true,
        nest: true
    })

    if (user != null) {
        const id = user.id;
        console.log(id);
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min

        });
        return res.json({ auth: true, token: token });
    }
    res.status(500).json({ message: 'Login inválido!' });

}
function logout(req, res) {
    blacklist.push(req.headers['x-access-token']);
    console.log("lista" + blacklist);
    res.json({ auth: false, token: null, blacklist: blacklist });
}

module.exports = {
    verifyJWT,
    login,
    logout

};



