'use strict';

angular.module('angularTestApp')
  .directive('photo', function () {
    return {
      templateUrl: '/views/photo.html',
      scope: {
        photo: '='
      },
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
