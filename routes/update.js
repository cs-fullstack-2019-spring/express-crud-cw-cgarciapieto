var express = require('express');
var router = express.Router();
var crimesModel = require('../models/crimesModel');

//update the categories code and name
router.get('/update/:', (req, res)=>{
    crimesModel.updateOne({category:req.params.category},{code:req.params.code, name:req.params.name,}, (error,)=>{
        if(error) res.send(error);
        else res.send("Updated code and name");
    });
});

module.exports = router;