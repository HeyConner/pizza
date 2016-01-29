describe('pizzaToppings', function(pizza) {
  it("is is true for the user inputting any of the toppings available", function() {
    expect(pizzaToppings(jalapeno)).to.equal(true);
  });
  it("is false for toppings undefined in pizzaTopping")
})
