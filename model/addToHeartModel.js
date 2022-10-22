const mongoose = require('mongoose');

const addToCartSchema = mongoose.Schema({
    user__key : {type: String, required: true, unique: true},
    product__ides:  [{type: String, unique: true}],
    product__id__with__quantity: {type:Array}
},{timestamps: true});

const AddToHeartModel = mongoose.model('AddToHeartModel', addToCartSchema);

module.exports = AddToHeartModel;