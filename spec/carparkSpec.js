describe("CarPark", function() {
  var carpark;


  beforeEach(function() {
    carpark = new CarPark();
  });

  describe('.park', () => {
    it('can park my car in carpark', () => {
      var car
      expect(carpark.park(car)).toContain(car)
    });
  });


});