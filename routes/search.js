var express = require('express');
var router = express.Router();
var crimesModel = require('../models/crimesModel');


//trys to find id by category
router.get('/findByCategory/:category', (req, res)=> {
    crimesModel.find(
        {category:req.params.category},
        (errors, results)=>{
            if (errors) res.send(errors);
            else res.send(results);
        })
});

//find by Name
router.get('/findByName/:name', (req, res)=> {
    crimesModel.find(
        {name:req.params.name},
        (errors, results)=>{
            if (errors) res.send(errors);
            else res.send(results);
        })
});






module.exports = router;



