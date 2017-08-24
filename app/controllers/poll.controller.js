'use strict';

const User = require('../models/user.js');
const Poll = require('../models/poll.js');

module.exports = {
    create: function(req, res, next) {
        const { question, responses } = req.body;
        
        Poll.create({
            question,
            responses,
            author: req.user.id
        })
            .then(function onCreatePollSuccess(doc) {
                res.json(doc);
            })
            .catch(next);
    },
    castVote: function(req, res, next) {
        res.json({ status: 'TODO'});
    },
    list: function(req, res) {
        res.json({ status: 'TODO'});
    },
    findById: function(req, res) {
        res.json({ status: 'TODO'});
    },
}
