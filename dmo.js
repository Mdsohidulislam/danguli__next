

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
            total__interest__price: (cartStoredInfo.quantity * infoCPcartStoredInfo.quantity * infoCP) - (cartStoredInfo.quantity * infoWP) 
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