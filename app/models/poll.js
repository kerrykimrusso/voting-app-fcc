'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        text: {
            type: String,
            trim: true,
            required: true
        },
        choices: [{
            text: {
                type: String,
                required: true
            },
            votes: {
                type: Number,
                default: 0
            }
        }]
    }
});

pollSchema.virtual('totalVotes').get(function() {
    return this.question.choices.reduce((accumulator, choice) => {
        return accumulator + choice.votes;
    }, 0);
});

module.exports = mongoose.model('Poll', pollSchema);