//server/routes/routes.js
var express = require('express');
var router = express.Router();
var postFunctions = require('./post_functions');

router.post('/contact', postFunctions.contact);
router.post('/registration', postFunctions.registration);
router.post('/freeGuide', postFunctions.freeGuide);

module.exports = router;