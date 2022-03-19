const { check } = require('express-validator');
const { getAnimals, actualizarAnimal, crearAnimal, borrarAnimal } = require('../../controllers/api/animal');
const { existeAnimalPorId, existeBreedPorId, existeShopPorId } = require('../../helpers/api');

const { validarCampos } = require('../../middlewares');

const router = require('express').Router();



router.get('/', getAnimals);

router.put('/:id', [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existeAnimalPorId),
    validarCampos
], actualizarAnimal);



router.post('/', [
        check('shopId').custom(existeShopPorId),
        check('breedId').custom(existeBreedPorId),
        validarCampos
    ]

    , crearAnimal);

router.delete('/:id', [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existeAnimalPorId),
    validarCampos
], borrarAnimal);



module.exports = router;