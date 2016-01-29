
  var toppings = {
//Meats
  pep: {name: "Pepperoni"}
  sas: {name: "Sausage"}
  can: {name: "Canadian Bacon"}
  chi: {name: "Chicken"}
  grb: {name: "Ground Beef"}
  bac: {name: "Cooked Bacon Bits"}
//Cheeses
  moz: {name: "Mozzerella"}
  chd: {name: "Cheddar"}
  pam: {name: "Parmasean"}
  sws: {name: "Swiss"}
//Veggies
  oli: {name: "Olive"}
  pin: {name: "Pineapple"}
  mus: {name: "Mushroom"}
  tom: {name: "Tomato"}
  rrp: {name: "Roasted Red Pepper"}
  jal: {name: "Jalepeño"}
//Sauces
  rch: {name: "Ranch"}
  mar: {name: "Marinara"}
  sch: {name: "Sweet Chili Ranch"}
  }

  var oli = {name: "Olive"}
  var pin = {name: "Pineapple"}
  var mus = {name: "Mushroom"}
  var tom = {name: "Tomato"}
  var rrp = {name: "Roasted Red Pepper"}
  var jal = {name: "Jalepeño"}

  var rch = {name: "Ranch"}
  var mar = {name: "Marinara"}
  var sch = {name: "Sweet Chili"}

  function Pizza(size, toppings, name) {
    this.name = name;
    this.toppings = toppings;
    this.size = size;
  }

  Pizza.prototype.price = function() {
    var price = 0;
    price += 6+(this.size*2);
    price += this.toppings.length;
    return price;
  }
$("#pepperoni_add").click(pizza.addTopping("pep"));

function addTopping(topping) {
  this.toppings[topping].quantity += 1;
}

  var pizza = new Pizza(0, {}, "");
