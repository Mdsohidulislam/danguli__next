const mongoose = require('mongoose');


const filterNavbarSchema = mongoose.Schema({
    parent: {type: String, required: true},
    child: {type: String, required: true},
    parent__father: {type: String, required: true},
    data: {type: Array, required: true},
    top__father: {type: String, required: true, default: 'Computer & Accessories'}
})

const FilterNavbar = mongoose.model('FilterNavbar', filterNavbarSchema);

module.exports = FilterNavbar;