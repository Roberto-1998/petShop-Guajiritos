const { check } = require('express-validator');
const { getPets, actualizarPet, crearPet, borrarPet } = require('../../controllers/api/pet');
const { existeBreedPorId, existePetPorId, existeUserPorId } = require('../../helpers/api');

const { validarCampos, validarJWT } = require('../../middlewares');

const router = require('express').Router();



router.get('/', getPets);

router.put('/:id', [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existePetPorId),
    validarCampos
], actualizarPet);

router.post('/', [
    validarJWT,
    check('breedId', 'El breedId es requerido').notEmpty(),

    check('breedId').custom(existeBreedPorId),

    validarCampos
], crearPet);

router.delete('/:id',
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existePetPorId),
    validarCampos, borrarPet);

module.exports = router;