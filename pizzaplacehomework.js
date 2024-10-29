const pizzaPlace = "Slice of Heaven";
const numberOfToppings = 10;

console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);

console.log(`Welcome to ${pizzaPlace}. We offer ${numberOfToppings} toppings`);

if (numberOfToppings < 15) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
