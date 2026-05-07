// Convert into arrow function:

// function greet() {
//   console.log("Hello");
// }

// Arrow function
// const add = (a, b) => a + b;

// console.log(add(2, 3));

// square using the arrow function
const square = (x) => x * x;

console.log(square(4));

// const sayHi = () => "Hi";

// console.log(sayHi());

// const test = () => {
//   return 100;
// };

// console.log(test());

// function multiply(a, b) {
//   return a * b;
// }

// const nums = [1, 2, 3];

// const result = nums.map(num => num + 1);

// console.log(result);

// const even = n => n % 2 === 0;

// console.log(even(4));

// const greet = name => {
//   console.log("Hello " + name);
// };

// greet("Pratham");

// const x = () => {};

// console.log(typeof x);

// const test = () => ({
//   name: "JS"
// });

// console.log(test());

// const add = (a, b) => {
//   a + b;
// };

// console.log(add(2, 3));

// function with object
// const user = {
//   name: "Pratham",

//   greet: () => {
//     console.log(this.name);
//   },
// };

// console.log(user);

const user = {
  name: "Pratham",

  greet() {
    console.log(this.name);
  },
};

user.greet();
