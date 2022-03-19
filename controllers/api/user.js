const { request, response } = require("express");
const { User } = require("../../db");
const bcrypt = require('bcryptjs');


const getUsuarios = async(req = request, res = response) => {

    try {
        const users = await User.findAll();

        res.json(users)


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}



const actualizarUsuario = async(req = request, res = response) => {

    const { id } = req.params;
    const body = req.body;


    try {
        await User.update(body, { where: { id } });


        res.json({
            msg: 'User actualizado',
            id
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

const crearUsuario = async(req = request, res = response) => {

    const { password, ...datos } = req.body;

    try {

        const salt = bcrypt.genSaltSync(10);
        datos.password = bcrypt.hashSync(password, salt);

        const user = await User.create(datos);

        res.json(user);



    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

const borrarUsuario = async(req = request, res = response) => {

    const { id } = req.params;


    try {

        await User.destroy({ where: { id } })

        res.json({
            msg: 'User eliminado',
            id
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}



module.exports = {
    getUsuarios,
    actualizarUsuario,
    crearUsuario,
    borrarUsuario
}