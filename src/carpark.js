function CarPark() {
  this._carpark = [];
  this._payment = new Payment();
}

CarPark.prototype.park = function(car) {
  this._carpark.push(car);
  return this._carpark;
}

CarPark.prototype.charge = function(car, hour) {
  if (hour <= 3 ) {
    this._payment._charge_a_car.push([car, 10])

  } else if (hour > 3 && hour <= 7) {
    this._payment._charge_a_car.push([car, 20])

  } else if (hour > 7) {
    this._payment._charge_a_car.push([car, 30])
  }
  return this._payment._charge_a_car;
}

CarPark.prototype.payFeeCash = function(car, fee) {
  return this._payment.processPayment(car, fee);
}
