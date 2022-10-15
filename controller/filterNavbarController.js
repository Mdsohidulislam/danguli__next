const asyncHandler = require('express-async-handler');
const CheckSchema = require('../model/checkSchema');
const FilterNavbar = require('../model/filterNavbarMode');
    

const filterNavbarMultiplePost = asyncHandler(async (req, res) => {
    const data = req.body;  
    if(data.length < 2){
        res.status(400)
        throw new Error('Please Upload multiple product');
    }

    try {
        const response = await CheckSchema.insertMany(data);

        res.status(200).json({message: 'Successfully products uploaded', response});
        
    } catch (error) {
        res.status(400);
        throw new Error(error.message)
    }
})


module.exports =  {filterNavbarMultiplePost};