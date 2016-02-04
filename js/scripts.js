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
  this.pizzaSize = size;
  this.quantity = 1;
}

Pizza.prototype.price = function() {
  var price = 0;
  price += 6+(this.pizzaSize*2);
  var toppingsPrice = 0;
  for (topping in this.toppings) {
    toppingsPrice += pizza.toppings[topping].quantity;
  }

  toppingsPrice -= 7; // They get 7 free toppings
  if (toppingsPrice < 0) {
    toppingsPrice = 0;
  }
  price += toppingsPrice;
  price = price*this.quantity;

  return price;
}
//sausage button

Pizza.prototype.addTopping = function(topping) {
  this.toppings[topping].quantity += 1;
  updateQuantity(topping);
  changePrice();
}

Pizza.prototype.removeTopping = function(topping) {
  if(this.toppings[topping].quantity > 0) {
    this.toppings[topping].quantity -= 1;
  }
  updateQuantity(topping);
  changePrice();
}

Pizza.prototype.changeSize = function(size) {
  size = parseInt(size);
  this.pizzaSize = size;
  changePrice();
  $(".change-size").removeClass("active");
$("#size"+size).addClass("active");
}
Pizza.prototype.changeQuantity = function(quantity) {
  quantity = parseInt(quantity);
  if (quantity === 0 || isNaN(quantity)) {
    return false;
  } else {
    this.quantity = quantity;
    changePrice();
  }
}

function changePrice() {
  $("#price-total").html(pizza.price())
}

function updateQuantity(topping) {
  $("#"+topping+"_quantity").html(pizza.toppings[topping].quantity);
}
var pizza = new Pizza(0, toppings, "");
$(document).ready(function() {



$(".add-button").click(function(e) {
    e.preventDefault();
    pizza.addTopping($(this).data("topping"));
  });
$(".remove-button").click(function(e) {
    e.preventDefault();
    pizza.removeTopping($(this).data("topping"));
  });
$("#submit-quantity").click(function(e) {
  e.preventDefault();
  pizza.changeQuantity($("#user-quantity").val());
});
$(".change-size").click(function(e) {
  e.preventDefault();
  pizza.changeSize($(this).data("size"));

})

});
