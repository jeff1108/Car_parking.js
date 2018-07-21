'use strict';

describe("Car", function() {
  var car;

  beforeEach(function() {
    car = new Car();
  });

  describe('.initialize', () => {
    it('creates a car', () => {
    expect(car.initialize()).not.toBeNull()
    });
  });

});
