'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	github: {
		id: String,
		displayName: String,
		username: String,
        publicRepos: Number
	},
	polls_responded: [{
	    type: Schema.Types.ObjectId,
	    ref: 'Poll'
	}],
    polls_authored: [{
        type: Schema.Types.ObjectId, 
        ref: 'Poll'
    }]
});

module.exports = mongoose.model('User', userSchema);
