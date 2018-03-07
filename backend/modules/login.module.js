var mongoose = require('mongoose');
var Schema = mongoose.Schema;


loginSchema = new Schema({
    userName:{
     type:String,
     required:true
    },
    password:{
        type:String,
        required:true
    },  
},{versionKey:false});

module.exports = mongoose.model('authenticateuser',loginSchema);