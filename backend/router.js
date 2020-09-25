const express = require("express");
router = express.Router();

router.get((req,res,next)=>{
    console.log("Something is happening here!");
    next();
});

router.get('/login', function(req,res){
    console.log('Sal frate, ce faci?')
});

module.exports.router = router;
