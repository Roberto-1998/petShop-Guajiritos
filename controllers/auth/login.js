const bcrypt = require("bcryptjs/dist/bcrypt");
const { request, response } = require("express");
const { User } = require("../../db");
const { generarToken } = require("../../helpers/auth/generar-token");





const login = async(req, res = response) => {

    const { username, password } = req.body;

    try {

        const user = await User.findOne({
            where: {
                username
            }
        });

        if (user) {

            const iguales = bcrypt.compareSync(password, user.password);
            if (iguales) {

                const token = await generarToken(user.id);
                return res.json({ token })

            } else {
                return res.status(400).json({
                    msg: 'Error en usuario - contraseña'
                })
            }

        } else {
            return res.status(400).json({
                msg: 'Error en usuario - contraseña'
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador' })
    }


}

module.exports = {
    login
}