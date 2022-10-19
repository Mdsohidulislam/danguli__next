const { promotionProductPost, singlePromotionGet, getAllOfferCollection } = require('../controller/promotionProduct');


const promotionRoute = require('express').Router();

promotionRoute.post('/post__single',  promotionProductPost);
promotionRoute.get('/getAllOfferCollection',  getAllOfferCollection) 
promotionRoute.get('/single__promotion__get',  singlePromotionGet)

module.exports = {promotionRoute};