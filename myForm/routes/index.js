var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Get encomendar */
router.get('/encomendar', function(req, res, next){
  res.render('encomendar');
});

module.exports = router;
