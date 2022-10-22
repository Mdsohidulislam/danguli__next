const mongoose = require('mongoose');
const colors = require('colors');


const connectDatabase =   () => {
    mongoose.connect(process.env.MONGO__URI,{ useNewUrlParser: true,   useUnifiedTopology: true}, (err)=>{
        if(!err){
            console.log(`Successfully database connected`.bgGreen.red);
        }else{
            console.log(err.message);
        }
    });
    
}


module.exports = {connectDatabase};