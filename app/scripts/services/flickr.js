'use strict';

angular.module('angularTestApp')
    .service('flickrAPI', function flickr($http) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      function getClusterPhotos(callback) {
        var key = '911663d70af9a5745cc79545285ae93e';
        var apiUrl = 'http://api.flickr.com/services/rest/?method=flickr.tags.getClusterPhotos&api_key=' + key +
            '&tag=mac';
        $http({method: 'JSONP', url: apiUrl + '&format=json&jsoncallback=JSON_CALLBACK'}).success(function(data) {
          callback(data.photos.photo);
        });
      }

      return {
        getClusterPhotos: getClusterPhotos
      };
    });
