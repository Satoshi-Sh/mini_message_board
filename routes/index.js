var express = require('express');
var router = express.Router();

let messages = require('../public/javascripts/messages.js')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages:messages });
});

module.exports = router;


