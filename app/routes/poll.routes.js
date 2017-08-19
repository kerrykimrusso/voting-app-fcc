const router = require('express').Router();
const controller = require('../controllers/poll.controller');

router.get('/', controller.list);
router.get('/:id', controller.findById);
router.put('/:id', controller.castVote);
router.post('/new', controller.create);

module.exports = router;