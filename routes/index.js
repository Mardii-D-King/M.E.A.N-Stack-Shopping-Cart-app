var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//render variable content of title on html
  res.render('index', { title: 'Shopping Cart' });
});

module.exports = router;
