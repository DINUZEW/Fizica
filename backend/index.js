const express = require('express');
const path = require('path');
const app = express();
const route = require('./router')
const port = process.env.PORT || "8000";

app.listen(port, () =>{
    console.log(`Listening to requests  on http://localhost:${port}`)
})

router.get((req,res,next)=>{
    console.log("Something is happening here!");
    next();
});

app.get('/login', function(req,res){
    console.log('Sal frate, ce faci?')
    res.send('Sal frate')
});
