'use strict';

/**
 * @ngdoc directive
 * @name capacitacionApp.directive:ttMenu
 * @description
 * # ttMenu
 */
angular.module('capacitacionApp')
  .directive('ttMenu', function () {
    return {
      templateUrl: 'views/tt-menu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
