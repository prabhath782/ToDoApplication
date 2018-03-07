var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var loginController = require('./controllers/users/user.controller.js');
var listsController = require('./controllers/lists/lists.controller.js');
var app = express();

mongoose.connect('mongodb://prabhath782:Teja782@ds121945.mlab.com:21945/todolist',{useMongoClient:true});
var db = mongoose.connection;
db.on('error',()=>{
  console.log('Connection failed');
});

db.on('open',()=>{
    console.log(' MongoDB Connection is successful')
})

//middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, application/json,Authorization,X-Requested-With, Accept');
    res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE,OPTIONS');
    next();
})
app.use('/',loginController);
app.use((err,req,res,next)=>{    
    console.error(err.message);
    //res.status(500).send('something is wrong with user login data');
    res.status(500).json({
        message: " This is an error needs to be handled"
    });
    next();
});
app.use('/',listsController)

app.use((err,req,res,next)=>{
    res.status(500).json({
        message: " this is error needs to be handled before sent"
    });
    next();
})

app.listen(process.env.PORT ||9000,()=>{
    console.log(` APP is listening on port ${process.env.PORT}`);
})

