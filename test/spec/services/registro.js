'use strict';

describe('Service: registro', function () {

  // load the service's module
  beforeEach(module('capacitacionApp'));

  // instantiate service
  var registro;
  beforeEach(inject(function (_registro_) {
    registro = _registro_;
  }));

  it('should do something', function () {
    expect(!!registro).toBe(true);
  });

});
