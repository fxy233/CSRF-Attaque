var express = new require('express')
var router = express.Router()
var fs = require('fs')

//Index page: two options
router.get('/',function (req,res){
        res.render('index.html')
})



module.exports = router