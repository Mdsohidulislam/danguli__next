const mongoose = require('mongoose');

const promotionProductSchema = mongoose.Schema({
    promotion__name: {type: String, required: true},
    product__ides: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product', unique: true}]
})

// users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
const PromotionProduct = mongoose.model('PromotionProduct', promotionProductSchema);

module.exports  = PromotionProduct;