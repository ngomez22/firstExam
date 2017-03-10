// Import Flickr API module and configurations
var Flickr = require('flickrapi');
var flickrConfig = require('./flickr-config');
var rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// Get pictures of a specific color given a term
module.exports.getColor = function(searchTerm, color, callback) {
  Flickr.tokenOnly(flickrConfig, function(error, flickr) {
    if(error) {
      throw error;
    }
    var urls = [];
    flickr.photos.search({
      api_key: flickrConfig.api_key,
      text: searchTerm + " " + color,
      safe: 1,
      sort: 'relevance',
      page: 1,
      per_page: 100
    }, function(err, result) {
      if(err) {
        throw err;
      }
      result.photos.photo.forEach(function(picture) {
        var currUrl = "https://farm" + picture.farm +
          ".staticflickr.com/" + picture.server
          + "/" + picture.id
          + "_" + picture.secret + "_s.jpg";
        urls.push(currUrl);
      })
      callback(urls)
    });
  });
}


// Get rainbow of picture URLS
module.exports.getRainbow = function(searchTerm, callback) {
  Flickr.tokenOnly(flickrConfig, function(error, flickr) {
    if(error) {
      throw error;
    }
    var urls = {};
    var colorsProcessed = 0;
    rainbow.forEach(function(color) {
      urls[color] = [];
      flickr.photos.search({
        api_key: flickrConfig.api_key,
        text: searchTerm + " " + color,
        page: 1,
        per_page: 100
      }, function(err, result) {
        if(err) {
          throw err;
        }
        result.photos.photo.forEach(function(picture) {
          var currUrl = "https://farm" + picture.farm +
            ".staticflickr.com/" + picture.server
            + "/" + picture.id
            + "_" + picture.secret + ".jpg";
          urls[color].push(currUrl);
        })
        colorsProcessed++;
        if(colorsProcessed == rainbow.length) {
          callback(urls)
        }
      });
    })
  });
};
