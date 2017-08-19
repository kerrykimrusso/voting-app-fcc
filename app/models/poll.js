'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: String,
        trim: true,
        required: true
    },
    responses: [{
        answer: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            default: 0
        }
    }]
});

pollSchema.virtual('totalResponses').get(function() {
    return this.responses.reduce((accumulator, response) => {
        return accumulator + response.count;
    }, 0);
});

module.exports = mongoose.model('Poll', pollSchema);