const { Pet } = require("../../db");



const existePetPorId = async(id) => {

    const pet = await Pet.findByPk(id);
    if (!pet) {
        throw new Error(`No existe un pet con el id - ${id}`)
    }
}




module.exports = {
    existePetPorId
}