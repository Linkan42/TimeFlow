const mongoose = require('mongoose');

const meetingProposalSchema = new mongoose.Schema({
    meetingProposalId: Number,      //when a new meeting i propsed then we add this id and the name on the peple inited  
    location: String,               //example {'oskar': 2} and {'ivo' : 2} 
    startTime: String,
    endTime: String,
    createrUserId: Number 
});
module.exports = mongoose.model("MeetingProp", meetingProposalSchema);

