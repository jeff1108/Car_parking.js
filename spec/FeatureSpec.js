'use strict';

describe("Feature Test", function() {
  var carpark;


  beforeEach(function() {
    carpark = new CarPark();
  });

  describe('Park a car', () => {
    it('A User can park a car', () => {
      var car
      expect(carpark.park(car)).toContain(car)
    });
  });


});
