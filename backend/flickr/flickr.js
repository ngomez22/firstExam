// Import Flickr API module and configurations
var Flickr = require('flickrapi');
var flickrConfig = require('./flickr-config');
var rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// Get pictures that correspond to a search term
module.exports.getByTerm = function(searchTerm, callback) {
  Flickr.tokenOnly(flickrConfig, function(error, flickr) {
    if(error) {
      throw error;
    }
    flickr.photos.search({
      api_key: flickrConfig.api_key,
      text: searchTerm,
      page: 1,
      per_page: 10
    }, callback);
  });
};

// Get URLS of pictures that correspond to a search term
module.exports.getURLByTerm = function(searchTerm, callback) {
  Flickr.tokenOnly(flickrConfig, function(error, flickr) {
    if(error) {
      throw error;
    }
    flickr.photos.search({
      api_key: flickrConfig.api_key,
      text: searchTerm,
      page: 1,
      per_page: 10
    }, function(err, result) {
      if(err) {
        throw err;
      }
      var urls = []
      for(var i=0; i<result.photos.photo.length; i++) {
        var currPic = result.photos.photo[i];
        var currUrl = "https://farm" + currPic.farm +
          ".staticflickr.com/" + currPic.server
          + "/" + currPic.id
          + "_" + currPic.secret + ".jpg";
        urls.push(currUrl);
      }
      callback(urls);
    });
  });
};

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
        per_page: 10
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
