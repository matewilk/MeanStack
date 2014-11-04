var express = require('express');
var router = express.Router();
var db = require('../../database');

//var Schema = db.Schema;
//
//// login schema
//var adminLogin = new Schema({
//    username: String,
//    password: String
//}, {collection: 'users'});
//
//var adminLoginTest = db.model('users', adminLogin);

/* GET users listing. */
router.get('/', function(req, res) {

//    adminLoginTest.find({}, function(err, data){
//        if(err) console.log(err);
//        console.log(">>>> " + data );
//    });
    var users = db.collection('users');
    users.find({},{},function(e,docs){
        res.send(docs);
    });
    //res.send(test);
    //res.send('respond with a resource');
});

module.exports = router;
