import axios from 'axios';
import { utilsHelper } from './utils';


const serverHelper = {};
serverHelper.serverHelperUtils  = {};

serverHelper.serverHelperUtils.specificationsDataConverter = (data) => { 
    let collections = []; 
    data.forEach((info) => {  
        let specification =  info.infos;
            collections.push({info: specification, product__id: info.product__id});
    });

    return collections;
}

serverHelper.serverHelperUtils.productUserGuideConverter = (userGuide) => {
    let data = JSON.parse(utilsHelper.stringOperations.stringConverter(userGuide))
    return data;
}

serverHelper.serverHelperUtils.imageLinkConverter = (src) => {
    let newRegex = /'__/g
    let str = src.replace(newRegex, '_______')
    return str;
}
// todo product converter start 

serverHelper.serverHelperUtils.singleProductsConverter = (info) => {
    let newInfo = {...info};
        let data = JSON.parse(utilsHelper.stringOperations.stringConverter(info.infos));
        let {images} = data;
           let  newImages = [];
        images.forEach((img__src) => { 
            
            newImages.push(serverHelper.serverHelperUtils.imageLinkConverter(img__src));
            ;
        })
        data.images = newImages
        data.total__sell = info.total__sell;
        newInfo.infos = data;
        newInfo.user__guide = JSON.parse(utilsHelper.stringOperations.stringConverter(info.user__guide));

        return newInfo;
}

//todo  specification
serverHelper.serverHelperUtils.SingleSpecificationsConverter = (dataSpecifications) => {
    let data = JSON.parse(utilsHelper.stringOperations.stringConverter(dataSpecifications.specifications))
    
    data =   serverHelper.serverHelperUtils.specificationsChildDataConverter(data);
    dataSpecifications.specifications = data
    
    return dataSpecifications;
}
// todo details
serverHelper.serverHelperUtils.singleDetailsConverter = (dataDetails) => {
    let details = utilsHelper.stringOperations.stringConverter(utilsHelper.stringOperations.specificationsStringConverter(dataDetails.details));
    dataDetails.details = details;
    return dataDetails;
}

// todo overview 
serverHelper.serverHelperUtils.singleOverviewsConverter = (dataOverviews) => {
    let overviews  = utilsHelper.stringOperations.stringConverter(utilsHelper.stringOperations.specificationsStringConverter(dataOverviews.overviews));
    dataOverviews.overviews = overviews;
    return dataOverviews;
} 
// todo product converter end


serverHelper.serverHelperUtils.productsDataConverter = (data) => {
    let collections = [];
    let filteredBrandProductQuantity = [];
    let brand = [];
    data.forEach((info) => {

        collections.push(info);
        if(brand.indexOf(info.child.toLowerCase()) !== -1){
            let index = brand.indexOf(info.child.toLowerCase()); 
            let {count} = filteredBrandProductQuantity[index];
            filteredBrandProductQuantity[index] = {brand: info.child.toLowerCase(), count: count+1};
        }else{
            brand.push(info.child.toLowerCase());
            filteredBrandProductQuantity.push({brand: info.child.toLowerCase(), count: 1});
        }
    })
    
    return {collections, filteredBrandProductQuantity};
}

    

