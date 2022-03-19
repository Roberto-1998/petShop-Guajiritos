const validarAnimal = require('./validar-animal');
const validarBreed = require('./validar-breed');
const validarPet = require('./validar-pet');
const validarShop = require('./validar-shop');
const validarUser = require('./validar-user');
const subirArchivo = require('./subir-archivo')



module.exports = {
    ...validarAnimal,
    ...validarBreed,
    ...validarPet,
    ...validarShop,
    ...validarUser,
    ...subirArchivo
}