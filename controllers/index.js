const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./home');

router.use('/'. homeRoute);
router.use('/api', apiRoutes);

module.exports =router;