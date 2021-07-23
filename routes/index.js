var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home');
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

/* GET /contact page */
router.get('/contact', function(req, res) {
  res.render('contact');
});

/* GET /testing page */
router.get('/testing', function(req, res) {
  res.render('testing');
});

module.exports = router;
