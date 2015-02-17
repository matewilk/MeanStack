var express = require('express');
var router = express.Router();
var db = require('../../database');
//upload schema defined in /database directory
var Users = db.users;

/* GET users listing. */
router.get('/', function(req, res) {
    Users.find({},{},function(e,docs){
        res.send(docs);
    });
});

module.exports = router;
