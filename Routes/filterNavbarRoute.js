const { filterNavbarMultiplePost } = require('../controller/filterNavbarController');

    

const filterNavbarRoute = require('express').Router();

filterNavbarRoute.post('/multiple', filterNavbarMultiplePost);

module.exports = filterNavbarRoute;