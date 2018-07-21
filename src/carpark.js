function CarPark() {
  this._carpark = [];
}

CarPark.prototype.park = function(car) {
  this._carpark.push(car)
  return this._carpark;
}
