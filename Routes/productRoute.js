const {postMultipleProduct, getSingleBrandData, getAllCollection, getAllCategoryCollection, getSingleCategory, getChildProduct, getParentProduct, getFatherProduct, getTopFatherProduct, getSingleProduct} = require('../controller/productController');

const productRouter = require('express').Router();


productRouter.post('/multiple', postMultipleProduct);
productRouter.get('/getBrand', getSingleBrandData);
productRouter.get('/getAllCollection', getAllCollection);
productRouter.get('/getAllCategoryCollection', getAllCategoryCollection);
productRouter.get('/getSingleCategory', getSingleCategory);
productRouter.get('/getChildProduct', getChildProduct);
productRouter.get('/getParentProduct', getParentProduct);// getFatherProduct
productRouter.get('/getFatherProduct', getFatherProduct);// getFatherProduct
productRouter.get('/getTopFatherProduct', getTopFatherProduct);// getFatherProduct // getSingleProduct
productRouter.get('/getSingleProduct', getSingleProduct);// getFatherProduct // getSingleProduct

module.exports  = productRouter;