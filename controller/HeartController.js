const asyncHandler = require('express-async-handler'); 
const AddToHeartModel = require('../model/addToHeartModel');
const Product = require('../model/productMode');
const filterUtils = require('../utils/productUtils'); 


const addToHeart = asyncHandler(async (req, res) => {
    let data = req.body;
    // console.log(data);
    let {userKey, productId, child} = data;
    const oldData = await AddToHeartModel.findOne({user__key: userKey});
    if(oldData){  
        let currentData = await  filterUtils.productQuantityAdd(oldData, productId);
        let data = await AddToHeartModel.findOneAndUpdate({user__key: userKey},{product__ides: currentData.product__ides, product__id__with__quantity: currentData.product__id__with__quantity});
            data =  await Product.find({ 'product__id': { $in: currentData.product__ides } }); 
            data = await filterUtils.uniqueProductGenerator(data);
            data = await filterUtils.GetProductQuantityProductAllPriceAndMany(data, currentData);
            res.status(200).send({message: 'Successfully added to cart', data, status__code: 200})
    }else{ 
        try {
            const data = await AddToHeartModel.create({user__key: userKey, product__ides: [productId], product__id__with__quantity : [{product__id: productId, quantity: 1}]});
            if(data._id){
                try {
                    let oldCartProduct = await Product.findOne({product__id: productId, child: child});
                    let cD = data._doc;
                    let pD = oldCartProduct._doc; 
                    let dataF = await filterUtils.GetProductQuantityProductAllPriceAndMany([pD], cD); 
                    res.status(200).send({message: 'Successfully added to cart', data: dataF, status__code: 200})
                } catch (errorP) {
                    res.status(400);
                    throw new Error(errorP);
                }
            } 
        } catch (errorO) {
            res.status(400);
            throw new Error(errorO);
        }
    }
    
})

const getUserHeartInfo =  asyncHandler(async (req, res) => {
    let data = req.body; 
    let {userKey} = data;
    const oldData = await AddToHeartModel.findOne({user__key: userKey});
    if(oldData){   
        let data =  await Product.find({ 'product__id': { $in: oldData._doc.product__ides } }); 
            data = await filterUtils.uniqueProductGenerator(data);
            data = await filterUtils.GetProductQuantityProductAllPriceAndMany(data, oldData._doc);
            res.status(200).send({message: 'Heart data loaded', data, status__code: 200});
    }else{ 
       let emptyUserCart = {products: [],ides:[], total__cart__info: {total__quantity:0, total__current__price:0, total__whole__price:0, total__previous__price:0, total__interest__price:0}}
       res.status(200).send({message: 'Successfully heart data loaded', data: emptyUserCart, status__code: 200})
    }
})

const removeFromHeart = asyncHandler(async (req, res) => {
    let data = req.body; 
    let {userKey, productId} = data;
    try {

        const oldData = await AddToHeartModel.findOne({user__key: userKey});
        let userCartDatabase = oldData._doc;
        let dProductII = userCartDatabase.product__ides.indexOf(productId); 
            userCartDatabase.product__ides.splice(dProductII, 1);
            userCartDatabase.product__id__with__quantity.splice(dProductII, 1);
            let upData = await AddToHeartModel.updateOne({_id: userCartDatabase._id},{product__ides: userCartDatabase.product__ides, product__id__with__quantity: userCartDatabase.product__id__with__quantity})
                if(upData){
                    let uData =  await Product.find({ 'product__id': { $in: userCartDatabase.product__ides } }); 
                    uData = await filterUtils.uniqueProductGenerator(uData);
                    uData = await filterUtils.GetProductQuantityProductAllPriceAndMany(uData, userCartDatabase);
                    res.status(200).send({message: 'Successfully removed from cart', data: uData, status__code: 200});
                }else{
                    res.status(400);
                    throw new Error("There was a server side error")
                }
            res.send('done')
    } catch (error) {
        res.status(400);
        throw new Error(error)
    }

})



module.exports = {addToHeart, removeFromHeart, getUserHeartInfo};