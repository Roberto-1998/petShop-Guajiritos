const jwt = require('jsonwebtoken');

const generarToken = (userId) => {

    return new Promise((resolve, reject) => {
        const payload = { userId };

        jwt.sign(payload, process.env.CLAVE_SECRETA, { expiresIn: '24h' }, (err, token) => {

            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }

        })



    })


}


module.exports = {
    generarToken
}