const express = require('express');
const {uid} = require('uid')
const app = express();
const port = process.env.PORT || 3009; 
const path = require('path');
const mySql = require('mysql');
const expressFileUpload = require('express-fileupload');
const bodyParser = require('body-parser'); 
const fs = require('fs');
require('dotenv').config();
const con  = mySql.createConnection({
    host:  process.env.dear__host,
    database:  process.env.dear__database__two,
    user: process.env.dear__user,
    password:process.env.dear__password
}) 
const conTwo  = mySql.createConnection({
    host: process.env.dear__host,
    database:  process.env.dear__database__three,
    user: process.env.dear__user,
    password:process.env.dear__password
})

const conHello  = mySql.createConnection({
    host: process.env.dear__host,
    database: process.env.dear__database__one,
    user: process.env.dear__user,
    password:process.env.dear__password
})
// const fs = require('fs');
// cors related code start

const bufferDataConverter = (data) => {
    return JSON.parse(Buffer.from(JSON.parse(data)).toString());
}

const bufferDataMaker = (data)  => {

    let bufferData = Buffer.from(JSON.stringify(data));
    return JSON.stringify(bufferData);

}
const utilsHelper = {};
utilsHelper.stringOperations  = {};




utilsHelper.stringOperations.specificationsStringConverter = (str) => {
    let regex1 = /sss__sss___sss/g
    let regex2  = /sss==sss===sss/g 
    let regex3  = /sss@@sss@@@sss/g  
    let regex4  = /sss##sss###sss/g  
    let regex5 = /sssttsssttsssttsssttsssttsss/g
    let regex6 = /sssccsssccsssccsssccsssccsss/g
    let regex7 = /sssnnsssnnsssnnsssnnsssnnsss/g 
    let result = str.replace(regex1, "'");
        result = result.replace(regex2, '"');
        result = result.replace(regex3, ',');
        result = result.replace(regex4, '`');
        result = result.replace(regex5, '\t');
        result = result.replace(regex6, ':');
        result = result.replace(regex7, '\n');
    return result;
}


const serverUtils = {};
        serverUtils.converter = {};
        serverUtils.dataProducer = {};
        serverUtils.converter.FilterNavbarConverter = (data) => {
            let collections = [];
            data.forEach((infoTop) => {   
                infoTop.data.forEach((info) => { 
                    if(collections.indexOf(info) === -1){
                        collections.push(info.toLowerCase());
                    } 
                }) 
            })
            return collections;
        }
        serverUtils.dataProducer.filterNavbarAndSpecificationDataProducer = (specifications, keys) => {
            let categoryData = [];
            let productHeaders = [] 
            specifications.forEach((singleData) => {
                var {info, product__id} = singleData;
                
                info.forEach((specifications) => {
                    var {title, infos} = specifications;
                    infos.forEach((tr) => {
                        var {title:header , info:dataInfoTd} = tr;
                        let data__part =utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).split(' '); 
                        if(keys.indexOf(header.toLowerCase()) !== -1 || header.toLowerCase() === 'brand'){ 
                            let currentInsertProductHeaderIndex = productHeaders.indexOf(utilsHelper.stringOperations.specificationsStringConverter(header).toLowerCase())
                            let thisData = categoryData[currentInsertProductHeaderIndex]; 
        
                            if( currentInsertProductHeaderIndex !== -1){
        
                                let workingData = categoryData[currentInsertProductHeaderIndex]; 
                                let workingDataKeys = workingData[workingData.length - 1];
                                let prevData = workingData.slice(0, workingData.length - 1);
                                let workingDataIndex = workingDataKeys.indexOf(utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).toLowerCase());
                                let newData = [...prevData];
                                let newKeys= [...workingDataKeys]
                                
                                if(workingDataIndex === -1){ 
                                    newData.push([utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).toLowerCase(), [product__id]]);
                                    newKeys.push(utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).toLowerCase());
                                    newData.push(newKeys); 
                                    categoryData[currentInsertProductHeaderIndex] = newData;  
                                } else {   
                                    let currentWorkingProduct = workingData[workingDataIndex]
                                    let name = currentWorkingProduct[0];
                                    let ides = [...currentWorkingProduct[1]];
                                    ides.push(product__id) 
                                    workingData[workingDataIndex] = [name, ides];
                                    categoryData[currentInsertProductHeaderIndex] = workingData 
                                } 
                            }else{
                                // todo Completed task
                                productHeaders.push(utilsHelper.stringOperations.specificationsStringConverter(header).toLowerCase());
                                categoryData.push([[ utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).toLowerCase() , [ product__id ]] , [utilsHelper.stringOperations.specificationsStringConverter(dataInfoTd).toLowerCase()]])
                              // todo Completed task
                            }
                        } 
                    } )
                })
            }) 
        
            const finalFilteredArray = []; 
        
            productHeaders.forEach((info, index) => {
                    let currentData =  categoryData[index];
        
                    if(currentData.length ){
                        finalFilteredArray.push({name: info, dataset: categoryData[index]})
                    }
                
            })
        
            return finalFilteredArray;
        }


const cors =  require('cors');   
const { json } = require('express/lib/response');
var whitelist = ['http://localhost:3000', 'http://localhost:3001']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
} 

// cors related code end

con.connect((err) => {
    if(err){ 
        console.log(err.message);
    }else {
        console.log('Successfully Database Connected');
    }
}) 

conTwo.connect((err) => {
    if(err){
        console.log(err.message);
    }else {
        console.log('Successfully 2  Database Connected');
    }
}) 
app.use(express.static(path.join(__dirname, 'images')));
app.use(expressFileUpload());
app.use(cors(corsOptions)); 
app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    extended: true ,
    limit: '50mb'
  }));
  app.use(bodyParser.json({limit: '50mb'}))

app.get('/',(req, res) => {
    res.status(200).send('<h1>Hello world</h1>')
})

