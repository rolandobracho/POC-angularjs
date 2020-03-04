'use strict';

describe('Service: proyecto', function () {

  // load the service's module
  beforeEach(module('capacitacionApp'));

  // instantiate service
  var proyecto;
  beforeEach(inject(function (_proyecto_) {
    proyecto = _proyecto_;
  }));

  it('should do something', function () {
    expect(!!proyecto).toBe(true);
  });

});
