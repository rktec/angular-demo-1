'use strict';

angular.module('angularTestApp')
    .controller('AboutCtrl', function($scope, $http, flickrAPI) {
      $scope.filterTitle = function(photo) {
        var re = new RegExp($scope.query, 'ig');
        return re.test(photo.title);
      };

      flickrAPI.getClusterPhotos(function(photos) {
        $scope.photos = photos;
      });

      $scope.currentTab = 'about';
    });