app.get('/getAllDatafromtable',(req, res) =>{
    let productSql = `SELECT * FROM product`;
    let imagesSql = `SELECT * FROM images`;
    let detailsSql = `SELECT * FROM details`;
    let overviewsSql = `SELECT * FROM overviews`;
    let specificationsSql = `SELECT * FROM specifications`;

    con.query(productSql,  (err , productResult) => {
        if(!err){
            con.query(imagesSql,  (err ,  imagesResult) => {
                if(!err){
                    con.query(detailsSql,  (err ,  detailsResult) => {
                        if(!err){
                            con.query(overviewsSql,  (err ,  overviewsResult) => {
                                if(!err){
                                    con.query(specificationsSql,  (err ,  specificationsResult) => {
                                        if(!err){
                                            res.status(200).send({detailsResult, overviewsResult, productResult, specificationsResult, imagesResult})
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})

app.post('/postSingleProduct',(req, res) =>  {
    let {product, src} = req.body;
    let infos = bufferDataMaker(product); 
    let user__guide = bufferDataMaker(product.user__guide);

    let {visible__url, quantity, product__id, parent__father, parent, child, brand} = src;
    let sql = `INSERT INTO product (visible__url, quantity, product__id, parent__father, parent, child, brand, infos, user__guide) VALUES ('${visible__url}', '${quantity}', '${product__id}', '${parent__father}', '${parent}', '${child}', '${brand}', '${infos}', '${user__guide}')`;
    
    conTwo.query(sql, (err, result) => {
        if(!err){
            res.status(200).send({message: "Successfully data Submitted", status__code: 200})
        }else{ 
            res.status(200).send({message: err.message, status__code: 205})
        }
    })
})

// todo offer start postSingleBrowsingProduct
app.post('/postSingleBrowsingProduct',(req, res) =>  {
    
    let {infos, database} = req.body;
    let infosReady = bufferDataMaker(infos.infos);  
    let {visible__url, quantity, product__id, parent__father, parent, child, brand, post__time, views, total__sell, user__key} = infos; 
    

    let sql = `INSERT INTO ${database} (visible__url, quantity, product__id, parent__father, parent, child, brand, infos,  post__time, views, total__sell, user__key) VALUES ('${visible__url}', '${quantity}', '${product__id}', '${parent__father}', '${parent}', '${child}', '${brand}', '${infosReady}',  '${post__time}', '${views}', '${total__sell}', '${user__key}')`;
    
    conHello.query(sql, (err, result) => {
        if(!err){
            res.status(200).send({message: "Successfully data Submitted", status__code: 200})
        }else{ 
            res.status(200).send({message: err.message, status__code: 205})
        }
    })
})
app.put('/putSingleBrowsingProduct',(req, res) =>  {
    
    let {infos, database} = req.body;
    let infosReady = bufferDataMaker(infos.infos);   
    let sqlCurrent = `UPDATE  ${database} SET infos='${infosReady}' WHERE product__id='${infos.product__id}' AND user__key='${infos.user__key}'`;
    
    
    conHello.query(sqlCurrent, (err, result) => {
        if(!err){
            res.status(200).send({message: "Successfully data Updated", status__code: 200})
        }else{ 
            res.status(200).send({message: err.message, status__code: 205})
        }
    })
})
app.post('/postSingleOfferProduct',(req, res) =>  {
    
    let {infos, database} = req.body;
    let infosReady = bufferDataMaker(infos.infos);  
    let {visible__url, quantity, product__id, parent__father, parent, child, brand, post__time, views, total__sell} = infos; 

    let sql = `INSERT INTO upgrade__your__gaming__station (visible__url, quantity, product__id, parent__father, parent, child, brand, infos,  post__time, views, total__sell, class) VALUES ('${visible__url}', '${quantity}', '${product__id}', '${parent__father}', '${parent}', '${child}', '${brand}', '${infosReady}',  '${post__time}', '${views}', '${total__sell}', '${database}')`;
    
    conHello.query(sql, (err, result) => {
        if(!err){
            res.status(200).send({message: "Successfully data Submitted", status__code: 200})
        }else{ 
            res.status(200).send({message: err.message, status__code: 205})
        }
    })
})
app.get('/getSingleOfferCategoryDataAll', (req, res) => {
    let {table}  = req.headers;
    let sql = `SELECT * FROM ${table}`
    
    conHello.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{   
                    let product = []; 
                    let brandCollection = [];
                    let brandIdCollection = []; 
                    let typeCollection = [];
                    let typeIdCollection = [];

                    result.forEach((newInfo) => {
                        let info = {...newInfo};
                        info.infos = bufferDataConverter(newInfo.infos);  
                            product.push(info); 
                            
                            if(brandCollection.indexOf(info.brand) === -1){
                                brandCollection.push(info.brand);
                                brandIdCollection.push([info.product__id]);
                            }else{
                                let brandIndex = brandCollection.indexOf(info.brand);
                                    brandIdCollection[brandIndex].push(info.product__id)
                            }
                            if(typeCollection.indexOf(info.child) === -1){
                                typeCollection.push(info.child);
                                typeIdCollection.push([info.product__id]);
                            }else{
                                let typeIndex = typeCollection.indexOf(info.child);
                                typeIdCollection[typeIndex].push(info.product__id)
                            }
        
                    })  
                    let brandDataset = [];
                    let typeDataset = [];
                    brandCollection.forEach((info, index) => {
                        brandDataset.push([info, brandIdCollection[index]])
                    })
                    typeCollection.forEach((info, index) => {
                        typeDataset.push([info, typeIdCollection[index]])
                    })

                    res.status(200).send({ product, brandDataset, typeDataset ,status__code: 200});
        }
    })
})
app.get('/getSingleOfferCategoryData', (req, res) => { 
    let sql = `SELECT * FROM upgrade__your__gaming__station`
    
    conHello.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{   
            let product = []; 
            let brandCollection = [];
            let brandIdCollection = [];  
        
            result.forEach((newInfo) => {
                let info = {...newInfo};
                info.infos = bufferDataConverter(newInfo.infos);  
                    product.push(info); 
                    
                    if(brandCollection.indexOf(info.class) === -1){
                        brandCollection.push(info.class);
                        brandIdCollection.push([info]);
                    }else{
                        let brandIndex = brandCollection.indexOf(info.class);
                            brandIdCollection[brandIndex].push(info)
                    } 
        
            })  
            let brandDataset = []; 
            brandCollection.forEach((info, index) => {
                brandDataset.push([info, brandIdCollection[index]])
            }) 
        
            res.status(200).send({brandDataset ,status__code: 200});
        }
    })
})
// todo get brand start
app.get('/getSingleBrand', (req, res) => {
    let {brand}  = req.headers; 
    let sql = `SELECT * FROM details__product WHERE brand='${brand}'`
    
    conHello.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{   
                    let product = []; 
                    let brandCollection = [];
                    let brandIdCollection = []; 
                    let typeCollection = [];
                    let typeIdCollection = [];
                    let filter__navbar = [];

                    result.forEach((newInfo) => {
                        let info = {...newInfo};
                            info.infos = bufferDataConverter(newInfo.infos);  
                            product.push(info); 

                            if(brandCollection.indexOf(info.brand) === -1){
                                brandCollection.push(info.brand);
                                brandIdCollection.push([info.product__id]);
                            }else{
                                let brandIndex = brandCollection.indexOf(info.brand);
                                    brandIdCollection[brandIndex].push(info.product__id)
                            }
                            if(typeCollection.indexOf(info.child) === -1){
                                typeCollection.push(info.child);
                                typeIdCollection.push([info.product__id]);
                            }else{
                                let typeIndex = typeCollection.indexOf(info.child);
                                typeIdCollection[typeIndex].push(info.product__id)
                            }
        
                    }) 
                    let brandDataset = [];
                    brandCollection.forEach((info, index) => {
                        brandDataset.push([info, brandIdCollection[index]])
                    })
                        brandDataset = brandDataset.length ? brandDataset : []
                    let typeDataset = [];

                    typeCollection.forEach((info, index) => {
                        typeDataset.push([info, typeIdCollection[index]])
                    })
                    typeDataset = typeDataset.length ? typeDataset : []
                    filter__navbar.push({name: 'brand', dataset: brandDataset})
                    filter__navbar.push({name: 'category', dataset: typeDataset}) 
                    res.status(200).send({ products: product, filterNavbar: filter__navbar ,status__code: 200});
                    

        }
    })
})

app.get('/getSingleBrowsingProduct', (req, res) => {
    let {user__key, database}  = req.headers; 
    let sql = `SELECT * FROM ${database} WHERE user__key='${user__key}'`
    
    conHello.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{   
                    let product = []; 
                    let brandCollection = [];
                    let brandIdCollection = []; 
                    let typeCollection = [];
                    let typeIdCollection = [];
                    let filter__navbar = [];

                    result.forEach((newInfo) => {
                        let info = {...newInfo};
                            info.infos = bufferDataConverter(newInfo.infos);  
                            product.push(info); 

                            if(brandCollection.indexOf(info.brand) === -1){
                                brandCollection.push(info.brand);
                                brandIdCollection.push([info.product__id]);
                            }else{
                                let brandIndex = brandCollection.indexOf(info.brand);
                                    brandIdCollection[brandIndex].push(info.product__id)
                            }
                            if(typeCollection.indexOf(info.child) === -1){
                                typeCollection.push(info.child);
                                typeIdCollection.push([info.product__id]);
                            }else{
                                let typeIndex = typeCollection.indexOf(info.child);
                                typeIdCollection[typeIndex].push(info.product__id)
                            }
        
                    }) 
                    let brandDataset = [];
                    brandCollection.forEach((info, index) => {
                        brandDataset.push([info, brandIdCollection[index]])
                    })
                        brandDataset = brandDataset.length ? brandDataset : []
                    let typeDataset = [];

                    typeCollection.forEach((info, index) => {
                        typeDataset.push([info, typeIdCollection[index]])
                    })
                    typeDataset = typeDataset.length ? typeDataset : []
                    filter__navbar.push({name: 'brand', dataset: brandDataset})
                    filter__navbar.push({name: 'category', dataset: typeDataset}) 
                    res.status(200).send({ products: product, filterNavbar: filter__navbar ,status__code: 200});
                    

        }
    })
})
app.delete('/deleteSingleBrowsingProduct', (req, res) => {
    let {user__key, database, product__id} = req.headers;
    let deleteSql  = `DELETE FROM ${database} WHERE product__id='${product__id}' AND user__key='${user__key}'`;
    conHello.query(deleteSql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{    
                    res.status(200).send({ message: 'Successfully product Removed from Cart',status__code: 200});
                    

        }
    })
})
    
app.get('/getSingleCategory', (req, res) => {
    let {category}  = req.headers; 
    let sql = `SELECT * FROM details__product WHERE parent='${category}'`
    
    conHello.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{   
                    let product = []; 
                    let brandCollection = [];
                    let brandIdCollection = []; 
                    let typeCollection = [];
                    let typeIdCollection = [];
                    let filter__navbar = [];

                    result.forEach((newInfo) => {
                        let info = {...newInfo};
                            info.infos = bufferDataConverter(newInfo.infos);  
                            product.push(info); 

                            if(brandCollection.indexOf(info.brand) === -1){
                                brandCollection.push(info.brand);
                                brandIdCollection.push([info.product__id]);
                            }else{
                                let brandIndex = brandCollection.indexOf(info.brand);
                                    brandIdCollection[brandIndex].push(info.product__id)
                            }
                            if(typeCollection.indexOf(info.child) === -1){
                                typeCollection.push(info.child);
                                typeIdCollection.push([info.product__id]);
                            }else{
                                let typeIndex = typeCollection.indexOf(info.child);
                                typeIdCollection[typeIndex].push(info.product__id)
                            }
        
                    }) 
                    let brandDataset = [];
                    brandCollection.forEach((info, index) => {
                        brandDataset.push([info, brandIdCollection[index]])
                    })
                        brandDataset = brandDataset.length ? brandDataset : []
                    let typeDataset = [];

                    typeCollection.forEach((info, index) => {
                        typeDataset.push([info, typeIdCollection[index]])
                    })
                    typeDataset = typeDataset.length ? typeDataset : []
                    filter__navbar.push({name: 'brand', dataset: brandDataset})
                    filter__navbar.push({name: 'category', dataset: typeDataset}) 
                    res.status(200).send({ products: product, filterNavbar: filter__navbar ,status__code: 200});
                    

        }
    })
})

app.get('/getSingleOffer', (req, res) => {
    let {offer}  = req.headers; 
    let sql = `SELECT * FROM ${offer}`
    
    conHello.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{   
                    let product = []; 
                    let brandCollection = [];
                    let brandIdCollection = []; 
                    let typeCollection = [];
                    let typeIdCollection = [];
                    let filter__navbar = [];

                    result.forEach((newInfo) => {
                        let info = {...newInfo};
                            info.infos = bufferDataConverter(newInfo.infos);  
                            product.push(info); 

                            if(brandCollection.indexOf(info.brand) === -1){
                                brandCollection.push(info.brand);
                                brandIdCollection.push([info.product__id]);
                            }else{
                                let brandIndex = brandCollection.indexOf(info.brand);
                                    brandIdCollection[brandIndex].push(info.product__id)
                            }
                            if(typeCollection.indexOf(info.child) === -1){
                                typeCollection.push(info.child);
                                typeIdCollection.push([info.product__id]);
                            }else{
                                let typeIndex = typeCollection.indexOf(info.child);
                                typeIdCollection[typeIndex].push(info.product__id)
                            }
        
                    }) 
                    let brandDataset = [];
                    brandCollection.forEach((info, index) => {
                        brandDataset.push([info, brandIdCollection[index]])
                    })
                        brandDataset = brandDataset.length ? brandDataset : []
                    let typeDataset = [];

                    typeCollection.forEach((info, index) => {
                        typeDataset.push([info, typeIdCollection[index]])
                    })
                    typeDataset = typeDataset.length ? typeDataset : []
                    filter__navbar.push({name: 'brand', dataset: brandDataset})
                    filter__navbar.push({name: 'category', dataset: typeDataset}) 
                    res.status(200).send({ products: product, filterNavbar: filter__navbar ,status__code: 200});
                    

        }
    })
})
app.get('/getAllCollection',(req, res)=>{
    
    const sql = `SELECT * FROM ${req.headers.collection}`;
    conHello.query(sql,(err, result)=>{
        
        if(err){
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            let collection = [];
            result.forEach((info) => {
                let newInfo = {...info};
                newInfo.infos = bufferDataConverter(info.infos); 
                collection.push(newInfo);
            })
            res.status(200).send({result: collection, status__code: 200});
        }
    })
}) 
app.get('/getAllCollectionn',(req, res)=>{
    
    const sql = `SELECT * FROM ${req.headers.collection}`;
    conTwo.query(sql,(err, result)=>{
        
        if(err){
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            let collection = [];
            result.forEach((info) => {
                let newInfo = {...info};
                newInfo.infos = bufferDataConverter(info.infos); 
                collection.push(newInfo);
            })
            res.status(200).send({result: collection, status__code: 200});
        }
    })
})
app.get('/getAllCollectionnn',(req, res)=>{
    
    const sql = `SELECT * FROM ${req.headers.collection}`;
    conHello.query(sql,(err, result)=>{
        
        if(err){
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            let collection = [];
            result.forEach((info) => {
                let newInfo = {...info};
                newInfo.infos = bufferDataConverter(info.infos); 
                collection.push(newInfo);
            })
            res.status(200).send({result: collection, status__code: 200});
        }
    })
}) 
// todo get brand edn
// todo offer end
app.post('/postSingleOverviews',(req, res) =>  {
    let {overviews, src} = req.body;
    let infos = bufferDataMaker(overviews);
    let {visible__url, quantity, product__id, parent__father, parent, child, brand} = src;
    let sql = `INSERT INTO overviews (visible__url, quantity, product__id, parent__father, parent, child, brand, infos) VALUES ('${visible__url}', '${quantity}', '${product__id}', '${parent__father}', '${parent}', '${child}', '${brand}', '${infos}')`;

    conTwo.query(sql, (err, result) => {
        if(!err){
            res.status(200).send({message: "Successfully data Submitted", status__code: 200})
        }else{ 
            res.status(200).send({message: err.message, status__code: 205})
        }
    }) 
})


app.post('/postSingleSpecifications',(req, res) =>  {
    let {specifications, src} = req.body;
    let infos = bufferDataMaker(specifications);
    let {visible__url, quantity, product__id, parent__father, parent, child, brand} = src;
    let sql = `INSERT INTO specifications (visible__url, quantity, product__id, parent__father, parent, child, brand, infos) VALUES ('${visible__url}', '${quantity}', '${product__id}', '${parent__father}', '${parent}', '${child}', '${brand}', '${infos}')`;

    conTwo.query(sql, (err, result) => {
        if(!err){
            res.status(200).send({message: "Successfully data Submitted", status__code: 200})
        }else{ 
            console.log(err.message);
            res.status(200).send({message: err.message, status__code: 205})
        }
    })
})

app.post('/postSingleDetails',(req, res) =>  {
    let {details, src} = req.body;
    let infos = bufferDataMaker(details);
    let {visible__url, quantity, product__id, parent__father, parent, child, brand} = src;
    let sql = `INSERT INTO details (visible__url, quantity, product__id, parent__father, parent, child, brand, infos) VALUES ('${visible__url}', '${quantity}', '${product__id}', '${parent__father}', '${parent}', '${child}', '${brand}', '${infos}')`;

    conTwo.query(sql, (err, result) => {
        if(!err){
            res.status(200).send({message: "Successfully data Submitted", status__code: 200})
        }else{ 
            console.log(err.message);
            res.status(200).send({message: err.message, status__code: 205})
        }
    })
})

app.post('/postFinalProductWithNewUpdateAndNewAddition',(req, res) =>  {
    let {visible__url, quantity, product__id, parent__father, parent, child, brand, infos} = req.body;
    let infosB = bufferDataMaker(infos);  
    let sql = `INSERT INTO details__product (visible__url, quantity, product__id, parent__father, parent, child, brand, infos, total__sell, post__time, views) VALUES ('${visible__url}', '${quantity}', '${product__id}', '${parent__father}', '${parent}', '${child}', '${brand}', '${infosB}', '0', '20220319102414pm', '0')`;
    conTwo.query(sql, (err, result) => {
        if(!err){
            res.status(200).send({message: "Successfully data Submitted", status__code: 200})
        }else{ 
            console.log(err.message);
            res.status(200).send({message: err.message, status__code: 205})
        }
    })
})

app.post('/multipleImageUpload', (req, res) =>  {
    let images = req.files.images;
    let links = req.body.links;
    
    
    images.forEach((info, index) =>  {  

        info.mv(links[index] , (err => {
            if(!err){  

            }
        }))
    })
    
    res.status(200).send({message: 'successfully image uploaded'}); 
} )
 
app.post('/addCollection',(req ,res) => {
    let imgUid = uid(20);
    let categoryName = req.body.name;
    let post__time = req.body.post__time;
    let  img = req.files.img__src;  
    let {name} = img; 
    let fileExtension = name.split('.');
        fileExtension = fileExtension[fileExtension.length -1]; 
    img.mv(`images/collection/${categoryName}__dearvayu@gmail.com__${imgUid}.${fileExtension}`,(err)=>{
        if(err){ 
            res.status(400).send({message: 'faild to create collection', status__code: 400});
        }else{
            let sql = `INSERT INTO collections (name, img__src, post__time) VALUES ('${categoryName}', 'images/collection/${categoryName}__dearvayu@gmail.com__${imgUid}.${fileExtension}', '${post__time}' )`;
            con.query(sql, (err)=>{
                if(err){
                    console.log(err.message);
                }else{
                                res.status(200).send({path:`images/collection/${categoryName}__dearvayu@gmail.com__${imgUid}.${fileExtension}`, message: 'successfully file upload' , status__code: 200});
                }
            })
            // res.status(200).send({path:`images/category/${categoryName}__dearvayu@gmail.com__${imgUid}.${fileExtension}`, message: 'successfully file upload' })
        }
    }) 
}) 

 
app.post('/addCategory',(req ,res) => {
    let imgUid = uid(20);
    let {name: categoryName, collection , post__time}  = req.body; 
    let  img = req.files.img__src;  
    let {name} = img; 
    let fileExtension = name.split('.');
        fileExtension = fileExtension[fileExtension.length -1]; 
    img.mv(`images/collection/${collection}__dearvayu@gmail.com__${imgUid}.${fileExtension}`,(err)=>{
        if(err){ 
            res.status(400).send({message: 'faild to create collection', status__code: 400});
        }else{
            let sql = `INSERT INTO categories (name, collection,  img__src, post__time) VALUES ('${categoryName}', '${collection}' , 'images/collection/${collection}__dearvayu@gmail.com__${imgUid}.${fileExtension}', '${post__time}' )`;
            con.query(sql, (err)=>{
                if(err){
                    console.log(err.message);
                }else{
                                res.status(200).send({path:`images/collection/${collection}__dearvayu@gmail.com__${imgUid}.${fileExtension}`, message: 'successfully file upload' , status__code: 200});
                }
            })
            // res.status(200).send({path:`images/category/${categoryName}__dearvayu@gmail.com__${imgUid}.${fileExtension}`, message: 'successfully file upload' })
        }
    }) 
}) 

app.post('/addProduct', (req ,res)=>{

    let {id, price, previous__price, title, overview, images, quantity, description, category, post__time} = req.body;  
    let sql = `INSERT INTO product__info (product__id, price, previous__price, title, overview, images, quantity, description, category, post__time) VALUES ('${id}', '${price}', '${previous__price}', '${title}', '${overview}', '${images}', '${quantity}', '${description}', '${category}', '${post__time}')`; 
    con.query(sql, (err)=>{
        if(err){ 
            console.log(err.message);
            res.status(400).send({message: 'There  was a server side error', status__code: 400});
            
        }else{
            res.status(200).send({message: 'successfully data submitted', status__code: 200});
        }
    })
 
})

app.post('/updateProduct',(req, res) => {
    let {id, price, previous__price, title, overview, images, quantity, description, category, ID} = req.body; 
    const sql = `UPDATE product__info SET product__id='${id}',price='${price}', previous__price='${previous__price}', title='${title}', overview='${overview}', images='${images}', quantity='${quantity}', description='${description}',category='${category}'  WHERE ID = '${ID}'` 
    
    con.query(sql, (err)=>{
        if(err){ 
            // console.log(err);

            res.status(400).send({message: 'There  was a server side error', status__code: 400});
            
        }else{
            res.status(200).send({message: 'successfully data updated', status__code: 200});
        }
    })
})



// axios.get('http://localhost:3009/getProductByGrandAndId', {headers:{product__id, grand: infos.parent__father}})
// .then(res  => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err.message);
// })

app.get('/getProductByGrandAndId', (req ,res) =>  {
    let {product__id, grand} = req.headers;

    let sql = `SELECT * FROM product WHERE product__id='${product__id}' AND parent__father='${grand}'`;
    con.query(sql,(err, result)=>{
        if(err){
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            res.status(200).send({result, status__code: 200});
        }
    })
})

// grandfather, parent, child  getAllChildForPostProduct
app.get('/getAllChildForPostProduct', (req, res) => {
    let  {grandfather, parent, child} = req.headers;
    
            let sqlOther = `SELECT * FROM specifications WHERE parent__father='${grandfather}' AND parent='${parent}' AND child='${child}'`
            con.query(sqlOther, (err, resultOther)=>{
                if(err){
                    res.status(400).send({message: 'There was a server side error', status__code: 400});
                }else{ 
                    res.status(200).send({specifications: resultOther,   status__code: 200});
                }
            }) 
})

// todo Product Details Start
// todo Product Details Start
// todo Product Details Start

app.get('/getsSingleProductDetailsProduct', (req, res) => {
    let  {url} = req.headers;  
    let sqlProduct = `SELECT * FROM details__product WHERE visible__url='${url}'`
    conHello.query(sqlProduct,(err, productResult)=>{
        if(err){ 
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            let currentProduct = productResult[0];
            let newInfo = {...currentProduct};
                newInfo.infos = bufferDataConverter(currentProduct.infos); 
            
                res.status(200).send({message: "Success",  infos: {newInfo}}); 
        }
    })
}) 

app.get('/getsSingleProductDetailsSpecifications', (req, res) => {
    let  {url, parent__father} = req.headers;  
    let sqlProduct = `SELECT * FROM specifications WHERE  parent__father='${parent__father}' AND visible__url='${url}'`
    conTwo.query(sqlProduct,(err, specificationResult)=>{
        if(err){ 
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{ 
                let newSpecification = {...specificationResult[0]};  
                newSpecification.infos = bufferDataConverter(newSpecification.infos); 

                res.status(200).send({message: "Success",  infos: {newSpecification}}); 
        }
    })
}) 

app.get('/getsSingleProductDetailsDetails', (req, res) => {
    let  {url, parent__father} = req.headers;  
    let sqlProduct = `SELECT * FROM details WHERE  parent__father='${parent__father}' AND visible__url='${url}'`
    conTwo.query(sqlProduct,(err, detailsResult)=>{
        if(err){ 
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{   
                let newDetails = {...detailsResult[0]};
                newDetails.infos = bufferDataConverter(newDetails.infos);
                res.status(200).send({message: "Success",  infos: {newDetails}}); 
        }
    })
})  
// todo Product Details end
// todo Product Details end
// todo Product Details end

app.get('/getAllChild', (req, res) => {
    let  {grandfather, parent, child} = req.headers;
    
    let sql = `SELECT * FROM product WHERE parent__father='${grandfather}' AND parent='${parent}' AND child='${child}'`
    con.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            let sqlOther = `SELECT * FROM specifications WHERE parent__father='${grandfather}' AND parent='${parent}' AND child='${child}'`
            con.query(sqlOther, (err, resultOther)=>{
                if(err){
                    res.status(400).send({message: 'There was a server side error', status__code: 400});
                }else{
                    let sqlFilter = `SELECT * FROM filter__navbar WHERE parent__father='${grandfather}' AND parent='${parent}' AND child='${child}'` ;

                    con.query(sqlFilter,(err, resultFilter)=>{
                        if(err){
                            res.status(400).send({message: 'There was a server side error', status__code: 400});
                        }else{
                            res.status(200).send({product:result, specifications: resultOther, filter__navbar:resultFilter, status__code: 200});
                        }
                    })
                }
            })
        }
    })
})
// todo child product start
// todo child product start
// todo child product start
// todo child product start
// todo child product start
// app.get('/getAllChildProduct', (req, res) => {
//     let  {grandfather, parent, child} = req.headers;
    
//     let sql = `SELECT * FROM product WHERE parent__father='${grandfather}' AND parent='${parent}' AND child='${child}'`
//     conTwo.query(sql,(err, result)=>{
//         if(err){
//             console.log(err.message);
//             res.status(400).send({message: 'There was a server side error', status__code: 400});
//         }else{
//             let collection = [];
//             result.forEach((info) => {
//                 let newInfo = {...info};
//                     newInfo.infos = bufferDataConverter(info.infos);
//                     newInfo.user__guide = bufferDataConverter(info.user__guide);
//                     collection.push(newInfo);
//             })
//             res.status(200).send({product:collection,  status__code: 200});
//         }
//     })
// })

// app.get('/getAllChildSpecificationsAndFilterNavbar', (req, res) => {
//     let  {grandfather, parent, child} = req.headers;

//     let sqlOther = `SELECT * FROM specifications WHERE parent__father='${grandfather}' AND parent='${parent}' AND child='${child}'`;
//     let sqlFilter = `SELECT * FROM filter__navbar WHERE parent__father='${grandfather}' AND parent='${parent}' AND child='${child}'` ;
 
    
//     conTwo.query(sqlOther, (err, resultOther)=>{
//         if(err){
//             console.log(err.message);
//             res.status(400).send({message: 'There was a server side error', status__code: 400});
//         }else{ 
            
//             conTwo.query(sqlFilter,(err, resultFilter)=>{
//                 if(err){
//                     console.log(err.message);
//                     res.status(400).send({message: 'There was a server side error', status__code: 400});
//                 }else{

//                     let collectionFilter = [];
//                     let collectionSpecifications = []; 
//                     resultOther.forEach((info) => {
//                         let newInfo = {...info};
//                             newInfo.infos = bufferDataConverter(info.infos); 
//                             collectionSpecifications.push(newInfo);
//                     })
//                     resultFilter.forEach((info) => {
//                         let newInfo = {...info};
//                             newInfo.data = bufferDataConverter(info.data); 
//                             collectionFilter.push(newInfo);
//                     })
//                     res.status(200).send({ specifications: collectionSpecifications, filter__navbar:collectionFilter, status__code: 200});
//                 }
//             })
//         }
//     })
        
// })
// todo getAllParentProduct
app.get('/getAllParentProduct', (req, res) => {
    let  {grandfather, parent} = req.headers;
    let sql = `SELECT * FROM details__product WHERE parent__father='${grandfather}' AND parent='${parent}'`
    let sqlFilter = `SELECT * FROM filter__navbar WHERE parent__father='${grandfather}' AND parent='${parent}'` ;
    conHello.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{

            conHello.query(sqlFilter,(err, resultFilter)=>{
                if(err){
                    console.log(err.message);
                    res.status(400).send({message: 'There was a server side error', status__code: 400});
                }else{

                    let collectionFilter = []; 
                    let product = [];
                    let specifications = [];

                    result.forEach((info) => {
                        let newInfo = {...info};
                            newInfo.infos = bufferDataConverter(info.infos);  
                            product.push(newInfo);
                        let newSpecificationInfo = {} 
                            newSpecificationInfo.info = newInfo.infos.specifications
                            newSpecificationInfo.product__id = newInfo.infos.product__id;
                            specifications.push(newSpecificationInfo)
        
                    })
                    resultFilter.forEach((info) => {
                        let lowerCaseDataArray = [];
                        let newInfo = {...info};
                            newInfo.data = bufferDataConverter(info.data); 
                            collectionFilter.push(newInfo);
                    })

                    collectionFilter = serverUtils.converter.FilterNavbarConverter(collectionFilter);
                    let filterNavbar = serverUtils.dataProducer.filterNavbarAndSpecificationDataProducer(specifications, collectionFilter); 

                    res.status(200).send({ product,  filter__navbar:filterNavbar, status__code: 200});
                }
            })

        }
    })
}) 
app.get('/getAllParentFatherProduct', (req, res) => {
    let  {grandfather} = req.headers;
    let sql = `SELECT * FROM details__product WHERE parent__father='${grandfather}'`
    let sqlFilter = `SELECT * FROM filter__navbar WHERE parent__father='${grandfather}'` ;
    conHello.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{

            conHello.query(sqlFilter,(err, resultFilter)=>{
                if(err){
                    console.log(err.message);
                    res.status(400).send({message: 'There was a server side error', status__code: 400});
                }else{

                    let collectionFilter = []; 
                    let product = [];
                    let specifications = [];

                    result.forEach((info) => {
                        let newInfo = {...info};
                            newInfo.infos = bufferDataConverter(info.infos);  
                            product.push(newInfo);
                        let newSpecificationInfo = {} 
                            newSpecificationInfo.info = newInfo.infos.specifications
                            newSpecificationInfo.product__id = newInfo.infos.product__id;
                            specifications.push(newSpecificationInfo)
        
                    })
                    resultFilter.forEach((info) => {
                        let lowerCaseDataArray = [];
                        let newInfo = {...info};
                            newInfo.data = bufferDataConverter(info.data); 
                            collectionFilter.push(newInfo);
                    })

                    collectionFilter = serverUtils.converter.FilterNavbarConverter(collectionFilter);
                    let filterNavbar = serverUtils.dataProducer.filterNavbarAndSpecificationDataProducer(specifications, collectionFilter); 

                    res.status(200).send({ product,  filter__navbar:filterNavbar, status__code: 200});
                }
            })

        }
    })
}) 
app.get('/getAllChildProductFilterNavbarAndDetailsAndSpecifications', (req, res) => {
    let  {grandfather, parent, child} = req.headers;
    let sql = `SELECT * FROM details__product WHERE parent__father='${grandfather}' AND parent='${parent}' AND child='${child}'`
    let sqlFilter = `SELECT * FROM filter__navbar WHERE parent__father='${grandfather}' AND parent='${parent}' AND child='${child}'` ;
    conHello.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{

            conHello.query(sqlFilter,(err, resultFilter)=>{
                if(err){
                    console.log(err.message);
                    res.status(400).send({message: 'There was a server side error', status__code: 400});
                }else{

                    let collectionFilter = []; 
                    let product = [];
                    let specifications = [];

                    result.forEach((info) => {
                        let newInfo = {...info};
                            newInfo.infos = bufferDataConverter(info.infos);  
                            product.push(newInfo);
                        let newSpecificationInfo = {} 
                            newSpecificationInfo.info = newInfo.infos.specifications
                            newSpecificationInfo.product__id = newInfo.infos.product__id;
                            specifications.push(newSpecificationInfo)
        
                    })
                    resultFilter.forEach((info) => {
                        let lowerCaseDataArray = [];
                        let newInfo = {...info};
                            newInfo.data = bufferDataConverter(info.data); 
                            collectionFilter.push(newInfo);
                    })

                    collectionFilter = serverUtils.converter.FilterNavbarConverter(collectionFilter);
                    let filterNavbar = serverUtils.dataProducer.filterNavbarAndSpecificationDataProducer(specifications, collectionFilter);

                    res.status(200).send({ product,  filter__navbar:filterNavbar, status__code: 200});
                }
            })

        }
    })
}) 

