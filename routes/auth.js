const router = require('express').Router();


const loginRouter = require('./auth/login');

router.use('/login', loginRouter);



module.exports = router;