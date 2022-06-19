const EXPRESS = require('express');
const APP = EXPRESS();
const CORS = require('cors');
const BODY_PARSER = require('body-parser');
const BOOKS_ROUTE = require('./routes/books');
const MONGOOSE = require('mongoose');

APP.use(CORS());
APP.use(BODY_PARSER.json());
APP.use('/books', BOOKS_ROUTE);

MONGOOSE.connect(
'mongodb+srv://thegera4:ldVg6eGQ38omo3Cg@cluster0.c7xoo.mongodb.net/?retryWrites=true&w=majority',
(event) =>{
    console.log("Connected to DB");
}).catch(err => console.log(err));

APP.listen(4000);