// todo child product end
// todo child product end
// todo child product end
// todo child product end
// todo child product end

// todo parent product start
// todo parent product start
// todo parent product start
// todo parent product start
// todo parent product start


app.get('/getAllParentSpecificationsAndFilterNavbar', (req, res) => {
    let  {grandfather, parent} = req.headers;

    let sqlOther = `SELECT * FROM specifications WHERE parent__father='${grandfather}' AND parent='${parent}'`
    let sqlFilter = `SELECT * FROM filter__navbar WHERE parent__father='${grandfather}' AND parent='${parent}'` ;
 
    
    conTwo.query(sqlOther, (err, resultOther)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{ 
            
            conTwo.query(sqlFilter,(err, resultFilter)=>{
                if(err){
                    console.log(err.message);
                    res.status(400).send({message: 'There was a server side error', status__code: 400});
                }else{

                    let collectionFilter = [];
                    let collectionSpecifications = []; 
                    resultOther.forEach((info) => {
                        let newInfo = {...info};
                            newInfo.infos = bufferDataConverter(info.infos); 
                            collectionSpecifications.push(newInfo);
                    })
                    resultFilter.forEach((info) => {
                        let newInfo = {...info};
                            newInfo.data = bufferDataConverter(info.data); 
                            collectionFilter.push(newInfo);
                    })
                    res.status(200).send({ specifications: collectionSpecifications, filter__navbar:collectionFilter, status__code: 200});
                }
            })
        }
    })
        
})
// todo parent product end
// todo parent product end
// todo parent product end
// todo parent product end
// todo parent product end