serverHelper.serverHelperUtils.filterNavbarConverter = (data) => {
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

serverHelper.getAllCollection = (collection) => {
  return  axios.get('http://localhost:3009/getAllCollection',{headers: {collection: collection}})
    .then(res => { 
        return res.data
        
    }).catch(err => { 
        return err.message
    })
}

serverHelper.serverHelperUtils.productsDataConverterRMN = (data) => {
    let recommended  = [];
    let newArrivals = [];
    let mostPopular = [];

    data.forEach((info) => {
        let newInfo = {...info};
        let data = JSON.parse(utilsHelper.stringOperations.stringConverter(info.infos));
        let {images} = data;
           let  newImages = [];
        images.forEach((img__src) => {
            let newRegex = /'__/g
            newImages.push(img__src.replace(newRegex, '_______'));
        })
        data.images = newImages
        data.total__sell = info.total__sell;
        newInfo.infos = data;
        newInfo.user__guide = JSON.parse(utilsHelper.stringOperations.stringConverter(info.user__guide));
        
        if(newInfo.user__guide.Recommended){
            recommended.push(newInfo);
        }

        if(newInfo.user__guide.most__popular){
            mostPopular.push(newInfo);
        }

        if(newInfo.user__guide.new__arrival){
            newArrivals.push(newInfo);
        }
    })
    
    return { recommended , newArrivals , mostPopular}

}

serverHelper.getAllCollectionForRecommendedNewMost = () =>  {
    return  axios.get('http://localhost:3009/getAllCollection',{headers: {collection: 'product'}})
    .then(res => { 

        let result = res.data.result;

        let  results  = serverHelper.serverHelperUtils.productsDataConverterRMN(result);
        
        return results;
    }).catch(err => { 
        return err.message
    })
}
///todo child page product start 
///todo child page product start 
///todo child page product start 
///todo child page product start 
///todo child page product start 

serverHelper.getAllCurrentPageChildDataProduct = (father, parent, child) => {
   return  axios.get('http://localhost:3009/getAllChildProductFilterNavbarAndDetailsAndSpecifications',{headers:{grandfather: father, parent, child}})
    .then(res => { 
        if(res.data.status__code === 200){
            let  {product,  filter__navbar} = res.data;   
            
            return { filterNavbar: filter__navbar,  products:  product,  status__code: res.data.status__code};
        } 
    }).catch(err => { 
        console.log(err.message);
        return {message: err.message}
    })
}
serverHelper.getAllCurrentPageParentDataProduct = (father, parent) => {
    return  axios.get('http://localhost:3009/getAllParentProduct',{headers:{grandfather: father, parent}})
     .then(res => { 
         if(res.data.status__code === 200){
             let  {product,  filter__navbar} = res.data;    
             
             return { filterNavbar: filter__navbar,  products:  product,  status__code: res.data.status__code};
         } 
     }).catch(err => { 
         console.log(err.message);
         return {message: err.message}
     })
 } 
 serverHelper.getAllCurrentPageParentFatherDataProduct = (father) => {
    return  axios.get('http://localhost:3009/getAllParentFatherProduct',{headers:{grandfather: father}})
     .then(res => {  
         if(res.data.status__code === 200){
             let  {product,  filter__navbar} = res.data;    
             
             return { filterNavbar: filter__navbar,  products:  product,  status__code: res.data.status__code};
         } 
     }).catch(err => { 
         console.log(err.message);
         return {message: err.message}
     })
 }
// serverHelper.getAllCurrentPageParentDataProduct = (father, parent) => {
//     return  axios.get('http://localhost:3009/getAllParentProduct',{headers:{grandfather: father, parent}})
//      .then(res => {  
//          if(res.data.status__code === 200){
//              let  {product} = res.data;
 
//              let productConvertData = serverHelper.serverHelperUtils.productsDataConverter(product);
 
//              return {products: productConvertData,  status__code: res.data.status__code};
//          } 
//      }).catch(err => { 
//          console.log(err.message);
//          return {message: err.message}
//      })
//  }

// serverHelper.getAllCurrentPageChildDataSpecificationsAndFilterNavbar = (father, parent, child) => {
//     return  axios.get('http://localhost:3009/getAllChildSpecificationsAndFilterNavbar',{headers:{grandfather: father, parent, child}})
//      .then(res => { 
//          if(res.data.status__code === 200){
//              let  {  filter__navbar, specifications} = res.data; 
//              let filterNavbarConvertData = serverHelper.serverHelperUtils.filterNavbarConverter(filter__navbar);
//              let specificationsConvertData = serverHelper.serverHelperUtils.specificationsDataConverter(specifications);
 
//              return { filterNavbar: filterNavbarConvertData, specifications:  specificationsConvertData, status__code: res.data.status__code};
//          } 
//      }).catch(err => { 
//          console.log(err.message);
//          return {message: err.message}
//      })
//  }

///todo child page product end
///todo child page product end
///todo child page product end
///todo child page product end
///todo child page product end
///todo child page product end
///todo child page product end

// todo parent page product start
// todo parent page product start
// todo parent page product start
// todo parent page product start
// todo parent page product start
// todo parent page product start
// serverHelper.getAllCurrentPageParentDataProduct = (father, parent) => {
//     return  axios.get('http://localhost:3009/getAllParentProduct',{headers:{grandfather: father, parent}})
//      .then(res => {  
//          if(res.data.status__code === 200){
//              let  {product} = res.data;
 
//              let productConvertData = serverHelper.serverHelperUtils.productsDataConverter(product);
 
//              return {products: productConvertData,  status__code: res.data.status__code};
//          } 
//      }).catch(err => { 
//          console.log(err.message);
//          return {message: err.message}
//      })
//  }
 
 serverHelper.getAllCurrentPageParentDataSpecificationsAndFilterNavbar = (father, parent) => {
     return  axios.get('http://localhost:3009/getAllParentSpecificationsAndFilterNavbar',{headers:{grandfather: father, parent}})
      .then(res => {  
          if(res.data.status__code === 200){
              let  {  filter__navbar, specifications} = res.data; 
              let filterNavbarConvertData = serverHelper.serverHelperUtils.filterNavbarConverter(filter__navbar);
              let specificationsConvertData = serverHelper.serverHelperUtils.specificationsDataConverter(specifications);
  
              return { filterNavbar: filterNavbarConvertData, specifications:  specificationsConvertData, status__code: res.data.status__code};
          } 
      }).catch(err => { 
          console.log(err.message);
          return {message: err.message}
      })
  }
  // todo parent page  product end
  // todo parent page  product end
  // todo parent page  product end
  // todo parent page  product end
  // todo parent page  product end
  // todo parent page  product end


  
// todo parentFather page product start
// todo parentFather page product start
// todo parentFather page product start
// todo parentFather page product start
// todo parentFather page product start
// todo parentFather page product start
// serverHelper.getAllCurrentPageParentFatherDataProduct = (father) => {
//     return  axios.get('http://localhost:3009/getAllParentFatherProduct',{headers:{grandfather: father}})
//      .then(res => {  
//          if(res.data.status__code === 200){
//              let  {product} = res.data;
 
//              let productConvertData = serverHelper.serverHelperUtils.productsDataConverter(product);
 
//              return {products: productConvertData,  status__code: res.data.status__code};
//          } 
//      }).catch(err => { 
//          console.log(err.message);
//          return {message: err.message}
//      })
//  }
 
 serverHelper.getAllCurrentPageParentFatherDataSpecificationsAndFilterNavbar = (father) => {
     return  axios.get('http://localhost:3009/getAllParentFatherSpecificationsAndFilterNavbar',{headers:{grandfather: father}})
      .then(res => {  
          if(res.data.status__code === 200){
              let  {  filter__navbar, specifications} = res.data; 
              let filterNavbarConvertData = serverHelper.serverHelperUtils.filterNavbarConverter(filter__navbar);
              let specificationsConvertData = serverHelper.serverHelperUtils.specificationsDataConverter(specifications);
  
              return { filterNavbar: filterNavbarConvertData, specifications:  specificationsConvertData, status__code: res.data.status__code};
          } 
      }).catch(err => { 
          console.log(err.message);
          return {message: err.message}
      })
  }
  // todo parentFather page  product end
  // todo parentFather page  product end
  // todo parentFather page  product end
  // todo parentFather page  product end
  // todo parentFather page  product end
  // todo parentFather page  product end


serverHelper.getAllCurrentPageParentData = (father, parent) => {
    return  axios.get('http://localhost:3009/getAllParent',{headers:{grandfather: father, parent}})
    .then(res => { 
        if(res.data.status__code === 200){
            let  {product, filter__navbar, specifications} = res.data;

            let productConvertData = serverHelper.serverHelperUtils.productsDataConverter(product);
            let filterNavbarConvertData = serverHelper.serverHelperUtils.filterNavbarConverter(filter__navbar);
            let specificationsConvertData = serverHelper.serverHelperUtils.specificationsDataConverter(specifications);

            return {products: productConvertData, filterNavbar: filterNavbarConvertData, specifications:  specificationsConvertData, status__code: res.data.status__code};
        } 
    }).catch(err => { 
        console.log(err.message);
        return {message: err.message}
    })
}

serverHelper.getAllCurrentPageGrandfatherData = (father) => {
    return  axios.get('http://localhost:3009/getAllGrandfather',{headers:{grandfather: father}})
    .then(res => { 
        if(res.data.status__code === 200){
            let  {product, filter__navbar, specifications} = res.data;

            let productConvertData = serverHelper.serverHelperUtils.productsDataConverter(product);
            let filterNavbarConvertData = serverHelper.serverHelperUtils.filterNavbarConverter(filter__navbar);
            let specificationsConvertData = serverHelper.serverHelperUtils.specificationsDataConverter(specifications);

            return {products: productConvertData, filterNavbar: filterNavbarConvertData, specifications:  specificationsConvertData, status__code: res.data.status__code};
        } 
    }).catch(err => { 
        console.log(err.message);
        return {message: err.message}
    })
} 

serverHelper.getAllCurrentPageCartOrWishlist= (ides) => {
return  axios.get('http://localhost:3009/getAllCollection',{headers:{collection: 'product'}})
    .then(res => { 
        if(res.data.status__code === 200){
            
            let  { result } = res.data; 

            let {collections} = serverHelper.serverHelperUtils.productsDataConverter(result);
            
            let newProductDataForCartOrWishList = [];
            let newFilterIdes = [];

            collections.forEach((info)=>{
                if (ides.indexOf(info.product__id) !== -1 && newFilterIdes.indexOf(info.product__id) === -1) {
                    newProductDataForCartOrWishList.push(info);
                    newFilterIdes.push(info.product__id);
                }
            })  

            
            return {newProductDataForCartOrWishList,  status__code: res.data.status__code};
        } 
    }).catch(err => {   
        return {message: err.message}
    })
}

serverHelper.serverHelperUtils.specificationsChildDataConverter = (data)  => {
    let singleData = [];
data.forEach((info) => { 
    let headItem = {};
    let {title:headtTitle, infos} = info; 
    let collections = []
    infos.forEach((info) =>  { 
        let {title:childHead, info:childInfo} = info;
        childHead = utilsHelper.stringOperations.specificationsStringConverter(childHead);
        childInfo = utilsHelper.stringOperations.specificationsStringConverter(childInfo);
        collections.push({title: childHead, info: childInfo})
    })
    singleData.push({title: headtTitle, infos: collections});
}) 
return singleData;
}

serverHelper.handleDeleteData = (database, ID) => {

    axios.delete(`http://localhost:3009/deleteSingleData`,{headers:{database: database, key: ID}})
    .then(res=>{ 
        if(res.data.status__code === 200){
            document.getElementById(ID).style.display='none';
        }
    }).catch(err =>{  
        alert(err.message)
    }) 
}
export { serverHelper };

// let specificationsHeaders = []; 

// resultFilter.forEach((info, index) => {
//     let {data} = info;
//     let array  = JSON.parse(stringConverter(data));
//     array.forEach((infoChild =>  {
//         specificationsHeaders.push(infoChild)
//     }))
// })
// console.log(specificationsHeaders);

