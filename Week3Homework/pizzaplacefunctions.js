const pizzaToppings = ["sausage", "peperoni", "cheese", "spinach"];

function greetCustomer() {
  console.log("Welcome to Pizza House!");
  console.log("Our toppings are:");
  pizzaToppings.forEach(topping => {
    console.log(`- ${topping}`);
  });
}

function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    `One ${size} ${crust} pizza with ${toppings.join(", ")}. Coming up!`
  );
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

function preparePizza(pizzaArray) {
  const [size, crust, toppings] = pizzaArray;
  console.log(`...your pizza is cooking...`);
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

function servePizza(pizza) {
  console.log(
    `Order up! Here's your ${pizza.size} ${
      pizza.crust
    } pizza with ${pizza.toppings.join(", ")}. Enjoy!`
  );
  return pizza;
}

greetCustomer();
const order = getPizzaOrder(
  "large",
  "thick crust",
  "sausage",
  "pepperoni",
  "cheese",
  "spinach"
);
const preparedPizza = preparePizza([order.size, order.crust, order.toppings]);
servePizza(preparedPizza);
