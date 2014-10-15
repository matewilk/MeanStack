var express = require('express'),
    mongoose = require('mongoose'),
    app = express();
    //keystone = require('admin').connect(mongoose, app);

var router = express.Router();

app.keystone = require('your-app-content');

app.keystone.mount('/admin', app, function() {

});

module.exports = router;