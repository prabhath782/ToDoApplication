let express = require('express');
let router = express.Router();
let loginModel = require('../../modules/login.module.js');
let listsController = require('../lists/lists.controller.js');
let listModel = require('../../modules/lists.model');
let userid = " this is a test";

router.post('/login', (req, res) => {
    let userId = "";    
    console.log(`this is the user ${req.body.userName}`)
    let userLogin = loginModel.findOne({ userName: req.body.userName }, (err, user) => {
        if (err) {
            console.log('this is a server error');
            
        }
        else if (user) {
            userId = user._id;                       
            res.json(user);
        }
        else {
            res.status(401).json({ "data": "invalid-data" });
        }
    })



}, (err) => { console.log('this is the error request') })


module.exports = router;