// todo parentFather product start
// todo parentFather product start
// todo parentFather product start
// todo parentFather product start
// todo parentFather product start
app.get('/getAllParentFatherProduct', (req, res) => {
    let  {grandfather} = req.headers;
    
    let sql = `SELECT * FROM product WHERE parent__father='${grandfather}'`
    conTwo.query(sql,(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            let collection = [];
            result.forEach((info) => {
                let newInfo = {...info};
                    newInfo.infos = bufferDataConverter(info.infos);
                    newInfo.user__guide = bufferDataConverter(info.user__guide);
                    collection.push(newInfo);
            })
            res.status(200).send({product:collection,  status__code: 200});
        }
    })
})

app.get('/getAllParentFatherProductForAllProductUpdate', (req, res) => {
                // let collection = [];
            // result.forEach((info) => {
            //     let newInfo = {...info};
            //         newInfo.infos = bufferDataConverter(info.infos);
            //         newInfo.user__guide = bufferDataConverter(info.user__guide);
            //         collection.push(newInfo);
            // })
            // res.status(200).send({product:collection,  status__code: 200});

    let sql = `SELECT * FROM product`;
    let sqlOther = `SELECT * FROM specifications`;
    let sqlProduct = `SELECT * FROM details`
    conTwo.query(sql,(err, resultProduct)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            conTwo.query(sqlOther,(err, resultSpecifications)=>{
                if(err){
                    console.log(err.message);
                    res.status(400).send({message: 'There was a server side error', status__code: 400});
                }else{
                    conTwo.query(sqlProduct,(err, resultDetails)=>{
                        if(err){
                            console.log(err.message);
                            res.status(400).send({message: 'There was a server side error', status__code: 400});
                        }else{
                            let productsCollection  = [];
                            let DetailsCollection  = [];
                            let specificationsCollection  = [];
                            resultProduct.forEach((info) => {
                                let newInfo = {...info};
                                    newInfo.infos = bufferDataConverter(info.infos);
                                    newInfo.user__guide = bufferDataConverter(info.user__guide);
                                    productsCollection.push(newInfo);
                            }) 
                            resultSpecifications.forEach((info) => {
                                let newInfo = {...info};
                                    newInfo.infos = bufferDataConverter(info.infos); 
                                    specificationsCollection.push(newInfo);
                            }) 
                            resultDetails.forEach((info) => {
                                let newInfo = {...info};
                                    newInfo.infos = bufferDataConverter(info.infos); 
                                    DetailsCollection.push(newInfo);
                            }) 
                            res.status(200).send({productsCollection  , DetailsCollection , specificationsCollection,  status__code: 200});
                        }
                    })
                }
            })
        }
    })
})

