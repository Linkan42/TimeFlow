const mongoose = require("mongoose");

const meetingProposalSchema = new mongoose.Schema({
	meetingId: Number,      
	location: String,              
	startTime: String,
	endTime: String,
	createrUserId: Number,
	agenda: String,
	date: Date
});
module.exports = mongoose.model("MeetingProp", meetingProposalSchema);

