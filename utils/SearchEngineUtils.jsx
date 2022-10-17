import  utilsHelper  from "./utils";

const SearchEngine = {}; 

SearchEngine.ParentProductsFinder = (category,  parent,   array, subCategory) =>  {
    
    let sortedArray = [];
    let collections = [];
    let productId = [];

    let filteredBrandProductQuantity = []
    array.forEach((info, index) => {
        if(info.category.toLowerCase() === category.toLowerCase() && info.parent.toLowerCase() === category.toLowerCase() && info.subCategory.toLowerCase() === parent.toLowerCase()){
            sortedArray.push(info)
            if(collections.indexOf(info.collection.toLowerCase()) !== -1){
                let index = collections.indexOf(info.collection.toLowerCase()); 
                let {count} = filteredBrandProductQuantity[index];
                filteredBrandProductQuantity[index] = {brand: info.collection.toLowerCase(), count: count+1};
            }else{
                collections.push(info.collection.toLowerCase());
                filteredBrandProductQuantity.push({brand: info.collection.toLowerCase(), count: 1});
            }
            if(productId.indexOf(info.product__id) === -1){
                productId.push(info.product__id);
            } 
        }
    })
    
    if(!sortedArray.length){
        array.forEach((info, index) => {
            if( info.parent.toLowerCase() === parent.toLowerCase() && info.subCategory.toLowerCase() === subCategory.toLowerCase()){
                sortedArray.push(info)
                if(collections.indexOf(info.collection.toLowerCase()) !== -1){
                    let index = collections.indexOf(info.collection.toLowerCase()); 
                    let {count} = filteredBrandProductQuantity[index];
                    filteredBrandProductQuantity[index] = {brand: info.collection.toLowerCase(), count: count+1};
                }else{
                    collections.push(info.collection.toLowerCase());
                    filteredBrandProductQuantity.push({brand: info.collection.toLowerCase(), count: 1});
                }
                if(productId.indexOf(info.product__id) === -1){
                    productId.push(info.product__id);
                } 
            }
        })
    } 

    return {sortedArray, filteredBrandProductQuantity, productId};
}

SearchEngine.ChildProductsFinder = (category,  parent,   array, subCategory) =>  {
    
    let sortedArray = [];
    let collections = [];
    let filteredBrandProductQuantity = []
    let productId = [];

    array.forEach((info, index) => {
        if(info.category.toLowerCase() === subCategory.toLowerCase() && info.collection.toLowerCase() === category.toLowerCase() && info.parent.toLowerCase() === subCategory.toLowerCase() && info.subCategory.toLowerCase() === parent.toLowerCase()){
            sortedArray.push(info)
            if(collections.indexOf(info.collection.toLowerCase()) !== -1){
                let index = collections.indexOf(info.collection.toLowerCase()); 
                let {count} = filteredBrandProductQuantity[index];
                filteredBrandProductQuantity[index] = {brand: info.collection.toLowerCase(), count: count+1};
            }else{
                collections.push(info.collection.toLowerCase());
                filteredBrandProductQuantity.push({brand: info.collection.toLowerCase(), count: 1});
            }   

            if(productId.indexOf(info.product__id) === -1){
                productId.push(info.product__id);
            } 

        }
    })
    
    if(!sortedArray.length){
        array.forEach((info, index) => {
            if(info.category.toLowerCase() === category.toLowerCase() && info.parent.toLowerCase() === parent.toLowerCase() && info.subCategory.toLowerCase() === subCategory.toLowerCase()){
                sortedArray.push(info)
                if(collections.indexOf(info.collection.toLowerCase()) !== -1){
                    let index = collections.indexOf(info.collection.toLowerCase()); 
                    let {count} = filteredBrandProductQuantity[index];
                    filteredBrandProductQuantity[index] = {brand: info.collection.toLowerCase(), count: count+1};
                }else{
                    collections.push(info.collection.toLowerCase());
                    filteredBrandProductQuantity.push({brand: info.collection.toLowerCase(), count: 1});
                }
                if(productId.indexOf(info.product__id) === -1){
                    productId.push(info.product__id);
                } 
            }
        })
    }

    if(!sortedArray.length){
        array.forEach((info, index) => {
            if(info.collection.toLowerCase() === category.toLowerCase() && info.parent.toLowerCase() === parent.toLowerCase() && info.subCategory.toLowerCase() === subCategory.toLowerCase()){
                sortedArray.push(info)
                if(collections.indexOf(info.collection.toLowerCase()) !== -1){
                    let index = collections.indexOf(info.collection.toLowerCase()); 
                    let {count} = filteredBrandProductQuantity[index];
                    filteredBrandProductQuantity[index] = {brand: info.collection.toLowerCase(), count: count+1};
                }else{
                    collections.push(info.collection.toLowerCase());
                    filteredBrandProductQuantity.push({brand: info.collection.toLowerCase(), count: 1});
                }

                if(productId.indexOf(info.product__id) === -1){
                    productId.push(info.product__id);
                } 
            }
        })
    }

    if(!sortedArray.length){
        array.forEach((info, index) => {
            if(info.parent.toLowerCase() === category.toLowerCase() && info.category.toLowerCase() === category.toLowerCase()){
                sortedArray.push(info)
                if(collections.indexOf(info.collection.toLowerCase()) !== -1){
                    let index = collections.indexOf(info.collection.toLowerCase()); 
                    let {count} = filteredBrandProductQuantity[index];
                    filteredBrandProductQuantity[index] = {brand: info.collection.toLowerCase(), count: count+1};
                }else{
                    collections.push(info.collection.toLowerCase());
                    filteredBrandProductQuantity.push({brand: info.collection.toLowerCase(), count: 1});
                }

                if(productId.indexOf(info.product__id) === -1){
                    productId.push(info.product__id);
                } 
            }
        })
    }

    return {sortedArray, filteredBrandProductQuantity, productId};
} 

