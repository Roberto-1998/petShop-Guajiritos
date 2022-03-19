const { check } = require('express-validator');
const { getUsuarios, actualizarUsuario, crearUsuario, borrarUsuario } = require('../../controllers/api/user');
const { existeUserPorId, existeUserPorUsername } = require('../../helpers/api');
const { validarCampos } = require('../../middlewares');

const router = require('express').Router();



router.get('/', getUsuarios);

router.put('/:id', [



    check('id').custom(existeUserPorId),
    validarCampos
], actualizarUsuario);

router.post('/', [
    check('username', 'El campo username es requerido').notEmpty(),
    check('password', 'El campo password es requerido').notEmpty(),
    check('username').custom(existeUserPorUsername),
    validarCampos
], crearUsuario);

router.delete('/:id', [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existeUserPorId),
    validarCampos
], borrarUsuario);

module.exports = router;