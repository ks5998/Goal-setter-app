const mongoose = require('mongoose');

//creating a userSchema where the user will be get verified
const userSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: [true, 'please add a name']
    },
    email: {
        type: 'string',
        required: [true, 'please add an email'],
        unique: true
    },
    password: {
        type: 'string',
        required: [true, 'please add a password']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);