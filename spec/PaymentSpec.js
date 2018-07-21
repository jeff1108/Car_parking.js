'use strict';

describe("Payment", function() {
  var payment;
  var carPark;
  var car;

  beforeEach(function() {
    payment = new Payment();
    carPark = new CarPark();
    car = new Car();
  });

  describe('.processPayment', () => {
    it('processes the payment', () => {
      carPark.charge(car, 1);
      carPark.payFeeCash(car, 10);
      expect(carPark._payment.processPayment(car, 10)).toBeTruthy()
    });
  });
});
