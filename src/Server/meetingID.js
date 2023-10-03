const mongoose = require('mongoose');

const participantPropMeetingID = new mongoose.Schema({
    meetingProposalId: Number,  
    userId: Number
});

module.exports = mongoose.model("MeetingPropID", participantPropMeetingID);