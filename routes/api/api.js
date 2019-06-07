const express = require('express');
const router = express.Router();
const thingsApi= require('./things');


router.get('/',(req, res, next)=>{
    res.status(200).json({"ok":"Version 1"})
});

router.use('/things', thingsApi);
//router.get('/hello',(req, res, next)=>{
   // res.status(200).json({"msj":"El API funciona adecuadamente"})
//});
module.exports=router;