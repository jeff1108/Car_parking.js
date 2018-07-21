'use strict';

describe("Feature Test", function() {
  var carpark;
  var car;


  beforeEach(function() {
    carpark = new CarPark();
    car = new Car();
  });

  describe('Park a car', () => {
    it('A User can park a car', () => {
      expect(carpark.park(car)).toContain(car)
    });
  });

  describe('Charge for parking', () => {
    it('User 1 can know the fee for one hour', () => {
      carpark.park(car)
      expect(carpark.charge(car, 1)).toEqual([[car, 10]])
    });
    it('User1 and User2 can know the fee for two hour', () => {
      carpark.park(car)
      expect(carpark.charge(car, 1))
      carpark.park(car)
      expect(carpark.charge(car, 2)).toEqual([[car, 10],[car, 10]])
    });
  });


});
