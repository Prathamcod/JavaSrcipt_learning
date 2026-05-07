// Normal Function
function greet() {
  console.log("Hello");
}

greet();

//  Function with Parameter
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Function Expression
const sayHi = function () {
  console.log("Hi");
};

sayHi();
// Anonymous Function
setTimeout(function () {
  console.log("Done");
}, 1000);

function test() {
  console.log("Hello");
}

console.log(test());

//  Callback Function
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function bye() {
  console.log("Bye");
}

greet("Pratham", bye);

// Anonymous Callback
function process(callback) {
  callback();
}

process(function () {
  console.log("Processing...");
});

//  Function Inside Function
function outer() {
  function inner() {
    console.log("Inner");
  }

  inner();
}

outer();

//  Return Function
function outer() {
  return function () {
    console.log("Returned Function");
  };
}

const result = outer();
result();

// Parameter Confusion
function show(value) {
  console.log(value);
}

//  Function Call vs Reference
function hello() {
  console.log("Hello");
}

const x = hello;

x();

//  Callback with Value
function calc(a, b, callback) {
  console.log(callback(a, b));
}

calc(2, 3, function (x, y) {
  return x * y;
});

//  Anonymous Function Immediate Call
(function () {
  console.log("IIFE");
})();

// Callback Execution
function run(callback) {
  return callback();
}

console.log(
  run(function () {
    return "JS";
  }),
);
// Function Hoisting
hello();

function hello() {
  console.log("Hello");
}

// Function Expression Hoisting
sayHi();

const sayHi = function () {
  console.log("Hi");
};

// Interview-Level Callback
function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}

const user = greet("Pratham");

user();
