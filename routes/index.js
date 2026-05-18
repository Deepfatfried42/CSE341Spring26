const express = require('express');
const router = express.Router();
//const routes = require('express').Router();

router.use('/contacts', require('./contacts'));
//const baseController = require('../controllers');

//routes.get('/', baseController.getName);
//module.exports = routes;
module.exports = router;