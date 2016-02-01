describe('updateQuantity', function() {
  it("is is true for the user inputting any of the desired quantitys available", function() {
      expect(toppings("#")).should.be("#");
  });
  it("is false for toppings undefined in toppings")
});
describe('changeSize', function() {
  it("is is true for the user inputting any of the desired sizes available", function() {
      expect(size("0")).should.be("0");
  });
  it("is false for toppings undefined in toppings")
})
describe('removeTopping', function() {
  it("is is true for the user removing any of the previously desired toppings available", function() {
      expect(toppings("#")).should.be(this.topping);
  });
  it("is false for toppings undefined in toppings")
})
