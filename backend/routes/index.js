var express = require('express');
var router = express.Router();
var flickr = require('../flickr/flickr');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/flickr/:term', function(req, res, next) {
  flickr.getByTerm(req.params.term, function(err, result) {
    if(err) {
      throw err;
    }
    res.json(result)
  })
});

router.get('/load/:term', function(req, res, next) {
  flickr.getURLByTerm(req.params.term, function(result) {
    res.json(result)
  })
});

router.get('/rainbow/:term', function(req, res) {
  flickr.getRainbow(req.params.term, function(result) {
    res.json(result);
  })
});


module.exports = router;
