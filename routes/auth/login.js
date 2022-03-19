const { check } = require('express-validator');
const { login } = require('../../controllers/auth/login');
const { existeUserPorUsername } = require('../../helpers/api');
const { validarCampos } = require('../../middlewares/validar-campos');

const router = require('express').Router();


router.post('/', [
    check('username', 'El username es requerido').notEmpty(),
    check('password', 'El password es requerido').notEmpty(),
    validarCampos
], login);


module.exports = router;