/**
 * example schema (for users)
 **/

var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

//Define the Schema
var userSchema = new Schema({
    _isAdmin : {type: Boolean, required: true},
    password : {type: String, required: true},
    email : {type: String, required: true, unique: true}
});

var User = mongoose.model('User', userSchema, 'users');

//var modelSchema = new Schema({},{ strict: false });
//var User = mongoose.model( 'User', modelSchema, 'users' );

module.exports = User;