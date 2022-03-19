const { check } = require('express-validator');
const { getBreeds, actualizarBreed, crearBreed, borrarBreed } = require('../../controllers/api/breed');
const { existeBreedPorId, existeBreedPorNombre } = require('../../helpers/api');
const { validarCampos } = require('../../middlewares');

const router = require('express').Router();



router.get('/', getBreeds);

router.put('/:id', [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existeBreedPorId),
    validarCampos

], actualizarBreed);

router.post('/', [
    check('name').custom(existeBreedPorNombre)
], crearBreed);

router.delete('/:id', [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existeBreedPorId),
    validarCampos
], borrarBreed);

module.exports = router;