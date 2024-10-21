const pizzaToppings = ["sausage", "peperoni", "cheese", "spinach"];

function greetCustomer(toppings) {
  console.log(`Welcome to our pizza place. The toppings are ${toppings}`);
  for (let topping of toppings) {
    console.log(topping);
  }
}
greetCustomer(pizzaToppings);

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size}, ${crust} crust pizza with ${toppings} coming up!`);
  return [size, crust, toppings];
}

let pizzaOrder = getPizzaOrder(
  "small",
  "thin",
  "cheese",
  "sausage",
  "mushroom"
);

console.log(pizzaOrder);

function preparePizza([size, crust, toppings]) {
  console.log("Cooking pizza");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

let pizza = preparePizza(pizzaOrder);
console.log(pizza);

function servePizza(pizza) {
  console.log(
    `Order up! Here's your ${pizza.size}, ${pizza.crust} pizza with ${pizza.toppings}. Enjoy!`
  );
  return pizzaToppings;
}
servePizza(preparePizza(getPizzaOrder("small", "cheese", "sausage")));
