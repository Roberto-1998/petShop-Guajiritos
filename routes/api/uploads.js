const { check } = require('express-validator');
const { subirImagen, actualizarImagen, mostrarImagen } = require('../../controllers/api/uploads');
const { existeUserPorId } = require('../../helpers/api');
const { validarArchivo, validarCampos } = require('../../middlewares');

const router = require('express').Router();


router.put('/users/:id', [
    validarArchivo,
    check('id').custom(existeUserPorId),
    validarCampos
], actualizarImagen);


router.get('/users/:id', [
    check('id').custom(existeUserPorId),
    validarCampos
], mostrarImagen)


module.exports = router;