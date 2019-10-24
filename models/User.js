const { Schema } = require('mongoose');

const User = new Schema({
    firstName: String,
    lastName: String,
    preferredName: String,
    year: String,
    email: String,
    cellNumber: String,
    netID: String,
    ccID: String,
    major: [String],
    interests: [String],
    github: String,
    discord: String,
    linkedin: String,
    bio: String
});


module.exports = User;
