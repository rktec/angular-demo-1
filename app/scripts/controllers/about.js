'use strict';

angular.module('angularTestApp')
    .controller('AboutCtrl', function($scope, $routeParams, $location, flickrAPI) {
      $scope.currentTab = 'about';

      $scope.filterTitle = function(photo) {
        var re = new RegExp($scope.query, 'ig');
        return re.test(photo.title);
      };

      $scope.tag = $routeParams.id;

      $scope.search = function () {
        // this shows the waiting
        $scope.photos = undefined;

        if (!$scope.tag) return;

        $location.path('/about/' + $scope.tag);

        flickrAPI.getClusterPhotos($scope.tag, function(photos) {
          $scope.photos = photos;
        });
      };

      $scope.search();
    });
