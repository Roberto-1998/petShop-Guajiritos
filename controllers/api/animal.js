const { request, response } = require("express");
const { Animal, Shop, Breed } = require("../../db");


const getAnimals = async(req = request, res = response) => {

    try {

        const animals = await Animal.findAll({
            include: [{
                model: Shop,
                as: 'shop',
                attributes: ['name']
            }, {
                model: Breed,
                as: 'breed'
            }]
        });

        res.json(animals)

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador' })
    }
}


const actualizarAnimal = async(req = request, res = response) => {

    const { id } = req.params;
    const body = req.body;


    try {
        await Animal.update(body, {
            where: {
                id
            }
        });

        res.json({ msg: 'Animal actualizado', id })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador' })
    }
}

const crearAnimal = async(req = request, res = response) => {

    const body = req.body;

    try {

        const animal = await Animal.create(body);

        res.json(animal)


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador' })
    }
}

const borrarAnimal = async(req = request, res = response) => {

    const { id } = req.params;


    try {

        await Animal.destroy({
            where: {
                id
            }
        })

        res.json({ msg: 'Animal eliminado', id })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador' })
    }
}


module.exports = {
    getAnimals,
    actualizarAnimal,
    crearAnimal,
    borrarAnimal
}