'use strict';

angular.module('angularTestApp')
    .controller('AboutCtrl', function($scope, $http, $routeParams, flickrAPI) {
      $scope.currentTab = 'about';

      $scope.filterTitle = function(photo) {
        var re = new RegExp($scope.query, 'ig');
        return re.test(photo.title);
      };

      $scope.tag = $routeParams.id;

      $scope.search = function () {
        if (!$scope.tag) return;

        // this shows the waiting
        $scope.photos = undefined;

        flickrAPI.getClusterPhotos($scope.tag, function(photos) {
          $scope.photos = photos;
        });
      };

      $scope.search();
    });
