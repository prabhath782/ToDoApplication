const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const login = require('../modules/login.module.js');

class LoginRepository{

    loginUser(userName,callback){

       login.findOne({"userName":userName},(err,user)=>{

           if(err){
               console.error(`This is an error instance`);
               return callback(null);
           }

           else{
               callback(null,{
                   user:user
               });
           }
       });
    }

}