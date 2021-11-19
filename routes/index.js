var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('home');
});

/* GET /privacydam page */
router.get('/privacydam', function (req, res) {
  res.render('privacydam');
});

/* GET downlaod privacydam demo-guide korean version */
router.get('/privacydam/download/demo-guide-ko', function (req, res) {
  res.download('./public/doc/privacydam/demo-guide-ko.pdf');
});

/* GET downlaod privacydam demo-guide english version */
router.get('/privacydam/download/demo-guide-en', function (req, res) {
  res.download('./public/doc/privacydam/demo-guide-en.pdf');
});

/* GET /consulting page */
router.get('/consulting', function (req, res) {
  res.render('consulting');
});

/* GET /consulting page */
router.get('/company', function (req, res) {
  res.render('company');
});

/* GET /contact page */
router.get('/contact', function (req, res) {
  res.render('contact');
});

/* GET /testing page */
router.get('/testing', function (req, res) {
  res.render('testing');
});

module.exports = router;
