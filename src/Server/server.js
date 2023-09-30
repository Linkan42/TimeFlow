const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const uri = "mongodb+srv://Filmdados:TimeFlow@timeflow.bba95oe.mongodb.net/?retryWrites=true&w=majority";
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