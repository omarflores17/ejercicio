const express= require('express');
var router = express.Router();

var thingsCollection=[];

var thingsStruct={
    "id": "uuid",
    "clase":"",
    "seccion":"",
    "cupos":0,
    "campus": "",
    "docente": ""
};

router.get('/',(req, res, next)=>{
    res.status(200).json({thingsCollection})
});

router.post('/',(req, res, next)=>{
    var newElement = Object.assign(thingsStruct, req.body, {"id": "1","clase":"matematicas", "seccion":"1301", 
"cupos":1,"campus":"SCJ", "docente":"Orlando"});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
});

module.exports=router;