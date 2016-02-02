describe("Pizza", function() {
  it("allows you to add toppings", function() {
    var testPizza = new Pizza(1, {pep: {name: "Pepperoni", quantity: 0}}, "Test Pizza")
    testPizza.addTopping("pep");
    expect(testPizza.toppings.pep.quantity).to.equal(1);

  });

  it("allows you to remove toppings", function() {
    var testPizza = new Pizza (1, {pep: {name:"Pepperoni", quantity: 1}}, "Test Pizza")
    testPizza.removeTopping("pep");
    expect(testPizza.toppings.pep.quantity).to.equal(0);
  });
});
