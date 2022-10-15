const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors'); 
const port = process.env.PORT || 7000;
const dotenv = require('dotenv');
const { connectDatabase } = require('./config/connectdb');
const { NotFound, ErrorHandler } = require('./ErrorHandling/Error');
const productRouter = require('./Routes/productRoute');
const filterNavbarRoute = require('./Routes/filterNavbarRoute');
dotenv.config();
connectDatabase();

var whitelist = [process.env.W_ONE, process.env.W_TWO]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/',(req ,res) =>{
  res.status(200).send('<h1>Hello world  gonneeeeeeeeeeeeeeeeeeeeeeeee</h1>')
})

app.get('/post', (req ,res) => {
  res.status(200).send('hello post api')
})

// app config apply start
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json({limit:'500mb'}));
    app.use(cors(corsOptions));
// app config apply end



app.use('/api/product', productRouter);
app.use('/api/filter__navbar', filterNavbarRoute);
app.use(NotFound);
app.use(ErrorHandler); 

app.listen(port, (err) => {
    if(!err){
        console.log(`Server is running on port http://localhost:${port}`);
    }
})