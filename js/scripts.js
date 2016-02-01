
$(document).ready(function() {
  var toppings = {
//Meats
  pep: {name: "Pepperoni", quantity: 0},
  sas: {name: "Sausage", quantity: 0},
  can: {name: "Canadian Bacon", quantity: 0},
  chi: {name: "Chicken", quantity: 0},
  grb: {name: "Ground Beef", quantity: 0},
  bac: {name: "Cooked Bacon Bits", quantity: 0},
//Cheeses
  moz: {name: "Mozzerella", quantity: 0},
  chd: {name: "Cheddar", quantity: 0},
  pam: {name: "Parmasean", quantity: 0, quantity: 0},
  sws: {name: "Swiss", quantity: 0},
//Veggies
  oli: {name: "Olive", quantity: 0, quantity: 0},
  pin: {name: "Pineapple", quantity: 0},
  mus: {name: "Mushroom", quantity: 0},
  tom: {name: "Tomato", quantity: 0},
  rrp: {name: "Roasted Red Pepper", quantity: 0},
  jal: {name: "Jalepeño", quantity: 0},
//Sauces
  rch: {name: "Ranch", quantity: 0},
  mar: {name: "Marinara", quantity: 0},
  sch: {name: "Sweet Chili Ranch", quantity: 0},
  }
var size = {
  0: {name: "Small"},
  1: {name: "Medium"},
  2: {name: "Large"},
  3: {name: "Xtra-Large"},
}
  function Pizza(size, toppings) {
    this.toppings = toppings;
    this.size = size;
  };

  Pizza.prototype.price = function() {
    var price = 0;
    price += 6+(this.size*2);
    price += this.toppings.length;
    return price;
  };
  //sausage button

  Pizza.prototype.addTopping = function(topping) {
    this.toppings[topping].quantity += 1;
    updateQuantity(topping);
  }

  Pizza.prototype.removeTopping = function(topping) {
    if(this.toppings[topping].quantity > 0) {
      this.toppings[topping].quantity -= 1;
    }
    updateQuantity(topping);
  }

  Pizza.prototype.changeSize = function(size) {
    this.size = size;
  }

  function updateQuantity(topping) {
    $("#"+topping+"_quantity").html(pizza.toppings[topping].quantity);
  }

  var pizza = new Pizza(0, toppings, "");
$(".add-button").click(function(e) {
    e.preventDefault();
    pizza.addTopping($(this).data("topping"));
  });
$(".remove-button").click(function(e) {
    e.preventDefault();
    pizza.removeTopping($(this).data("topping"));
  });
// $("#sausage_add").click(pizza.addTopping("sas"));
// //pepperoni button
// $("#pepperoni_add").click(pizza.addTopping("pep"));
// //canadian bacon button
// $("#canadian_add").click(pizza.addTopping("can"));
// //chicken button
// $("#chicken_add").click(pizza.addTopping("chi"));
// //ground beef button
// $("#ground_add").click(pizza.addTopping("grb"));
// //bacon button
// $("#bacon_add").click(pizza.addTopping("bac"));
// //mozzerella button
// $("#mozzerella_add").click(pizza.addTopping("moz"));
// //cheddar button
// $("#cheddar_add").click(pizza.addTopping("chd"));
// //parmasean button
// $("#parmasean_add").click(pizza.addTopping("pam"));
// //swiss button
// $("#swiss_add").click(pizza.addTopping("sws"));
// //olive button
// $("#olive_add").click(pizza.addTopping("olive"));
// //pineapple button
// $("#pineapple_add").click(pizza.addTopping("pin"));
// //tomato button
// $("#tomato_add").click(pizza.addTopping("tom"));
// //mushroom button
// $("#mushroom_add").click(pizza.addTopping("mus"));
// //Roated Red Pepper button
// $("#redpepper_add").click(pizza.addTopping("rrp"));
// //jalepeno button
// $("#jalepeno_add").click(pizza.addTopping("jal"));
// //ranch button
// $("#ranch_add").click(pizza.addTopping("rch"));
// //sweet chili button
// $("#sweetchili_add").click(pizza.addTopping("sch"));
// // marinara button
// $("#marinara_add").click(pizza.addTopping("mar"));
// //small size
// $("#small_add").click(pizza.changeSize(0));
// //medium
// $("#medium_add").click(pizza.changeSize(1));
// //large
// $("#large_add").click(pizza.changeSize(2));
// //x-large
// $("#xtralarge_add").click(pizza.changeSize(3));


});
