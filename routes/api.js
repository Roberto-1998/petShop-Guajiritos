const router = require('express').Router();

const personRouter = require('./api/user');
const animalRouter = require('./api/animal');
const breedRouter = require('./api/breed');
const shopRouter = require('./api/shop');
const petRouter = require('./api/pet');
const uploadsRouter = require('./api/uploads');

router.use('/pets', petRouter);
router.use('/animals', animalRouter);
router.use('/breeds', breedRouter);
router.use('/shops', shopRouter);
router.use('/users', personRouter);
router.use('/uploads', uploadsRouter);


module.exports = router;