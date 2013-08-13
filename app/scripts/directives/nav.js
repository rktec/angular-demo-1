'use strict';

angular.module('angularTestApp')
  .directive('navbar', function () {
    return {
      templateUrl: '/views/nav.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
