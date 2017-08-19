'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	github: {
		id: String,
		displayName: String,
		username: String,
        publicRepos: Number
	},
	responses: [{
	    poll: {
	        type: Schema.Types.ObjectId,
	        ref: 'Poll'
	    },
	    answer: {
	        type: String,
	        trim: true,
	        required: true
	    }
	}],
    polls_authored: [{
        type: Schema.Types.ObjectId, 
        ref: 'Poll'
    }]
});

module.exports = mongoose.model('User', User);
