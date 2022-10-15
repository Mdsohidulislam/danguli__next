const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    product__id: {type: String, required: true},
    child: {type: String, required: true},
    parent: {type: String, required: true},
    parent__father: {type: String, required: true},
    brand: {type: String, required: true},
    visible__url: {type: String, required: true},
    infos: {type: Object, required: true},
    quantity: {type: Number, required: true},
    views: {type: Number, required: true},
    total__sell: {type: Number, required: true},
    search__trim: {type: String, required: true, trim: true},
    top__father: {type: String, required: true, default: 'Computer & Accessories'}
})


const Product = mongoose.model('Product', productSchema);

module.exports  = Product;