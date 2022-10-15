const serverUtils = require("./serverUtils");

const filterUtils = {};

filterUtils.brandFilter = (result) => { 
    let product = []; 
    let brandCollection = [];
    let brandIdCollection = []; 
    let typeCollection = [];
    let typeIdCollection = [];
    let filter__navbar = [];

    result.forEach((newInfo) => {
        let info =  newInfo._doc; 
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
    // res.status(200).send({ products: product, filterNavbar: filter__navbar ,status__code: 200});
    return {product, filter__navbar};
}

filterUtils.allBrandFilter = (result) => {
    let brandCollection = [];
    let brandIdCollection = []; 
    let allProducts = result;

    allProducts.forEach(info => { 
        info = info._doc;
        if(brandCollection.indexOf(info.brand) === -1){
            brandCollection.push(info.brand);
            brandIdCollection.push([info.product__id]);
        }else{
            let brandIndex = brandCollection.indexOf(info.brand);
                brandIdCollection[brandIndex].push(info.product__id)
        }
    })
    let brandDataset = [];
    brandCollection.forEach((info, index) => {
        brandDataset.push([info, brandIdCollection[index]])
    })   
    return {brandDataset}
}

filterUtils.getAllCategoryCollection = (result) => {
    let brandCollection = [];
    let brandIdCollection = []; 
    let allProducts = result;

    allProducts.forEach(info => { 
        info = info._doc;
        if(brandCollection.indexOf(info.parent) === -1){
            brandCollection.push(info.parent);
            brandIdCollection.push([info.product__id]);
        }else{
            let brandIndex = brandCollection.indexOf(info.parent);
                brandIdCollection[brandIndex].push(info.product__id)
        }
    })
    let brandDataset = [];
    brandCollection.forEach((info, index) => {
        brandDataset.push([info, brandIdCollection[index]])
    })  

    return {brandDataset};
}

filterUtils.getSingleCategory = (result) => {
    let product = []; 
    let brandCollection = [];
    let brandIdCollection = []; 
    let typeCollection = [];
    let typeIdCollection = [];
    let filter__navbar = [];

    result.forEach((newInfo) => {
            let info = newInfo._doc;
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
    // res.status(200).send({ products: product, filterNavbar: filter__navbar ,status__code: 200});
    return {product, filter__navbar};
}

filterUtils.childProductAndSpecification = (result, resultFilter) => {
                    let collectionFilter = []; 
                    let product = [];
                    let specifications = [];

                    result.forEach((info) => {

                        let newInfo = info._doc 
                        product.push(newInfo);
                        let newSpecificationInfo = {} 
                            newSpecificationInfo.info = newInfo.infos.specifications
                            newSpecificationInfo.product__id = newInfo.infos.product__id;
                            specifications.push(newSpecificationInfo)
        
                    })
                    resultFilter.forEach((info) => { 
                        let newInfo =   info._doc
                            collectionFilter.push(newInfo);
                    })

                    collectionFilter = serverUtils.converter.FilterNavbarConverter(collectionFilter);
                    let filterNavbar = serverUtils.dataProducer.filterNavbarAndSpecificationDataProducer(specifications, collectionFilter);

                    // res.status(200).send({ product,  filter__navbar:filterNavbar, status__code: 200});
                    return {product, filterNavbar};
}
module.exports = filterUtils;