const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    username : { type: String },
    password : { type: String }
})

const User = mongoose.model('User', admin);

module.exports = User;