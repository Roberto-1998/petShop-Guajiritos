const { request, response } = require("express");
const { Breed } = require("../../db");


const getBreeds = async(req = request, res = response) => {

    try {

        const breeds = await Breed.findAll();

        res.json(breeds)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}



const actualizarBreed = async(req = request, res = response) => {

    const { id } = req.params;
    const body = req.body;


    try {

        await Breed.update(body, { where: { id } });

        res.json({
            msg: 'Breed actualizado',
            id
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

const crearBreed = async(req = request, res = response) => {

    const body = req.body;

    try {

        const breed = await Breed.create(body);

        res.json(breed)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

const borrarBreed = async(req = request, res = response) => {

    const { id } = req.params;


    try {

        await Breed.destroy({ where: { id } })

        res.json({
            msg: 'Breed eliminado',
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
    crearBreed,
    getBreeds,
    actualizarBreed,
    borrarBreed
}