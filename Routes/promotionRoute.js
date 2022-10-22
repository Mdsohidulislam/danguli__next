const { promotionProductPost, singlePromotionGet, getAllOfferCollection } = require('../controller/promotionProduct');


const promotionRoute = require('express').Router();

promotionRoute.post('/post__single',  promotionProductPost);
promotionRoute.get('/getAllOfferCollection',  getAllOfferCollection) 
promotionRoute.get('/singlePromotionGet',  singlePromotionGet)

module.exports = {promotionRoute};