var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    keystone = require('keystone').connect(mongoose, app);

var router = express.Router();

keystone.init({

    'name': 'My Project',

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': ['public'],

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': false,
    'mongo': 'mongodb://localhost/my-project',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': '(your secret here)'

});

//require('./models');

//keystone.set('routes', require('./routes'));

keystone.start();

module.exports = router;