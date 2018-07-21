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

  describe('.charge', () => {
    it('can show the fee for parking', () => {
      expect(carpark.charge(car, 1)).toEqual([[car, 10]])
    });
  });

  // describe('.payFeeCash', () => {
  //   it('can pay the fee by cash', () => {
  //     expect(carpark.payFeeCash(10)).toBeTruthy()
  //   });
  // });


});
