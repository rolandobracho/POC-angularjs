'use strict';

describe('Controller: IngresoCtrl', function () {

  // load the controller's module
  beforeEach(module('capacitacionApp'));

  var IngresoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IngresoCtrl = $controller('IngresoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IngresoCtrl.awesomeThings.length).toBe(3);
  });
});
