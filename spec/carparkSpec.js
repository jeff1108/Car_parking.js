'use strict';

describe("CarPark", function() {
  var carpark;
  var car;


  beforeEach(function() {
    carpark = new CarPark();
    car = new Car();
  });

  describe('.park', () => {
    it('can park my car in carpark', () => {
      expect(carpark.park(car)).toContain(car)
    });
  });


});
