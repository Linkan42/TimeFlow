const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./user.js');
const MeetingProp = require('./meeting.js');
//const MeetingPropID = require('./meetingID.js');
const app = express();

const my_path = '../../build/';

app.use(bodyParser.json());

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, my_path)));

//database stuff 
app.post('/api/meeting', async (req, res) => {
    console.log('Post this function was used');
    try{
        const {meetingId, location, startTime, endTime, agenda} = req.body;
        let check = await MeetingProp.findOne({meetingProposalId: 1});

       if(check == null)
       {
        console.log('server');
        const meetingProposal = new MeetingProp({meetingId: meetingId,
                                                location:location, 
                                                startTime:startTime, 
                                                endTime:endTime,
                                                createrUserId:1,
                                                agenda:agenda});
        console.log(meetingProposal);
        meetingProposal.save();
        return res.status(200);
       }
       return res.status(400).json({ error: 'Id allredy in use'});
    }
    catch{
        return res.status(400).json({ error: 'Faill to insert to database'});
    }
});

app.get('/api/meeting', async(req, res) => {

    console.log('get this function was used');
    
    try{
    const nextMeeting = await MeetingProp.find({}).sort('startTime').limit(1);
    if(nextMeeting)
    {
        res.json(nextMeeting);
    } else {
        res.status(404).json({ message: 'No upcoming meetings found' });
    }
} catch {
    res.status(500).json({ message: 'Error retrieving next meeting' });
}
});


// Handle requests to the root URL
app.get(['/', '/home', '/login', '/meetingScheduler', '/*'], (req, res) => {
    // Send the index.html file from the build folder as the response
    res.sendFile(path.join(__dirname, my_path, 'index.html'));
});

// Start the server
app.listen(3001, () => console.log('Example app is listening on port 3001.'));

app.post('/api/ValidateEmail', async (req, res) => {
    const Email = req.body.Email;

    try{
        const checkEmail = await User.findOne({Email: Email});

        if(checkEmail)
            return res.status(400).json({ error: 'Email already exists'});
        else
            return res.status(200).send('email doesnt exist');
    }
    catch{
        return res.status(400).json({ error: 'Failed to insert into database'});
    }
});

app.post('/api/ValidateName', async (req, res) => {
    const Name = req.body.Name;

    try{
        let checkName  = await User.findOne({Name: Name});

        if(checkName)
            return res.status(400).json({ error: 'Name already exists'});
        else
            return res.status(200).send('name doesnt exist');
    }
    catch{
        return res.status(400).json({ error: 'Failed to insert into database'});
    }
});

app.post('/api/CreateUser', async (req, res) => {
    const {Email, Name, Password, UserId} = req.body;

    try{
        let id = await User.count() + 1;
        const user = new User({Email: Email,
                               Name: Name,
                               Password: Password,
                               UserId: id});
        user.save();
        return res.status(200);
    }
    catch{
        return res.status(400).json({ error: 'Failed to insert into database'});
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
    Email: 'oskar@gmail.com',
    Name: 'oskar',
    Password: '12345',
    UserId: 1
});


//adds new user
async function saveUser(user){
    let check = await User.findOne({UserId: 1});
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
       const user1 = await User.findOne({ Name: 'oskar' });
       console.log(user1);
    }
    catch(error) {
        console.error(error);
    }
}

getUser();





