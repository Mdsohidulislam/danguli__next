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
filterUtils.productQuantityAdd = (cartInfos, postInfo) => {
    let newPostInfo = {...cartInfos._doc};
    let postProductIndex = newPostInfo.product__ides.indexOf(postInfo)

    
    if( postProductIndex === -1 ){
        newPostInfo.product__ides.push(postInfo);
        newPostInfo.product__id__with__quantity.push({product__id: postInfo, quantity: 1})
    }else{
        newPostInfo.product__id__with__quantity[postProductIndex].quantity = newPostInfo.product__id__with__quantity[postProductIndex].quantity+1;
    }

    return newPostInfo;
}

filterUtils.uniqueProductGenerator = (products) => {
    let ides = [];
    let product = [];
    products.forEach((info) => {
        let realProduct = {...info._doc};
        if(ides.indexOf(realProduct.product__id) === -1){
            product.push(realProduct);
            ides.push(realProduct.product__id)
        }
    })

    return product;
}

filterUtils.GetProductQuantityProductAllPriceAndMany = (products, currentData) => {
    let currentProductsIdes = currentData.product__ides;
    let currentProductWith = currentData.product__id__with__quantity;
    let newProducts = [];
    let total__quantity = 0;
    let total__whole__price = 0;
    let total__current__price = 0;
    let total__previous__price = 0;
    let total__interest__price = 0;

    products.forEach((info) => {
        let index = currentProductsIdes.indexOf(info.product__id);
        let cartStoredInfo = currentProductWith[index];
        let infoWP = info.infos.whole__price ? info.infos.whole__price : (info.infos.current__price / 10) * 9;
            info.infos.whole__price = info.infos.whole__price ? info.infos.whole__price : (info.infos.current__price / 10) * 9;
        let infoCP = info.infos.current__price;
        let infoPP = info.infos.previous__price;
        let cartInfo = {
            quantity: cartStoredInfo.quantity,
            total__whole__price : cartStoredInfo.quantity * infoWP,
            total__current__price: cartStoredInfo.quantity * infoCP,
            total__previous__price: cartStoredInfo.quantity * infoPP,
            total__interest__price: (cartStoredInfo.quantity * infoCP) - (cartStoredInfo.quantity * infoWP) 
        };
        info.cartInfo = cartInfo;
        total__quantity += cartInfo.quantity;
        total__whole__price += cartInfo.total__whole__price;
        total__current__price += cartInfo.total__current__price;
        total__previous__price += cartInfo.total__previous__price;
        total__interest__price += cartInfo.total__interest__price;
        newProducts.push(info);
    })
    return {products: newProducts,ides:currentProductsIdes, total__cart__info: {total__quantity, total__current__price, total__whole__price, total__previous__price, total__interest__price}}
}

module.exports = filterUtils;