app.get('/getAllParentFatherSpecificationsAndFilterNavbar', (req, res) => {
    let  {grandfather} = req.headers;

    let sqlOther = `SELECT * FROM specifications WHERE parent__father='${grandfather}'`
    let sqlFilter = `SELECT * FROM filter__navbar WHERE parent__father='${grandfather}'` ;
 
    
    conTwo.query(sqlOther, (err, resultOther)=>{
        if(err){
            console.log(err.message);
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{ 
            
            conTwo.query(sqlFilter,(err, resultFilter)=>{
                if(err){
                    console.log(err.message);
                    res.status(400).send({message: 'There was a server side error', status__code: 400});
                }else{

                    let collectionFilter = [];
                    let collectionSpecifications = []; 
                    resultOther.forEach((info) => {
                        let newInfo = {...info};
                            newInfo.infos = bufferDataConverter(info.infos); 
                            collectionSpecifications.push(newInfo);
                    })
                    resultFilter.forEach((info) => { // hello world for new  git
                        let newInfo = {...info};
                            newInfo.data = bufferDataConverter(info.data); 
                            collectionFilter.push(newInfo);
                    })
                    res.status(200).send({ specifications: collectionSpecifications, filter__navbar:collectionFilter, status__code: 200});
                }
            })
        }
    })
        
})
// todo parentFather product end
// todo parentFather product end
// todo parentFather product end
// todo parentFather product end
// todo parentFather product end


// app.get('/getallfilterNavbarforchangedatabase',(req, res) => {
//     let sql = `SELECT * FROM filter__navbar`
//     con.query(sql, (err, result) => {
//         if(!err){
//             res.status(200).send({data: result})
//         }else{
//             res.status(400).send({message: 'there was a server side error'})
//         }
//     })
// })

// app.post('/postallfilterNavbarforchangedatabase',(req, res) => {
//     let {child, parent, parent__father, data} = req.body.data;
//         data = bufferDataMaker(data); 
//     let sql = `INSERT INTO  filter__navbar (data, child, parent, parent__father) VALUES ('${data}', '${child}', '${parent}', '${parent__father}')`
//     conTwo.query(sql,  (err, result) => {
//         if(!err){
//             res.status(200).send({status__code: 200, message:  'successfully data submitted'})
//         }else{
//             console.log(err.message);
//         }
//     })
// })


app.get('/getAllParent', (req, res) => {

    let  {grandfather, parent} = req.headers;
    
    let sql = `SELECT * FROM product WHERE parent__father='${grandfather}' AND parent='${parent}'`
    con.query(sql,(err, result)=>{
        if(err){ 
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            let sqlOther = `SELECT * FROM specifications WHERE parent__father='${grandfather}' AND parent='${parent}'`
            con.query(sqlOther, (err, resultOther)=>{
                if(err){
                    res.status(400).send({message: 'There was a server side error', status__code: 400});
                }else{
                    let sqlFilter = `SELECT * FROM filter__navbar WHERE parent__father='${grandfather}' AND parent='${parent}'` ;

                    con.query(sqlFilter,(err, resultFilter)=>{
                        if(err){
                            res.status(400).send({message: 'There was a server side error', status__code: 400});
                        }else{
                            res.status(200).send({product:result, specifications: resultOther, filter__navbar:resultFilter, status__code: 200});
                        }
                    })
                }
            })
        }
    })
})

app.get('/getAllGrandfather', (req, res) => {

    let  {grandfather} = req.headers;
    
    let sql = `SELECT * FROM product WHERE parent__father='${grandfather}'`
    con.query(sql,(err, result)=>{
        if(err){ 
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            let sqlOther = `SELECT * FROM specifications WHERE parent__father='${grandfather}'`
            con.query(sqlOther, (err, resultOther)=>{
                if(err){
                    res.status(400).send({message: 'There was a server side error', status__code: 400});
                }else{
                    let sqlFilter = `SELECT * FROM filter__navbar WHERE parent__father='${grandfather}'` ;

                    con.query(sqlFilter,(err, resultFilter)=>{
                        if(err){
                            res.status(400).send({message: 'There was a server side error', status__code: 400});
                        }else{
                            res.status(200).send({product:result, specifications: resultOther, filter__navbar:resultFilter, status__code: 200});
                        }
                    })
                }
            })
        }
    })
})


app.get('/getAllGrandfather/:parent__father', (req, res) => {
    let  {grandfather} = req.headers;
    let sql = `SELECT * FROM product WHERE parent__father='${grandfather}'`;

    con.query(sql,(err, result)=>{
        if(err){
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{
            res.status(200).send({result, status__code: 200});
        }
    })
})

app.delete('/deleteSingleData', (req, res)=>{ 
    let {database, key} = req.headers; 
    let sql = `DELETE FROM ${database} WHERE ID='${key}'`
    con.query(sql, (err, result)=>{ 

        if(err){
            res.status(400).send({message: 'There was a server side error', status__code: 400});
        }else{ 
            res.status(200).send({message: 'Successfully data deleted', status__code: 200});
        } 
    }) 
}) 

app.post('/postQuestion', (req, res) => {
    let postData = req.body;
    let {product__id} = postData;

    let sql = `INSERT INTO review (product__id, info) VALUES ('${product__id}', '${JSON.stringify(postData)}')`;
    con.query(sql, (err, result) => {
        if(err){  
            console.log(err.message);
            res.status(400).send({message: 'There  was a server side error', status__code: 400});
        }else{
            res.status(200).send({message: 'successfully data submitted', status__code: 200});
        }
    }) 
})

app.get('/getQuestionById', (req, res) => {
    let sql = `SELECT * FROM review  WHERE product__id='${req.headers.id}'`;
    con.query(sql, (err, result) => {
        if(err){  
            console.log(err.message);
            res.status(400).send({message: 'There  was a server side error', status__code: 400});
        }else{
            res.status(200).send({result, status__code: 200});
        }
    }) 
})


app.put('/updateProductUserGuideInput',(req, res)  => { 

    let {postInfo,  product__id } = req.body; 

    let sql = `UPDATE product SET user__guide='${postInfo}' WHERE product__id='${product__id}'`;

    con.query(sql, (err, result) =>  {
        if(!err){
            res.status(200).send({message: "successfully user guide updated", status__code: 200})
        }else {
            res.status(400).send({message: "There was a server side error", status__code: 400})
        }
    })
}) 

app.put('/updateProductUserGuideOption',(req, res)  => { 
    let {postInfo,  product__id } = req.body; 

        let sqlCurrent = `UPDATE product SET user__guide='${postInfo}' WHERE product__id='${product__id}'`;
        con.query(sqlCurrent, (err ,result) => {
            if(!err){
                res.status(200).send({message: "successfully user guide updated", status__code: 200})
            }else{
                res.status(400).send({message: "There was a server side error", status__code: 400})
            }
        }) 
}) 


// getAllPosts

// app.post('/infos', (req, res) => {
//   let  { data, product__id, images, specification, overview, details, post__time} = req.body
     
//     const sql = `INSERT INTO post (data, product__id, images, specification, overview, details, post__time) VALUES ('${data}', '${product__id}','${images}','${specification}','${overview}','${details}','${post__time}')`; 
    
//     con.query(sql, (err, result) => {
//         if(err){   
//             console.log(err.message);
//             res.status(400).send({message: 'There  was a server side error', status__code: 400});
//         }else{
//             res.status(200).send({message: 'successfully data submitted', status__code: 200});
//         }
//     })  
// })

app.post('/postlink', (req, res) => {
    let  {  link ,post__time} = req.body
       
      const sql = `INSERT INTO nav__link (link, post__time) VALUES ('${link}','${post__time}')`; 
      
      con.query(sql, (err, result) => {
          if(err){   
              console.log(err.message);
              res.status(400).send({message: 'There  was a server side error', status__code: 400});
          }else{
              res.status(200).send({message: 'successfully data submitted', status__code: 200});
          }
      })  
  })

  app.get('/getAllNavLink', (req, res) => {
    let sql = `SELECT * FROM  nav__link`;
    con.query(sql, (err, result) => {
        if(err){   
            res.status(400).send({message: 'There  was a server side error', status__code: 400});
        }else{
            res.status(200).send({result, status__code: 200});
        }
    }) 
})

app.post('/subscriber', (req, res) => {
    let  {  email ,post__time} = req.body
       
      const sql = `INSERT INTO subscriber (email, post__time) VALUES ('${email}','${post__time}')`; 
      
      con.query(sql, (err, result) => {
          if(err){    
              res.status(400).send({message: 'There  was a server side error', status__code: 400});
          }else{
              res.status(200).send({message: 'successfully data submitted', status__code: 200});
          }
      })  
  })

  app.post('/productUpload', (req, res) => {
    let  { product__id,   infos, post__time, parent__father, parent, child} = req.body
       
      const sql = `INSERT INTO product (product__id,   infos, post__time, parent__father, parent, child) VALUES ('${product__id}','${infos}','${post__time}','${parent__father}','${parent}','${child}')`; 
      
      con.query(sql, (err, result) => {
          if(err){   
              console.log(err.message);
              res.status(400).send({message: 'There  was a server side error', status__code: 400});
          }else{
              res.status(200).send({message: 'successfully data submitted', status__code: 200});
          }
      })  
  })


  app.post('/detailsUpload', (req, res) => {
    let  { product__id,   details, post__time , parent__father, parent, child} = req.body
       
      const sql = `INSERT INTO details (product__id,   details,  post__time , parent__father, parent, child) VALUES ('${product__id}','${details}','${post__time}','${parent__father}','${parent}','${child}')`; 
      
      con.query(sql, (err, result) => {
          if(err){   
              console.log(err.message);
              res.status(400).send({message: 'There  was a server side error', status__code: 400});
          }else{
              res.status(200).send({message: 'successfully data submitted', status__code: 200});
          }
      })  
  })


  app.post('/specificationsUpload', (req, res) => {
    let  { product__id,   specifications, post__time, parent__father, parent, child} = req.body
       
      const sql = `INSERT INTO specifications (product__id,   specifications,  post__time, parent__father, parent, child) VALUES ('${product__id}','${specifications}','${post__time}','${parent__father}','${parent}','${child}')`; 
      
      con.query(sql, (err, result) => {
          if(err){   
              console.log(err.message);
              res.status(400).send({message: 'There  was a server side error', status__code: 400});
          }else{
              res.status(200).send({message: 'successfully data submitted', status__code: 200});
          }
      })  
  });


  app.post('/overviewsUpload', (req, res) => {
    let  { product__id,   overviews, post__time, parent__father, parent, child} = req.body
       
      const sql = `INSERT INTO overviews (product__id,   overviews,  post__time, parent__father, parent, child) VALUES ('${product__id}','${overviews}','${post__time}','${parent__father}','${parent}','${child}')`; 
      
      con.query(sql, (err, result) => {
          if(err){   
              console.log(err.message);
              res.status(400).send({message: 'There  was a server side error', status__code: 400});
          }else{
              res.status(200).send({message: 'successfully data submitted', status__code: 200});
          }
      })  
  })
  //overviewsUpload
  app.get('/getBydatabaseAndProductId', (req, res) => {
        let sql = ` SELECT * FROM images WHERE product__id='${req.headers.product__id}'`;
        con.query(sql, (err, result) => {
            if(err){   
                res.status(400).send({message: 'There  was a server side error', status__code: 400});
            }else{
                res.status(200).send({result, status__code: 200});
            }
        }) 
  })

  app.post('/filterNavbarUpload', (req, res) => {
    let  {parentFather, parent, child, data} = req.body
       
      const sql = `INSERT INTO filter__navbar (data, parent__father, parent, child) VALUES ('${data}','${parentFather}','${parent}','${child}')`; 
      
      con.query(sql, (err, result) => {
          if(err){   
              console.log(err.message);
              res.status(400).send({message: 'There  was a server side error', status__code: 400});
          }else{
              res.status(200).send({message: 'successfully data submitted', status__code: 200});
          }
      })  
  })

// product details upload  and update start 

app.get("/checkRouter", (req ,res) => {
    res.status.send("successfully  Router working");
})


// product details upload  and update end

// let sql =  `SELECT * FROM new__specifications WHERE parent__father = 'Laptop' AND brand='Asus'`;
// con.query(sql, (err, result) => {
//     if(!err){
//         let collections = []; 
//         result.forEach((info) => {
//             let newInfo = {...info}
//             newInfo.infos =  bufferDataConverter(newInfo.infos)
//             collections.push(newInfo);
//         }) 
//     }else{
//         console.log(err.message);
//     }
// })

// let sqqql= `SELECT * FROM new__product WHERE product__id='132.01.829.55'`;
// con.query(sqqql, (err ,result) => {
//     if(!err){ 
//         let newInfo = {...result[0]};
//         newInfo.infos = bufferDataConverter(result[0].infos);
//         console.log(newInfo);
        
//     }
// })

app.listen(port, (err) => {
    console.log(`Server is running on port http://localhost:3009`);
})

 