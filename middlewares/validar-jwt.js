const { request, response } = require("express");
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(400).json({
            msg: 'El token es requerido - usuario debe ester loqueado'
        })
    }

    try {

        const { userId } = jwt.verify(token, process.env.CLAVE_SECRETA);

        req.userId = userId;


    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'El token es incorrecto'
        })
    }

    next();

}


module.exports = {
    validarJWT
}