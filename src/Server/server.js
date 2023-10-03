const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./user.js');
const MeetingProp = require('./meeting.js');
const MeetingPropID = require('./meetingID.js');
const app = express();

const my_path = '../../build/';

app.use(bodyParser.json());

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
app.post('/api/meeting', async (req, res) => {
    const {meetingProposalId, location, startTime, endTime, createrUserId} = req.body;

    try{
        let check = await MeetingProp.findOne({meetingProposalId: 1});
       if(check == null)
       {
        const meetingProposal = new MeetingProp({meetingProposalId: meetingProposalId,
                                                location: location, 
                                                startTime:startTime, 
                                                endTime:endTime,
                                                createrUserId:createrUserId});
        meetingProposal.save();
        return res.status(200);
       }
       return res.status(400).json({ error: 'Id allredy in use'});
    }
    catch{
        return res.status(400).json({ error: 'Faill to insert to database'});
    }
});

//url to DB
const url = "mongodb+srv://Filmdados:TimeFlow@timeflow.bba95oe.mongodb.net/?retryWrites=true&w=majority"; 

//connect to db
async function connect(){
    try{
        await mongoose.connect(url);
        console.log("Connected");
    }
    catch(error) {
        console.error(error);
    }
}
connect();

//create new User
let user = new User({
    name: 'oskar',
    password: '12345',
    userId: 1
});
//adds new user
async function saveUser(user){
    let check = await MeetingProp.findOne({meetingProposalId: 1});
    if(check == null)
    {
        user.save()
        .then(() => {
            console.log('User saved successfully');
        })
        .catch((err) => {
            console.error('Error saving user:', err);
        });
    }
    else
    {
        console.log('Id allredy in use');
    }
}
saveUser(user);


//gets a recuested user from DB
async function getUser(){
    try{
       const user1 = await User.findOne({ name: 'oskar' });
       console.log(user1);
    }
    catch(error) {
        console.error(error);
    }
}

getUser();





