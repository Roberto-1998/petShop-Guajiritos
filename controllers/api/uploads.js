const path = require('path');
const fs = require('fs');
const { request, response } = require("express");

const { subirArchivo } = require('../../helpers/api');
const { User } = require('../../db');






const actualizarImagen = async(req = request, res = response) => {

    const { id } = req.params;

    try {

        const user = await User.findByPk(id);

        // Limpiar imágenes previas
        if (user.photo) {
            // Hay que borrar la imagen del servidor
            const pathImagen = path.join(__dirname, '../../uploads/users', user.photo);
            if (fs.existsSync(pathImagen)) {
                fs.unlinkSync(pathImagen);
            }
        }

        const nombre = await subirArchivo(req.files, undefined, 'users');

        // Actualizar imagen de usuario
        await User.update({ photo: nombre }, { where: { id } })


        res.json({
            msg: 'La imagen ha sido actualizada'
        })

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Hable con el administrador'
        })

    }


}


const mostrarImagen = async(req = request, res = response) => {

    const { id } = req.params;

    try {

        const user = await User.findByPk(id);

        // Limpiar imágenes previas
        if (user.photo) {
            // Hay que borrar la imagen del servidor
            const pathImagen = path.join(__dirname, '../../uploads/users', user.photo);
            if (fs.existsSync(pathImagen)) {
                return res.sendFile(pathImagen)
            }
        }

        const pathNoImage = path.join(__dirname, '../../assets/no-image.jpg');
        res.sendFile(pathNoImage);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Hable con el administrador'
        })

    }


}



module.exports = {

    actualizarImagen,
    mostrarImagen
}