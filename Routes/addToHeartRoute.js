const { addToHeart, removeFromHeart, getUserHeartInfo } = require('../controller/HeartController');

const addToHeartRoute = require('express').Router();

addToHeartRoute.post('/addToHeart', addToHeart);
addToHeartRoute.post('/removeFromHeart', removeFromHeart);
addToHeartRoute.post('/getUserHeartInfo', getUserHeartInfo);


module.exports = addToHeartRoute;