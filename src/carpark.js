function CarPark() {
  this._carpark = [];
  this._charge_a_car = [];
}

CarPark.prototype.park = function(car) {
  this._carpark.push(car);
  return this._carpark;
}

CarPark.prototype.charge = function(car, hour) {
  if (hour <= 3 ) {
    this._charge_a_car.push([car, 10])

  } else if (hour > 3 && hour <= 7) {
    this._charge_a_car.push([car, 20])

  } else if (hour > 7) {
    this._charge_a_car.push([car, 30])
  }
  return this._charge_a_car;
}

CarPark.prototype.payFeeCash = function(car, fee) {
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
