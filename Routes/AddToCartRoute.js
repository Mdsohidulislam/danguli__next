const { addToCart, removeFromCart, getUserCartInfo, cartProductQuantityIncrease, cartProductQuantityDecrease } = require('../controller/cartController');

const cartRoute = require('express').Router();

cartRoute.post('/addToCart', addToCart);
cartRoute.post('/removeFromCart', removeFromCart);
cartRoute.post('/getUserCartInfo', getUserCartInfo);
cartRoute.post('/cartProductQuantityDecrease', cartProductQuantityDecrease);
cartRoute.post('/cartProductQuantityIncrease', cartProductQuantityIncrease);

module.exports = cartRoute;