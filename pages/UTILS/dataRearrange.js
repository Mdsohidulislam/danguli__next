
const productRearranger = {};

productRearranger.singleProductImageFinder = (current__product) =>  {
    let images = [];
    current__product.infos.images.forEach((info) => {
        images.push(info);
    })
    images.push(current__product.infos.img__src);

    return images;
}

productRearranger.singleOverviewsFinder = (database, product__id) => {
    let overviews = []
    database.forEach((info) => {
        if(info.product__id === product__id){
            overviews.push(info);
        }
    })

    return overviews[0]
}

productRearranger.singleDetailsFinder = (database, product__id) => {
    let collection = [];
    database.forEach((info) => {
        if(info.product__id === product__id){
            collection.push(info);
        }
    })

    return collection[0];
}
productRearranger.singleSpecificationsFinder = (database, product__id) => {
    let collection = [];
    database.forEach((info) => {
        if(info.product__id === product__id){
            collection.push(info);
        }
    })

    return collection[0];
}


export { productRearranger };

