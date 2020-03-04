'use strict';

/**
 * @ngdoc directive
 * @name capacitacionApp.directive:ttFooter
 * @description
 * # ttFooter
 */
angular.module('capacitacionApp')
  .directive('ttFooter', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ttFooter directive');
      }
    };
  });
