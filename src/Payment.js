'use strict';

function Payment () {
  this._charge_a_car = [];
  this._my_pocket = 0;
}

Payment.prototype.processPayment = function(car, fee) {
  var payment

  this._charge_a_car.forEach(function(item) {
    if (item[0] === car) {
      payment = item[1]
      return payment
    }
  })

  if (payment === fee) {
    return true
  } else {
    return false
  }
}

Payment.prototype.topUp = function(money) {
  return this._my_pocket += money;
}
