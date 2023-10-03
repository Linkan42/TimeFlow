const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    password: String,
    userId: Number 
});

module.exports = mongoose.model("User", userSchema);

