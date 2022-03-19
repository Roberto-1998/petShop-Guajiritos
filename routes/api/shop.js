const { check } = require('express-validator');
const { getShops, actualizarShop, crearShop, borrarShop } = require('../../controllers/api/shop');
const { existeShopPorId } = require('../../helpers/api');
const { validarCampos } = require('../../middlewares');

const router = require('express').Router();



router.get('/', getShops);

router.put('/:id', [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existeShopPorId),
    validarCampos
], actualizarShop);

router.post('/', crearShop);

router.delete('/:id', [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existeShopPorId),
    validarCampos
], borrarShop);

module.exports = router;