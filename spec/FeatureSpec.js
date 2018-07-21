'use strict';

describe("Feature Test", function() {
  var carpark;
  var car;
  var car2;


  beforeEach(function() {
    carpark = new CarPark();
    car = new Car();
    car2 = new Car();
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

  describe('Paying car park fee', () => {
    it('A User can pay the car park fee using cash, scenario 1', () => {
      carpark.park(car)
      carpark.charge(car, 1)
      expect(carpark.payFeeCash(car, 10)).toBeTruthy()
    });

    it('A User can pay the car park fee using cash, scenario 2', () => {
      carpark.park(car)
      carpark.charge(car, 1)
      carpark.park(car2)
      carpark.charge(car2, 2)
      expect(carpark.payFeeCash(car, 10)).toBeTruthy()
    });

    it('A User can pay the car park fee using cash, scenario 3', () => {
      carpark.park(car)
      carpark.charge(car, 1)
      carpark.park(car2)
      carpark.charge(car2, 5)
      expect(carpark.payFeeCash(car2, 20)).toBeTruthy()
    });

  });

});
