const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const router = require('./router');
router(app);


const server = http.createServer(app);
mongoose.connect('mongodb+srv://sunny:test@cluster0.owpq5.mongodb.net/Test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(()=>{
    console.log("Connect DB");
    server.listen(2021,(req,res)=>{
        console.log("Listening 2021");
    });
})