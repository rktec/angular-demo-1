'use strict';

angular.module('angularTestApp')
  .filter('upp', function () {
    return function (input) {
      return input.toLowerCase();
    };
  });
