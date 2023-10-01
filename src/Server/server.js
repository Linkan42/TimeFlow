const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./user.js');

const app = express();

const my_path = '../../build/';

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, my_path)));

// Handle requests to the root URL
app.get(['/', '/home', '/login', '/meetingScheduler', '/*'], (req, res) => {
    // Send the index.html file from the build folder as the response
    res.sendFile(path.join(__dirname, my_path, 'index.html'));
});

// Start the server
app.listen(3001, () => console.log('Example app is listening on port 3001.'));

//database stuff 

const uri = "mongodb+srv://Filmdados:TimeFlow@timeflow.bba95oe.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected");
    }
    catch(error) {
        console.error(error);
    }
}
connect();

const user = new User({
    name: 'oskar',
    password: '12345',
    userId: 1
});

user.save()
.then(() => {
    console.log('User saved successfully');
})
.catch((err) => {
    console.error('Error saving user:', err);
});

app.get('/', async (req, res) => {
    const result = await user.find();
    res.send({"users": result});
});