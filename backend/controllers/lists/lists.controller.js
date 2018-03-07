var express = require('express');
var router = express.Router();
var listModel = require('../../modules/lists.model.js');
var userid = require('../users/user.controller.js').userId;

router.post('/lists',(req,res,next)=>{   
    //let listName = req.body;
    console.log(req.body);
    
    
    console.log(`--------------${userid}------------`);
    // listModel.findOne({"userId":userid},(err,data)=>{
    //     if(err){
    //         console.error(err);
            
    //     } 

    //     else{
 
    //         //res.json(data.listName);               

    //     }

    listmodel = new listModel({'ListNames':''});
    



    });
    
//});

module.exports = router;

