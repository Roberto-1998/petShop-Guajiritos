const { request, response } = require("express");
const { Pet, Breed, User } = require("../../db");


const getPets = async(req = request, res = response) => {

    try {

        const pets = await Pet.findAll({
            include: [{
                model: Breed,
                as: 'breed'
            }, {
                model: User,
                as: 'owner'
            }]
        });

        res.json(pets)


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador' })
    }
}


const actualizarPet = async(req = request, res = response) => {

    const { id } = req.params;
    const body = req.body;


    try {

        await Pet.update(body, {
            where: {
                id
            }
        });

        res.json({ msg: 'Pet actualizado', id })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador' })
    }
}

const crearPet = async(req = request, res = response) => {

    const datos = req.body;

    try {

        datos.ownerId = req.userId;
        const pet = await Pet.create(datos);

        res.json(pet)

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador' })
    }
}

const borrarPet = async(req = request, res = response) => {

    const { id } = req.params;


    try {
        await Pet.destroy({
            where: {
                id
            }
        })

        res.json({ msg: 'Pet borrado', id })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador' })
    }
}


module.exports = {
    getPets,
    actualizarPet,
    crearPet,
    borrarPet
}