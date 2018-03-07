var mongoose = require('mongoose');
var Schema = mongoose.Schema;

listschema = new Schema({
    
    listNames:{
        type:Array,
        required:true
    },

    _user:{
        type: Schema.Types.ObjectId,
        ref:'authenticateuser'
    }
},{versionKey:false});

module.exports = mongoose.model('listName',listschema);