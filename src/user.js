const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
});

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;