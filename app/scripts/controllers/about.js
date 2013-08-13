'use strict';

angular.module('angularTestApp')
    .controller('AboutCtrl', function($scope, $http) {
      var apiUrl = 'http://api.flickr.com/services/rest/?method=flickr.tags.getClusterPhotos&api_key=4c2a311024775871cc745b9338ce894a&tag=tokyo';
      $http({method: 'JSONP', url: apiUrl + '&format=json&jsoncallback=JSON_CALLBACK'}).success(function(data) {
        $scope.page = data.photos.page;
        $scope.pages = data.photos.pages;
        $scope.perpage = data.photos.perpage;
        $scope.total = data.photos.total;
        $scope.photos = data.photos.photo;
      });

      $scope.filterTitle = function(photo) {
        var re = new RegExp($scope.query, 'ig');
        return re.test(photo.title);
      };

      $scope.currentTab = 'about';
    });
