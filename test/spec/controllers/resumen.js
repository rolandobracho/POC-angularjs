'use strict';

describe('Controller: ResumenCtrl', function () {

  // load the controller's module
  beforeEach(module('capacitacionApp'));

  var ResumenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResumenCtrl = $controller('ResumenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResumenCtrl.awesomeThings.length).toBe(3);
  });
});
