var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET /privacydam page */
router.get('/privacydam', function(req, res) {
  res.render('privacydam');
});

/* GET /consulting page */
router.get('/consulting', function(req, res) {
  res.render('consulting');
});

/* GET /consulting page */
router.get('/company', function(req, res) {
  res.render('company');
});

module.exports = router;
