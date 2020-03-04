'use strict';

describe('Directive: ttFooter', function () {

  // load the directive's module
  beforeEach(module('capacitacionApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tt-footer></tt-footer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ttFooter directive');
  }));
});
