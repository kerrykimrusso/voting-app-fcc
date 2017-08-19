'use strict';

const User = require('../models/user.js');
const Poll = require('../models/poll.js');

module.exports = {
    create: function(req, res) {
        console.log(req.user.save);
        // Poll.create({
        //     question: req.body.question,
        //     repsonses: req.body.responses
        // }).then((doc) => {
        //     // req.user.polls_authored.push(doc.id).save()
        // })
        // .catch(console.log.bind(console));
    },
    castVote: function(req, res) {
        res.json({ status: 'TODO'});
    },
    list: function(req, res) {
        res.json({ status: 'TODO'});
    },
    findById: function(req, res) {
        res.json({ status: 'TODO'});
    },
}
