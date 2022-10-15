const asyncHandler =  require('express-async-handler');
const FilterNavbar = require('../model/filterNavbarMode');
const Product = require('../model/productMode');
const filterUtils = require('../utils/productUtils');


const postMultipleProduct = asyncHandler(async (req, res) => {
    const data = req.body; 
    if(data.length < 2){
        res.status(400)
        throw new Error('Please Upload multiple product')
    }

    try {
        const response = await Product.insertMany(data);

        res.status(200).json({message: 'Successfully products uploaded', response});
        
    } catch (error) {
        res.status(400);
        throw new Error(error.message)
    }
    
})

const getSingleBrandData = asyncHandler(async(req, res)=>{
    const brand = req.headers.brand;
    if(!brand){
        res.status(400)
        throw new Error('Invalid api request !');
        
    }
    try {
        const data = await Product.find({brand});
        if(data.length){
            let  result = await filterUtils.brandFilter(data); 
            res.status(200).send({products: result.product, filterNavbar: result.filter__navbar, status__code: 200});
        }else{
            res.status(200).send({products: [], filterNavbar: [], status__code: 200});
        }
    } catch (error) {
        res.status(400);
        throw new Error('There was a server side error')
    }
})

const getAllCollection = asyncHandler(async(req ,res) => {

    try {
        const data = await Product.find({});
        if(data.length){
            const {brandDataset} = await filterUtils.allBrandFilter(data);
            res.status(200).send({brandDataset, status__code: 200});
        }else{
            res.status(200).send({brandDataset:[], status__code: 200});
        }
    } catch (error) {
        res.status(400);
        throw new Error('There was a server side error')
    }
})

const getAllCategoryCollection = asyncHandler(async(req ,res) => {

    try {
        const data = await Product.find({});
        if(data.length){
            const {brandDataset} = await filterUtils.getAllCategoryCollection(data);
            res.status(200).send({brandDataset, status__code: 200});
        }else{
            res.status(200).send({brandDataset:[], status__code: 200});
        }
    } catch (error) {
        res.status(400);
        throw new Error('There was a server side error')
    }
})


const getSingleCategory = asyncHandler(async(req, res)=>{
    const category = req.headers.category;
    if(!category){
        res.status(400)
        throw new Error('Invalid api request !');
    }

    try {
        const data = await Product.find({parent: category});
        if(data.length){
            const {product, filter__navbar } = await filterUtils.getSingleCategory(data);
            res.status(200).send({products: product, filterNavbar: filter__navbar, status__code: 200});
        }else{
            res.status(200).send({brandDataset:[], status__code: 200});
        }
    } catch (error) {
        res.status(400);
        throw new Error('There was a server side error')
    }

})

const getChildProduct = asyncHandler(async(req, res)=>{
    const {top__father, parent__father, parent, child} = req.headers;

    if(!top__father || !parent__father || !parent || !child){
        res.status(400)
        throw new Error('Invalid api request !');
    }

    try {
        const data = await Product.find({top__father, parent__father, parent, child});
        const filterNavbarData = await FilterNavbar.find({top__father, parent__father, parent, child});

        if(data.length && filterNavbarData.length){
            let {product, filterNavbar} = await filterUtils.childProductAndSpecification(data, filterNavbarData);
            // const {product, filter__navbar } = await filterUtils.getSingleCategory(data);
            // res.status(200).send({products: data, filterNavbar: filterNavbarData, status__code: 200});
            res.status(200).send({products: product, filterNavbar: filterNavbar, status__code: 200});
            
        }else{
            res.status(200).send({products:[], filterNavbarData: [], status__code: 200});
        }
    } catch (error) {
        console.log(error);
        res.status(400);
        throw new Error(error.message)
    }

})


const getParentProduct = asyncHandler(async(req, res)=>{
    const {top__father, parent__father, parent} = req.headers;

    if(!top__father || !parent__father || !parent){
        res.status(400)
        throw new Error('Invalid api request !');
    }

    try {
        const data = await Product.find({top__father, parent__father, parent});
        const filterNavbarData = await FilterNavbar.find({top__father, parent__father, parent});

        if(data.length && filterNavbarData.length){
            let {product, filterNavbar} = await filterUtils.childProductAndSpecification(data, filterNavbarData); 
            res.status(200).send({products: product, filterNavbar: filterNavbar, status__code: 200});
            
        }else{
            res.status(200).send({products:[], filterNavbarData: [], status__code: 200});
        }
    } catch (error) {
        console.log(error);
        res.status(400);
        throw new Error(error.message)
    }

})


const getFatherProduct = asyncHandler(async(req, res)=>{
    const {top__father, parent__father} = req.headers;

    if(!top__father || !parent__father){
        res.status(400)
        throw new Error('Invalid api request !');
    }


    try {
        const data = await Product.find({top__father, parent__father});
        const filterNavbarData = await FilterNavbar.find({top__father, parent__father});

        if(data.length && filterNavbarData.length){
            let {product, filterNavbar} = await filterUtils.childProductAndSpecification(data, filterNavbarData); 
            res.status(200).send({products: product, filterNavbar: filterNavbar, status__code: 200});
            
        }else{
            res.status(200).send({products:[], filterNavbarData: [], status__code: 200});
        }
    } catch (error) {
        console.log(error);
        res.status(400);
        throw new Error(error.message)
    }

})

const getTopFatherProduct = asyncHandler(async(req, res)=>{
    const {top__father} = req.headers;

    if(!top__father){
        res.status(400)
        throw new Error('Invalid api request !');
    }


    try {
        const data = await Product.find({top__father});
        const filterNavbarData = await FilterNavbar.find({top__father});

        if(data.length && filterNavbarData.length){
            let {product, filterNavbar} = await filterUtils.childProductAndSpecification(data, filterNavbarData); 
            res.status(200).send({products: product, filterNavbar: filterNavbar, status__code: 200});
            
        }else{
            res.status(200).send({products:[], filterNavbarData: [], status__code: 200});
        }
    } catch (error) {
        console.log(error);
        res.status(400);
        throw new Error(error.message)
    }

})

const getSingleProduct = asyncHandler(async(req, res)=>{
    
    const {visible__url, parent__father} = req.headers;

    if(!visible__url || !parent__father){
        res.status(400)
        throw new Error('Invalid api request !');
    }


    try {
        const data = await Product.findOne({visible__url, parent__father}); 
        
        if(data._id){ 
            res.status(200).send({product: data, status__code: 200});
            
        }else{
            res.status(200).send({product:{}, status__code: 200});
        }
    } catch (error) {
        console.log(error);
        res.status(400);
        throw new Error(error.message)
    }

})
module.exports =  {postMultipleProduct, getSingleBrandData, getAllCollection, getAllCategoryCollection, getSingleCategory, getChildProduct, getParentProduct, getFatherProduct, getTopFatherProduct, getSingleProduct};