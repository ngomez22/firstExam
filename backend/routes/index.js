var express = require('express');
var router = express.Router();
var flickr = require('../flickr/flickr');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:term-:color', function(req, res) {
  flickr.getColor(req.params.term, req.params.color, function(result) {
    res.json(result);
  })
});

router.get('/rainbow/:term', function(req, res) {
  flickr.getRainbow(req.params.term, function(result) {
    res.json(result);
  })
});


module.exports = router;
