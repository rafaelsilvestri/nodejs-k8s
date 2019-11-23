const express = require('express');
const router = express.Router();
const controller = require('../controllers/hello-controller')

router.get('/', controller.getAll);
router.get('/:name', controller.getOne);

module.exports = router;