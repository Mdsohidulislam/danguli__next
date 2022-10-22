const asyncHandler = require('express-async-handler');
const Product = require('../model/productMode');
const PromotionProduct = require('../model/promotionProductModel');
const filterUtils = require('../utils/productUtils');


const promotionProductPost = asyncHandler(async (req, res) =>{
    let body = req.body; 
    if(!body.promotion__name || !body.product__ides || !body.user__key){
        res.status(400);
        throw new Error('Please Fill Up all the fields')
    }   
    let promotions = await PromotionProduct.find({promotion__name: body.promotion__name}).limit(1);
    
    if(promotions.length){
        if(promotions[0].product__ides.indexOf(body.product__ides) === -1){
            try {
                let data = await PromotionProduct.updateOne({_id: promotions[0]._id},{
                    $push : {
                        product__ides: body.product__ides
                    }
                })
                res.status(200).send({message: 'Successfully Product Updated', data})
            } catch (error) {
                res.status(400);
                throw new Error(error.message)
            }
        }else{
            res.status(400);
            throw new Error("The product was already added");
        }
    }else{ 
        try {
            const data = await PromotionProduct.create(body);
            res.status(200).send({message: 'Successfully Data Inserted', data})
        } catch (error) { 
            res.status(400);
            throw new Error(error.message);
        }
    }
    // try {
    //    let data = await PromotionProduct.create(body);
        
    //    res.status(200).send({message: 'Successfully Product added', data})
       
    // } catch (error) {
    //     res.status(400);
    //     throw new Error(error.message);
    // }
})

const singlePromotionGet = asyncHandler(async(req, res) => {
    let name = req.headers.promotion;
        name = name.replace(/underScore/g, '__');
    if(!name){
        res.status(400);
        throw new Error('Please Enter Promotion Name')
    }
    try {
        let promotion = await PromotionProduct.findOne({promotion__name: name});

        if(promotion.promotion__name){
            let data =  await Product.find({ '_id': { $in: promotion.product__ides } }); 
            let result = await filterUtils.brandFilter(data);
            res.status(200).send({products: result.product, filterNavbar: result.filter__navbar, status__code: 200});
        }else{
            res.status(200).send({promotion:{}})
        }
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})

const getAllOfferCollection =  asyncHandler(async(req, res) => {
    
    try {
        let promotion = await PromotionProduct.find();

        if(promotion.length){ 
           res.status(200).send({promotion, status__code: 200})
        }else{
            res.status(200).send({promotion:[]})
        }
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})
module.exports = {promotionProductPost, singlePromotionGet, getAllOfferCollection}