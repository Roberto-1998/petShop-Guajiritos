const { Animal } = require("../../db");



const existeAnimalPorId = async(id) => {

    const animal = await Animal.findByPk(id);
    if (!animal) {
        throw new Error(`No existe un animal para el id - ${id}`)
    }


}

module.exports = {
    existeAnimalPorId
}