const { Breed } = require("../../db");



const existeBreedPorId = async(id) => {

    const breed = await Breed.findByPk(id);
    if (!breed) {
        throw new Error(`No existe un breed para el id - ${id}`)
    }
}


const existeBreedPorNombre = async(name = '') => {

    const breed = await FindOne({ where: { nombre } });
    if (breed) {
        throw new Error(`Ya existe un breed con el nombre - ${name}`)

    }

}


module.exports = {
    existeBreedPorId,
    existeBreedPorNombre
}