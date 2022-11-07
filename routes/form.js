var express = require('express');
var router = express.Router();
let messages = require('../public/javascripts/messages.js')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Mini Messageboard' });
});

/* Post */ 
router.post('/', function(req,res, next){
  messages.push({text:req.body.comment,user:req.body.name,added:new Date()})
  res.redirect('/')
})



module.exports = router;