SearchEngine.handleCollectionFilter = (collection, array ) => {
    let sortedArray = [];
    let collections = [];
    let filteredBrandProductQuantity = [] 
    let productId = [];


    array.forEach((info, index) => {
        if(info.collection.toLowerCase() === collection.toLowerCase()){
            sortedArray.push(info)
            if(collections.indexOf(info.collection) !== -1){
                let index = collections.indexOf(info.collection); 
                let {count} = filteredBrandProductQuantity[index];
                filteredBrandProductQuantity[index] = {brand: info.collection, count: count+1};
            }else{
                collections.push(info.collection);
                filteredBrandProductQuantity.push({brand: info.collection, count: 1});
            }
            
            if(productId.indexOf(info.product__id) === -1){
                productId.push(info.product__id);
            } 
        }
    })
    
    return {sortedArray, filteredBrandProductQuantity, productId};
}
 
SearchEngine.handleFilterProductsSpecifications = (specifications, keys) => { // current work 

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
SearchEngine.productFinder = (id, array) => {
    let products = array.filter((info) => info.product__id == id)
    return products[products.length -1];
}

SearchEngine.productsIdesFinder = (idesArray, productsArray) => {
    let newProducts = [];
    let pushedIdes = [];
    productsArray.forEach((info) => {
        if(idesArray.indexOf(info.product__id) !== -1 && pushedIdes.indexOf(info.product__id) === -1){
            newProducts.push(info);
        }
    })

    return newProducts;
}

SearchEngine.sortEngine = {}

SearchEngine.sortEngine.lowToHighPrice = (array) => {
    return array.sort((a, b) => a.current__price - b.current__price );
}
SearchEngine.sortEngine.highToLowPrice = (array) => {
    return array.sort((a, b) =>  b.current__price - a.current__price );
}

SearchEngine.sortEngine.highToLowDiscount = (array) => {
    return array.sort((a, b) =>  (b.previous__price- b.current__price) - (a.previous__price -  a.current__price) );
}
SearchEngine.sortEngine.lowToHighDiscount = (array) => {
    return array.sort((a, b) =>  (a.previous__price -  a.current__price) - (b.previous__price- b.current__price) );
}

SearchEngine.sortEngine.mostPopular = (array) => {
    return array.sort((a, b) =>  b.total__sell -  a.total__sell );
}

SearchEngine.sortEngine.aToZProductName = (array) => {
    
    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.sortStr.split(' ')[1].toUpperCase();
        const bandB = b.sortStr.split(' ')[1].toUpperCase();
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }
      
    return array.sort(compare)

} 

SearchEngine.sortEngine.zToAProductName = (array) => {

    function compare(a, b) { 
        
        const bandA = a.sortStr.split(' ')[1].toUpperCase();
        const bandB = b.sortStr.split(' ')[1].toUpperCase();
    
    let comparison = 0;
    if (bandA > bandB) {
        comparison = -1;
    } else if (bandA < bandB) {
        comparison = 1;
    }
    return comparison;
    }
    
    return array.sort(compare)
}
SearchEngine.sortEngine.aToZBrand = (array) => {
        
    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.sortStr.split(' ')[0].toUpperCase();
        const bandB = b.sortStr.split(' ')[0].toUpperCase();
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }
      
    return array.sort(compare)
}
SearchEngine.sortEngine.zToABrand = (array) => {
    
    function compare(a, b) { 
        
        const bandA = a.sortStr.split(' ')[0].toUpperCase();
        const bandB = b.sortStr.split(' ')[0].toUpperCase();
    
    let comparison = 0;
    if (bandA > bandB) {
        comparison = -1;
    } else if (bandA < bandB) {
        comparison = 1;
    }
    return comparison;
    }
    
    return array.sort(compare)
}

export default SearchEngine; 