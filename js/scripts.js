
  var toppings = {
//Meats
  pep: {name: "Pepperoni"},
  sas: {name: "Sausage"},
  can: {name: "Canadian Bacon"},
  chi: {name: "Chicken"},
  grb: {name: "Ground Beef"},
  bac: {name: "Cooked Bacon Bits"},
//Cheeses
  moz: {name: "Mozzerella"},
  chd: {name: "Cheddar"},
  pam: {name: "Parmasean"},
  sws: {name: "Swiss"},
//Veggies
  oli: {name: "Olive"},
  pin: {name: "Pineapple"},
  mus: {name: "Mushroom"},
  tom: {name: "Tomato"},
  rrp: {name: "Roasted Red Pepper"},
  jal: {name: "Jalepeño"},
//Sauces
  rch: {name: "Ranch"},
  mar: {name: "Marinara"},
  sch: {name: "Sweet Chili Ranch"},
  }
var size = {
  0: {name: "Small"}
  1: {name: "Medium"}
  2: {name: "Large"}
  3: {name: "Xtra-Large"}
}
  function Pizza(size, toppings) {
    this.toppings = toppings;
    this.size = size;
  }

  Pizza.prototype.price = function() {
    var price = 0;
    price += 6+(this.size*2);
    price += this.toppings.length;
    return price;
  }
  //sausage button
$("#sausage_add").click(pizza.addTopping("sas"));
//pepperoni button
$("#pepperoni_add").click(pizza.addTopping("pep"));
//canadian bacon button
$("#canadian_add").click(pizza.addTopping("can"));
//chicken button
$("#chicken_add").click(pizza.addTopping("chi"));
//ground beef button
$("#ground_add").click(pizza.addTopping("grb"));
//bacon button
$("#bacon_add").click(pizza.addTopping("bac"));
//mozzerella button
$("#mozzerella_add").click(pizza.addTopping("moz"));
//cheddar button
$("#cheddar_add").click(pizza.addTopping("chd"));
//parmasean button
$("#parmasean_add").click(pizza.addTopping("pam"));
//swiss button
$("#swiss_add").click(pizza.addTopping("sws"));
//olive button
$("#olive_add").click(pizza.addTopping("olive"));
//pineapple button
$("#pineapple_add").click(pizza.addTopping("pin"));
//tomato button
$("#tomato_add").click(pizza.addTopping("tom"));
//mushroom button
$("#mushroom_add").click(pizza.addTopping("mus"));
//Roated Red Pepper button
$("#redpepper_add").click(pizza.addTopping("rrp"));
//jalepeno button
$("#jalepeno_add").click(pizza.addTopping("jal"));

$("#pepperoni_add").click(pizza.addTopping("pep"));

$("#pepperoni_add").click(pizza.addTopping("pep"));

$("#pepperoni_add").click(pizza.addTopping("pep"));

$("#pepperoni_add").click(pizza.addTopping("pep"));

$("#pepperoni_add").click(pizza.addTopping("pep"));

$("#pepperoni_add").click(pizza.addTopping("pep"));

$("#pepperoni_add").click(pizza.addTopping("pep"));

$("#pepperoni_add").click(pizza.addTopping("pep"));

$("#pepperoni_add").click(pizza.addTopping("pep"));

$("#pepperoni_add").click(pizza.addTopping("pep"));


function addTopping(topping) {
  this.toppings[topping].quantity += 1;
}

  var pizza = new Pizza(0, {}, "");
