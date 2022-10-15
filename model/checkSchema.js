const mongoose = require('mongoose');


let infosArray = ['best__rated', 'everyday__essentials', 'featured__products', 'flash__sale', 'high__light__of__the__week', 'innovated__gadget', 'pre__order', 'recently__added', 'recommended','upgrade__your__gaming__station', 'clearance', 'free__shipping', 'my__deals','work__from__anywhere']


const checkSchema = mongoose.Schema({
    parent: {type: String, required: true},
    child: {type: String, required: true},
    parent__father: {type: String, required: true},
    data: {type: Array, required: true},
    top__father: {type: String, required: true, default: infosArray[Math.ceil(Math.random()*infosArray.length -1)]}
})

const CheckSchema = mongoose.model('CheckSchema', checkSchema);

module.exports = CheckSchema;
